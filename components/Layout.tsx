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
  return (
    <div className="layout overflow-x-hidden md:w-[70vw] mx-auto">
      <div className="wallpaper" />
      <motion.div
        animate={{ rotate: "1200deg" }}
        transition={{ duration: 22, repeatType: "reverse" }}
        className="sun"
      />
      <Head>
        <title>{title ? title : "Ahmed Chabayta Jr.WebDev"}</title>
        <meta name="description" content={description} />
      </Head>
      <Nav />
      <main className="pb-10">{children}</main>
      <footer
        style={{
          background: `url(/grass.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "0% -0%",
        }}
        className="fixed z-0 flex flex-col items-center -bottom-[100px] left-0 right-0 h-[300px] overflow-visible"
      ></footer>
    </div>
  );
}
export default Layout;
