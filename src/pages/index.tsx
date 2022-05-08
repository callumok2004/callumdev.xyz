import { motion } from "framer-motion";
import {
  SiCss3, SiDocker, SiExpress, SiFigma, SiGit, SiHeroku, SiHtml5, SiJavascript, SiMongodb, SiMysql,
  SiNextdotjs as SiNextJs, SiNodedotjs as SiNodeJs, SiPhp, SiReact, SiTypescript,
  SiVisualstudiocode, SiYarn
} from "react-icons/si";

import PositionItem from "@components/PositionItem";

import RepoItem from "../components/RepoItem";
import { TechItem } from "../components/TechItem";

interface AppProps {
  stats: Record<string, number>;
  topRepos: Record<any, any>;
}

const positions = [
  {
    name: "Wallswipe",
    description: "A web application for finding and downloading new wallpapers, and creating collections to share!",
    rank: "Lead Developer",
    url: "https://wallswipe.com"
  },
  {
    name: "ZARP Gaming",
    description: "An online gaming community.",
    rank: "TTT Server Owner",
    url: "https://zarpgaming.com"
  }
],

 Index = ({ stats, topRepos }: AppProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeOut", duration: 0.15 }}
      className="mt-24 w-full mb-32"
    >
      <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Callum 👋</h1>
      <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
        I'm a fullstack developer, mainly working with NodeJS applications. I like to work on discord bot's, using discord.js, or working on sites for myself, my friends or for a project I am working on! I mainly use TypeScript, I have been using Lua more lately for another position I have within a gaming community.
      </p>

      <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
      <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
        I use a variety of tools to streamline my development process and increase the quality of both my code,
        and my projects. Below is a list of technologies and languages I've had experience with in the past, or
        use currently.
      </p>
      <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
        <TechItem icon={SiTypescript} name="TypeScript" />
        <TechItem icon={SiJavascript} name="JavaScript" />
        <TechItem icon={SiPhp} name="PHP" />
        <TechItem icon={SiHtml5} name="HTML5" />
        <TechItem icon={SiCss3} name="CSS3" />
        <TechItem icon={SiVisualstudiocode} name="VSCode" />
        <TechItem icon={SiReact} name="React.js" />
        <TechItem icon={SiNodeJs} name="Node.js" />
        <TechItem icon={SiYarn} name="Yarn" />
        <TechItem icon={SiExpress} name="Express" />
        <TechItem icon={SiNextJs} name="Next.js" />
        <TechItem icon={SiGit} name="Git" />
        <TechItem icon={SiDocker} name="Docker" />
        <TechItem icon={SiMongodb} name="MongoDB" />
        <TechItem icon={SiMysql} name="MySQL" />
        <TechItem icon={SiHeroku} name="Heroku" />
        <TechItem icon={SiFigma} name="Figma" />
      </div>

      <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
      <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
        In my free time, I enjoy creating open source projects on{" "}
        <a
          href="https://github.com/callumok2004"
          rel="noreferrer"
          className="font-semibold text-violet-500 hover:underline"
        >
          GitHub
        </a>
        , so I can learn from others and showcase what I know. In total, all of my open sourced projects have
        earnt me <span className="font-bold text-black dark:text-slate-200">{stats.stars}</span> stars on
        GitHub, and <span className="font-bold text-black dark:text-slate-200">{stats.forks}</span> forks. Below
        are some of my most popular repositories.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
        {topRepos.map((repo: Record<string, any>) => {
          return (
            <RepoItem
              key={repo.name}
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
              language={repo.language}
            />
          );
        })}
      </div>

      <h2 className="font-medium text-3xl mb-4">Current Positions 🏢</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
        {positions.map((pos: Record<string, any>) => {
          return (
            <PositionItem
              key={pos.name}
              name={pos.name}
              description={pos.description}
              rank={pos.rank}
              url={pos.url}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export async function getStaticProps() {
  const stats = await fetch("https://api.github-star-counter.workers.dev/user/callumok2004").then(res => res.json()),
    repos = await fetch("https://api.github.com/users/callumok2004/repos?type=owner&per_page=100").then(res => res.json()),
    topRepos = repos
      .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4);

  return {
    props: { stats, topRepos },
    revalidate: 3600
  };
}

export default Index;
