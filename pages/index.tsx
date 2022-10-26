import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { useState } from "react";
import Drawer from "../components/Drawer";
import data from "../pages/api/projects.json";

export interface ProjectsTypes {
  projects: {
    name: string;
    link: string;
    description: string;
    type: string;
    languages?: string[];
  }[];
}

const Home = () => {
  const [reveal, setReveal] = useState<boolean>(true);

  const projects = data;

  return (
    <Layout title="Home" description="Web Portfolio">
      <div className="flex flex-col">
        <motion.div
          layout
          className={`flex ${
            reveal ? "flex-col" : "flex-row"
          } items-center justify-between w-screen mt-44 lg:mt-10`}
        >
          <Drawer
            title="React Developer"
            text="Ahmed Chabayta"
            left
            reveal={reveal}
            setReveal={() => setReveal((o) => !o)}
          />

          <Drawer
            title="GitHub"
            text="https://github.com/AhmedChabayta"
            left={false}
            reveal={reveal}
            setReveal={() => setReveal((o) => !o)}
          />
        </motion.div>
        <div className="flex flex-col px-2 mt-20 items-start justify-center z-[0]">
          <h1 className="font-black bg-lime-500 border-2 border-black px-2 my-2">
            Projects
          </h1>
          <div className="flex flex-col space-y-10 my-20 lg:space-y-0 lg:gap-8 lg:flex-row lg:flex-wrap items-center justify-center mx-auto bg-lime-500 border-2 border-black p-10">
            {projects.map((project) => (
              <div key={project.name}>
                <a
                  target="_void"
                  href={project.link}
                  className="capitalize font-black"
                >
                  {project.name}
                </a>
                <p className="capitalize font-black">{project.type}</p>
                <p className="capitalize font-black ">{project.languages}</p>
                <iframe
                  className="w-[350px] h-[500px] shadow-[0px_0px_20px_rgba(0_0_0)]"
                  src={project.link}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
