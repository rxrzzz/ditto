import { signIn, useSession } from "next-auth/react";
import { trpc } from "src/utils/trpc";

export default function Login() {
  const { data } = useSession();

  const userId = data && data.user?.id
  const userHasRole = trpc.auth.getRole.useQuery({ userId: userId });
  console.log(userHasRole);
  return (
    <>
      <button
        onClick={() =>
          signIn("google")
        }
      >
        Sign In With Google
      </button>
    </>
  );
}
