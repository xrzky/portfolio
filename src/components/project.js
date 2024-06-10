"use client";

import Image from "next/image";
import React from "react";
import listProjects from "@/config/listProjects";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Project = () => {
  const projects = listProjects();
  const { t } = useTranslation();

  return (
    <section id="project" className="container min-h-screen py-10 mx-auto">
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-6xl px-4 mx-auto"
      >
        <h2 className="my-12 text-4xl font-bold text-center">
          {t("projects.title")}
        </h2>
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
              <Link href={project.link} prefetch={false}>
                <button className="mt-5 mb-6 text-white bg-black rounded-lg btn">
                  {t("projects.viewWork")}
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
      </motion.div>
    </section>
  );
};

export default Project;
