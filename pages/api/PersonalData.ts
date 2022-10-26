import {TbBrandNextjs} from 'react-icons/tb'
import {GrReactjs} from 'react-icons/gr'
import {SiTypescript,SiTailwindcss,SiCss3,SiStyledcomponents} from 'react-icons/si'

export const PersonalInfo = [
  {
    name: "Ahmed Chabayta",
    title: "Web Developer",
    email: 'chabays@gmail.com',
    instagram: 'https://www.instagram.com/salatinata/',
    github: 'https://github.com/AhmedChabayta',
    location: "Lebanon",
    dob: "1991/22/06",
    skills: [
      {
        name: "react js",
        icon: GrReactjs,
      },
      {
        name: "next js",
        icon: TbBrandNextjs
      },
      {
        name: "typescript",
        icon: SiTypescript
      },
      {
        name:'tailwind',
        icon: SiTailwindcss
      },
      {
        name: 'styled components',
        icon: SiStyledcomponents,
      },
      {
        name: 'css',
        icon: SiCss3
      }
    ],
  },
];
