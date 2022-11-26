import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

enum Roles {
  STUDENT = "STUDENT",
  LECTURER = "LECTURER",
}

export const authRouter = router({


  /*get all available data about the current session */
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),


  /*create role for user i.e student / lecturer */
  createRole: protectedProcedure
    .input(
      z.object({
        role: z.nativeEnum(Roles) || z.undefined(),
        userId: z.string() || z.undefined(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      /*check if user with the provided id is available in the database */
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input.userId,
        },
      });

      /* check if the user does not have an assigned role yet*/
      const userWithoutRole = await ctx.prisma.userRole.findUnique({
        where: {
          userId: input.userId,
        },
      });

      /*if a user is found without a role, proceed to create a userRole object instance */
      if (user && !userWithoutRole) {
        const userRole = await ctx.prisma.userRole.create({
          data: {
            role: input.role,
            userId: input.userId,
          },
        });
        return userRole;
      }
    }),

    
  /*get user role with the provided user id */
  getRole: protectedProcedure
    .input(z.object({ userId: z.string().nullish() }))
    .query(async ({ input, ctx }) => {
      if (input.userId) {
        const userRole = await ctx.prisma.userRole.findUnique({
          where: {
            userId: input.userId,
          },
        });
        return userRole;
      } else {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User is not logged in. ",
        });
      }
    }),
});
