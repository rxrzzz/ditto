import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <Link href="/">Ditto</Link>
      <div>
        <aside>
          <Link href="/signin">Log In</Link>
          <Link href="/signin">Sign Up</Link>
        </aside>
      </div>
    </>
  );
};
