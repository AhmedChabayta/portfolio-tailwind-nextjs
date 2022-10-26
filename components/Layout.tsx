import Head from "next/head";
import { ReactNode, useState } from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};
function Layout({ children, title, description }: Props) {
  const [showFooter, setShowFooter] = useState<boolean>();
  return (
    <div className="layout">
      <Head>
        <title>{title ? title : "Ahmed Chabayta Jr.WebDev"}</title>
        <meta name="description" content={description} />
      </Head>
      <Nav />
      <main>{children}</main>
      <motion.footer
        animate={{ y: showFooter ? 0 : "80%" }}
        className="fixed flex flex-col items-center bottom-0 left-0 right-0 h-[100px] bg-lime-500 border-2 border-black"
      >
        <div>
          <button onClick={() => setShowFooter((o) => !o)}>
            {showFooter ? (
              <ChevronDownIcon className="w-5" />
            ) : (
              <ChevronUpIcon className="w-5" />
            )}
          </button>
        </div>
        <motion.div>
          <motion.p className="font-black">
            Name: Ahmed Chabayta
            <br />
            Skills: Javascript, CSS, Tailwind, ReactJs, NextJs
          </motion.p>
        </motion.div>
      </motion.footer>
    </div>
  );
}
export default Layout;
