"use client"

import project1 from "/public/assets/project1.png";
import project2 from "/public/assets/project2.png";
import project3 from "/public/assets/project3.png";
import { useTranslation } from "react-i18next";

const useProjects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.list.0.title'),
      description: t('projects.list.0.description'),
      link: "https://rstore.idsolutions.id/",
      image: project1,
      alt: "e-commerce"
    },
    {
      title: t('projects.list.1.title'),
      description: t('projects.list.1.description'),
      link: "https://github.com/xrzky/Invoice-Backend",
      image: project2,
      alt: "invoice"
    },
    {
      title: t('projects.list.2.title'),
      description: t('projects.list.2.description'),
      link: "https://github.com/xrzky/Pokemon-NextJS",
      image: project3,
      alt: "pokedex"
    }
  ];

  return projects;
};

export default useProjects;