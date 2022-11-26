import { type NextPage } from "next";
import Head from "next/head";
import { useLottie } from "lottie-react";
import homeAnimation from "../../public/homelottie.json";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  /*lottie config options */
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
      <AuthShowcase />
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
            <h1 className=" my-3  text-5xl font-bold lg:text-6xl xl:text-7xl">
              Explore courses to boost{" "}
              <span className="text-[#0857A0]">knowledge</span> and{" "}
              <span className="text-[#00DDB3]"> creativity.</span>
            </h1>
            <p className="mb-6 text-xl leading-tight opacity-80">
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
        {/*lottie animation */}
        <aside className="  mt-12 md:mt-14 lg:mt-0 lg:w-4/12">{home}</aside>
      </section>
      <section
        className="
        
       bg-[#0857A0] py-24 font-grotesk md:py-48"
      >
        <div className="mx-auto flex w-full flex-wrap justify-between text-white">
          <div className="mx-auto my-4 w-11/12 lg:my-0 lg:w-2/12 ">
            <h1 className="max-w-[300px] text-4xl font-bold  lg:text-6xl">
              Online Learning{" "}
              <span className="underline decoration-[#00DDB3]">
                Designed For Real Life.
              </span>
            </h1>
          </div>
          <div className="mx-auto w-11/12 py-4 lg:w-2/12 lg:py-0">
            <h2 className="my-2 text-xl font-bold md:text-2xl  ">
              User-friendly platform to learn.
            </h2>
            <p className="max-w-[300px]  text-lg md:text-xl">
              Packed with modern technology classroom learning which used to be
              done conventionally.
            </p>
          </div>
          <div className="mx-auto w-11/12 py-4 lg:w-2/12 lg:py-0">
            <h2 className="my-2 text-xl font-bold md:text-2xl  ">
              Packed with modern technology.
            </h2>
            <p className="max-w-[300px]  text-lg md:text-xl">
              Learning theory, computer-based training, online learning and many
              more.
            </p>
          </div>
        </div>
      </section>
      <section className="my-12 flex flex-wrap justify-evenly font-grotesk">
        <Image
          src="/coursementor.jpg"
          alt="Course Mentor"
          className="mx-auto w-11/12 rounded-xl md:w-5/12"
          width={900}
          height={500}
        />
        <div className="mx-auto w-11/12 md:w-4/12 ">
          <h1 className="mt-16 max-w-[300px] text-4xl font-bold opacity-80 lg:text-6xl">
            <span className="underline decoration-[#00DDB3]"> Experienced</span>{" "}
            Course Mentors
          </h1>
          <p className="mt-3 max-w-[300px] text-xl font-medium opacity-70">
            Ditto can be utilized to present various kinds of learning
            materials, campus academic systems and various other educational
            needs.
          </p>
          <button
            className="mt-6 rounded-xl bg-[#0857A0] 
              p-3 font-bold text-white "
          >
            Start Learning
          </button>
        </div>
      </section>
      <section className="my-40">
        <div
          className="mx-auto flex w-[98%] max-w-[1800px] flex-col rounded-xl bg-[#0857A0] py-16
         font-grotesk text-white  md:py-32 lg:py-40"
        >
          <h1
            className="mx-auto mb-12 max-w-[900px] text-center text-3xl
           font-bold md:mb-16 md:text-4xl lg:mb-24 lg:text-5xl xl:text-6xl"
          >
            Train yourself with real world skills and knowledge.
          </h1>
          <div className="flex flex-wrap justify-evenly">
            <article className="mx-auto mb-8 h-fit w-11/12 md:w-5/12 lg:w-3/12">
              <Image
                alt="Course 1 "
                className="h-full w-full rounded-xl object-cover"
                src="/course1.jpg"
                width={1000}
                height={1000}
              />
              <h2 className="mt-4 text-xl font-medium opacity-90">
                Creative Writing: Crafting Personal Essays With Impact
              </h2>
              <button className="font-medium text-[#0857A0] underline">
                Learn More
              </button>
            </article>
            <article className=" mx-auto mb-8 h-fit w-11/12 md:w-5/12 lg:w-3/12">
              <Image
                alt="Course 2 "
                className="h-full w-full rounded-xl object-cover"
                src="/course2.jpg"
                width={1000}
                height={1000}
              />
              <h2 className="mt-4 text-xl font-medium opacity-90">
                Creative Writing: Crafting Personal Essays With Impact
              </h2>
              <button className="font-medium text-[#0857A0] underline">
                Learn More
              </button>
            </article>
            <article className="mx-auto mb-8 h-fit w-11/12 md:w-5/12 lg:w-3/12">
              <Image
                alt="Course 3 "
                src="/course3.jpg"
                className="h-full w-full rounded-xl object-cover"
                width={1000}
                height={1000}
              />
              <h2 className="mt-4 text-xl font-medium opacity-90">
                Creative Writing: Crafting Personal Essays With Impact
              </h2>
              <button className="font-medium text-[#0857A0] underline">
                Learn More
              </button>
            </article>
          </div>
          <button
            className="mx-auto mt-12
               w-fit rounded-xl bg-[#00DDB3] p-3 font-bold text-black"
          >
            View More Courses
          </button>
        </div>
      </section>
      {/* <footer>
        <div>
          <h1>Dittto.</h1>
          <p>
            Dittto is a global online learning platform that offers anyone,
            anywhere access to online courses.
          </p>
        </div>
      </footer> */}
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex  justify-between gap-2">
      {sessionData ? (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.email}
        </p>
      ) : (
        <p>lol</p>
      )}

      <button
        className="mr-12 mt-12
            w-fit rounded-xl bg-[#0857A0] p-3 font-bold text-white"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
