import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

enum Roles {
  STUDENT = "STUDENT",
  LECTURER = "LECTURER",
}

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "You are logged in and can see this secret message!";
  }),

  createRole: protectedProcedure
    .input(
      z.object({
        role: z.nativeEnum(Roles) || z.undefined(),
        userId: z.string() || z.undefined(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input.userId,
        },
      });
      if (user) {
        const userRole = await ctx.prisma.userRole.create({
          data: {
            role: input.role,
            userId: input.userId,
          },
        });
        return userRole;
      }
    }),

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
          message: "User with thi",
        });
      }
    }),
});
