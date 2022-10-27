import Image from "next/image";
import spiral from "../public/spiral.svg";
import {
  HomeModernIcon,
  BriefcaseIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import SpiralIcon from "./SpiralIcon";

const NavButtons = [
  {
    name: "home",
    Icon: HomeModernIcon,
  },
  {
    name: "work",
    Icon: BriefcaseIcon,
  },
  {
    name: "about me",
    Icon: UserIcon,
  },
  {
    name: "contacts",
    Icon: UserGroupIcon,
  },
];

type Props = {};
function Nav({}: Props) {
  return (
    <div className="flex w-[90vw] lg:px-4 mx-auto ">
      <div className="flex items-center justify-center space-x-1 z-50 group cursor-pointer border-2 m-5 p-2 border-black bg-lime-500 hover:bg-pink-500 transition-colors duration-300">
        <SpiralIcon className="rotate-180" />
        <h1 className="text-3xl font-black">Ahmed</h1>
        <small className="self-end text-xs ml-1">WebDev</small>
      </div>
      <div className="flex flex-col lg:flex-row absolute right-2 lg:top-1 lg:right-1 lg:bg-lime-500 lg:border-2 border-black">
        {NavButtons.map(({ name, Icon }) => (
          <Link key={name} href="/">
            <div className="flex lg:space-x-2 lg:m-4 items-center justify-center">
              <Icon className="w-12 p-1 my-2 lg:my-0 hover:scale-105 border-2 border-black rounded bg-lime-500" />
              <p className="hidden lg:inline">#{name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Nav;
