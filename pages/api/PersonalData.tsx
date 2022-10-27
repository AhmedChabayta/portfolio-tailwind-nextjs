import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import {
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiStyledcomponents,
} from "react-icons/si";

export const PersonalInfo = [
  {
    name: "Ahmed Chabayta",
    title: "Jr Web Developer",
    email: "chabays@gmail.com",
    instagram: "https://www.instagram.com/salatinata/",
    github: "https://github.com/AhmedChabayta",
    location: "Lebanon",
    dob: "1991/22/06",
    skills: [
      {
        name: "react js",
        icon: <GrReactjs size={25} />,
      },
      {
        name: "next js",
        icon: <TbBrandNextjs size={25} />,
      },
      {
        name: "typescript",
        icon: <SiTypescript size={25} />,
      },
      {
        name: "tailwind",
        icon: <SiTailwindcss size={25} />,
      },
      {
        name: "styled components",
        icon: <SiStyledcomponents size={25} />,
      },
      {
        name: "css",
        icon: <SiCss3 size={25} />,
      },
    ],
  },
];
