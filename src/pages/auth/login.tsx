import { signIn, useSession } from "next-auth/react";
import { trpc } from "src/utils/trpc";

export default function Login() {
  
  /*got user id from session object and stored
 it in a userHasRole variable  */
  const { data } = useSession();
  const userHasRole = trpc.auth.getRole.useQuery({ userId: data?.user?.id });

  return (
    <>
      {/* on button click, sign in with Google. if user already has a
       role i.e lecturer or student, redirect them back to the homepage.
        if not, proceed to the role page.*/}

      <button
        onClick={() =>
          signIn("google", { callbackUrl: userHasRole ? "/" : "/role" })
        }
      >
        Sign In With Google
      </button>
    </>
  );
}
