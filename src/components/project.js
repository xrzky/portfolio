import Image from "next/image";
import React from "react";
import project1 from "/public/project1.png";
import project2 from "/public/project2.png";
import project3 from "/public/project3.png";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "This project build with techstack Vue Js, UI Kit, Pinia, Laravel, MySQL and Midtrans Payment Gateway",
    link: "https://rstore.idsolutions.id/",
    image: project1,
    alt: "e-commerce",
  },
  {
    title: "Invoice Back-End",
    description: "Invoice Backend build with Node JS, PostreSQL and Express JS",
    link: "https://github.com/xrzky/Invoice-Backend",
    image: project2,
    alt: "invoice",
  },
  {
    title: "Pokedex Website",
    description:
      "Pokedex Website build with React JS or Next JS and TailwindCss",
    link: "https://github.com/xrzky/Pokemon-NextJS",
    image: project3,
    alt: "pokedex",
  },
];

const Project = () => {
  return (
    <section id="project" className="container py-10 mx-auto min-h-96">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="my-12 text-4xl font-bold text-center">Portfolio</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between pt-10 pb-5 border-b-2 md:flex-row md:items-start"
          >
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-3xl lg:text-4xl md:text-3xl">
                {project.title}
              </h3>
              <p className="mb-4 text-lg md:text-xs">{project.description}</p>
              <Link href={project.link}>
                <button className="mt-5 mb-6 rounded-lg text-terang btn bg-gelap">
                  View all work
                </button>
              </Link>
            </div>
            <div className="text-center lg:w-2/5">
              <Image
                src={project.image}
                width={500}
                height={500}
                alt={project.alt}
                className="mx-auto border rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;