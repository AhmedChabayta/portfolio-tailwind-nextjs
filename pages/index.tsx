import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { useState } from "react";
import Drawer from "../components/Drawer";
import data from "../pages/api/projects.json";
import { btnFilters } from "./api/buttons";
import Link from "next/link";
import { PersonalInfo } from "./api/PersonalData";
export interface ProjectType {
  name: string;
  link: string;
  description: string;
  type: string;
  languages: string[];
}

const Home = () => {
  const [reveal, setReveal] = useState<boolean>(true);
  const [filter, setFilter] = useState("media");
  const projects: ProjectType[] = data.filter((project: ProjectType) => {
    if (filter === "") {
      return project;
    } else if (project.type.includes(filter)) {
      return project;
    }
  });
  const [x, setX] = useState<number>(0);

  const handleFilter = (filter: string) => {
    setFilter(filter);
    setX(0);
  };
  console.log(projects);
  return (
    <Layout title="Home" description="Web Portfolio">
      <div className="flex flex-col">
        <motion.div
          layout
          className="flex flex-col lg:flex-row items-center overflow-x-scroll mt-44 lg:mt-10 scrollbar-hide"
        >
          <Drawer
            title={PersonalInfo[0].title}
            text={PersonalInfo[0].name}
            Icon={PersonalInfo[0].email}
            reveal={reveal}
            setReveal={() => setReveal((o) => !o)}
          />
          <Drawer
            link={PersonalInfo[0].github}
            text={PersonalInfo[0].email}
            reveal={reveal}
            setReveal={() => setReveal((o) => !o)}
          />
          {PersonalInfo[0].skills.map((skill: any, index: number) => (
            <Drawer
              key={skill.name}
              title={skill.name}
              Icon={skill.icon}
              reveal={reveal}
              index={index}
              setReveal={() => setReveal((o) => !o)}
            />
          ))}
        </motion.div>
        <div className="flex flex-col px-2 mt-20 items-start justify-center z-[0]">
          <h1 className="font-black bg-lime-500 border-2 border-black px-2 my-2">
            Projects ({projects.length})
          </h1>
          <div className="flex">
            {btnFilters.map((btn) => (
              <button
                key={btn.name}
                onClick={() => handleFilter(btn.name)}
                className="p-2 bg-lime-500 border-2 border-black mx-2 font-black capitalize"
              >
                {btn.name}
              </button>
            ))}
          </div>
          <div className="relative flex flex-col space-y-10 my-20 lg:space-y-0 lg:gap-8 lg:flex-row lg:flex-wrap items-center justify-center mx-auto bg-sky-300/40 backdrop-blue-3xl  border-2 border-black p-10">
            <div key={projects[x].name || projects[0].name}>
              <Link
                target="_void"
                href={projects[x].link || projects[0].link}
                className="capitalize font-black text-2xl"
              >
                {projects[x].name || projects[0].name}
              </Link>
              <p className="capitalize font-black">
                {projects[x].type || projects[0].type}
              </p>
              <p className="capitalize font-black hidden">
                {projects[x].languages || projects[0].languages}
              </p>
              <p className="capitalize">{projects[x].description}</p>

              <iframe
                className="w-[260px] lg:w-[500px] lg:h-[600px] border-2 border-black p-4 bg-sky-600 lg:m-4"
                src={projects[x].link || projects[0].link}
              ></iframe>
              <div className="mx-auto space-x-4 w-fit my-10">
                <button
                  className="cursor-pointer"
                  disabled={x === 0}
                  onClick={() => setX((x) => x - 1)}
                >
                  PREVIOUS
                </button>
                <button
                  className="cursor-pointer"
                  disabled={x === projects.length - 1}
                  onClick={() => setX((x) => x + 1)}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
