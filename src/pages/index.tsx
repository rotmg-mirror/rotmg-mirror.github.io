import type { NextPage } from "next";
import Head from "next/head";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RotMG Mirror Portal</title>
        <meta name="description" content="RotMG Tools Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          <span className="text-purple-300">RotMG</span> Mirror Portal
        </h1>
        <p className="text-2xl text-gray-700">Tools (Forked from Haizor, Archived, and Self-Hosted):</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
          <TechnologyCard
            name="DPS Calculator"
            description="A tool that calculates your DPS in game on average."
            documentation="/rotmg-dps-calculator/"
          />
          <TechnologyCard
            name="Skin Viewer"
            description="A tool to customize and view dyes/cloths on your character."
            documentation="/rotmg-skin-viewer/"
          />
          <TechnologyCard
            name="Contribute"
            description="Would love for these archived projects to turn into something the community can work on in tandem. Any contributions are welcome, am in progress of moving everything into this organization's repositories! :3"
            documentation="https://github.com/rotmg-mirror/"
          />
        </div>
      </main>
    </>
  );
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Link
      </a>
    </section>
  );
};

export default Home;
