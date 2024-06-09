import React from "react";
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress } from "react-icons/si";
import { BiLogoPostgresql, BiLogoJavascript } from "react-icons/bi";

const icons = [
  {
    iconName: FaHtml5,
    className: "text-merah",
  },
  {
    iconName: FaCss3Alt,
    className: "text-biru",
  },
  {
    iconName: BiLogoJavascript,
    className: "text-kuning",
  },
  {
    iconName: FaReact,
    className: "text-cyan",
  },
  {
    iconName: SiNextdotjs,
    className: "",
  },
  {
    iconName: FaVuejs,
    className: "",
  },
  {
    iconName: BiLogoPostgresql,
    className: "text-awan",
  },
  {
    iconName: SiExpress,
    className: "",
  },
  {
    iconName: FaLaravel,
    className: "text-merah",
  },
];

const skill = () => {
  return (
    <section
      id="techstack"
      className="container relative grid min-h-screen place-items-center"
    >
      <div className="pb-24 border-netral">
        <h2 className="my-24 text-4xl font-bold text-center">Tech Stack</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          { icons.map(( icon, index) => {
            const Icon = icon.iconName;
            return(
              <div key={index} className="p-4 border-4 rounded-2xl border-netral">
               <Icon className={`${icon.className} text-7xl`}  />
              </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default skill;
