import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { ReactElement, ReactNode, useEffect, useRef } from "react";
export default function Drawer({
  reveal,
  setReveal,
  title,
  text,
  Icon,
  index = 0,
  link,
}: {
  reveal: boolean;
  setReveal: (reveal: boolean) => void;
  title?: string;
  text?: string;
  Icon?: ReactNode;
  index?: number;
  link?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { amount: "some" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{
        x: isInView ? 0 : index % 2 === 0 ? -50 : 50,
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 9,
        repeatType: "reverse",
      }}
      onClick={() => setReveal(reveal ? !reveal : reveal)}
      className="drawer__container flex even:flex-row-reverse justify-center items-center z-50 px-4 h-32 min-w-[400px] m-4 pl-1 bg-lime-500 border-2 border-black"
    >
      <h1 className="text-2xl font-semibold mx-4">
        {text && (
          <>
            <span>{text}</span> <br />
          </>
        )}
        <span className="uppercase"> {title}</span>
        {link && (
          <Link target="_blank" href={link}>
            <p className="text-center hover:underline">GitHub</p>
          </Link>
        )}
      </h1>
      <span>{Icon}</span>
    </motion.div>
  );
}
