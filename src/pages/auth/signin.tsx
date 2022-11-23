import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Sign In With Google
      </button>
    </>
  );
}
