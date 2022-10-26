import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
export default function Drawer({
  reveal,
  setReveal,
  left,
  title,
  text,
}: {
  reveal: boolean;
  setReveal: (reveal: boolean) => void;
  left?: boolean;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      animate={{
        x: reveal ? (left ? 0 : -0) : left ? "-90%" : "90%",
      }}
      className="flex even:flex-row-reverse justify-between z-[600] items-center px-4 min-w-96 h-32 m-4 pl-1 lg:w-[30%] bg-lime-500 border-2 border-black whitespace-nowrap overflow-visible"
    >
      <h1 className="text-2xl font-semibold">
        <span className="cursor-pointer"> {text}</span> <br />
        <span className="text-fuchsia-800"> {title}</span>
      </h1>
      <motion.button
        className="shrink-0 whitespace-nowrap"
        layout
        type="button"
        onClick={() => setReveal(reveal ? !reveal : reveal)}
      >
        {reveal ? (
          <ChevronLeftIcon className="w-5 cursor-pointer" />
        ) : (
          <ChevronRightIcon className="w-5 cursor-pointer" />
        )}
      </motion.button>
    </motion.div>
  );
}
