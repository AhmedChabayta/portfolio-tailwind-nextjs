import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ReactElement, ReactNode, useEffect, useRef } from "react";
export default function Drawer({
  reveal,
  setReveal,
  title,
  text,
  Icon,
}: {
  reveal: boolean;
  setReveal: (reveal: boolean) => void;
  title: string;
  text?: string;
  Icon?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { amount: "all" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{
        x: isInView ? 0 : -10,
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 9,
        repeatType: "reverse",
      }}
      onClick={() => setReveal(reveal ? !reveal : reveal)}
      className="flex even:flex-row-reverse justify-center items-center z-[600] px-4 h-32 min-w-[400px] m-4 pl-1 cursor-pointer bg-lime-500 border-2 border-black capitalize"
    >
      <h1 className="text-2xl font-semibold mx-4">
        {text && (
          <>
            <span className="cursor-pointer"> {text}</span> <br />
          </>
        )}
        <span className="text-fuchsia-800"> {title}</span>
      </h1>
      <span>{Icon}</span>
    </motion.div>
  );
}
