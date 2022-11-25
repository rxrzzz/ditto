import { type NextPage } from "next";
import Head from "next/head";
import { useLottie } from "lottie-react";
import homeAnimation from "../../public/homelottie.json";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const options = {
    animationData: homeAnimation,
    loop: true,
  };

  const { View: home } = useLottie(options);
  return (
    <>
      <Head>
        <title>Ditto: E-learning Platform.</title>
        <meta
          name="description"
          content="Join a growing community, get peer insights and discover
          exciting business opportunities and collaborations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className="flex flex-wrap items-center justify-around
       border-black py-32 font-grotesk"
      >
        <main className=" w-11/12  lg:w-5/12">
          <div
            className=" max-w-[550px] font-medium 
          opacity-90 md:mt-8 lg:mt-24"
          >
            <p
              className=" md:text-md text-sm font-bold 
            uppercase text-[#0857A0] lg:text-lg"
            >
              Ugrade Your Skill.
            </p>
            <h1 className=" my-3  text-5xl md:text-5xl lg:text-7xl">
              Explore courses to boost{" "}
              <span className="text-[#0857A0]">knowledge</span> and{" "}
              <span className="text-[#00DDB3]"> creativity.</span>
            </h1>
            <p className="mb-6 text-xl leading-tight">
              Join a growing community, get peer insights and discover
              <br />
              exciting business opportunities and collaborations.
            </p>
            <div>
              <button
                className="mr-6 rounded-xl bg-[#0857A0] 
              p-3 text-white"
              >
                Start Learning
              </button>
              <button
                className="rounded-xl bg-[#00DDB3]
               p-3 font-bold "
              >
                <span className="opacity-80"> Sign Up</span>
              </button>
            </div>
          </div>
        </main>
        <aside className="  mt-12 md:mt-14 lg:mt-0 lg:w-4/12">{home}</aside>
      </section>
      <section
        className="
        
       bg-[#00DDB3] py-12 font-grotesk"
      >
        <div className="mx-auto flex w-full flex-wrap justify-between">
          <div className="mx-auto my-4 w-11/12 lg:my-0 lg:w-2/12 ">
            <h1 className="max-w-[300px] text-4xl font-bold opacity-80 lg:text-5xl">
              Online Learning Designed For Real Life.
            </h1>
          </div>
          <div className="mx-auto w-11/12 py-4 lg:w-2/12 lg:py-0">
            <h2 className="my-2 text-xl font-bold opacity-75 ">
              User-friendly platform to learn.
            </h2>
            <p className="max-w-[300px]  text-lg ">
              Packed with modern technology classroom learning which used to be
              done conventionally.
            </p>
          </div>
          <div className="mx-auto w-11/12 py-4 lg:w-2/12 lg:py-0">
            <h2 className="my-2 text-xl font-bold opacity-75">
              Packed with modern technology.
            </h2>
            <p className="max-w-[300px] text-lg">
              learning theory, computer-based training, online learning and many
              more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-2">
//       {sessionData && (
//         <p className="text-2xl text-blue-500">
//           Logged in as {sessionData?.user?.email}
//         </p>
//       )}
//       {secretMessage && (
//         <p className="text-2xl text-blue-500">{secretMessage}</p>
//       )}
//       <button
//         className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
