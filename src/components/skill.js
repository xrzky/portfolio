"use client";

import React from "react";
import icons from "@/hooks/useIconSkill";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Skill = () => {
  const { t } = useTranslation();
  return (
    <section
      id="techstack"
      className="container relative grid min-h-screen place-items-center"
    >
      <div className="pb-24 border-neutral">
        <h2 className="my-24 text-4xl font-bold text-center">
          {t("skills.title")}
        </h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial= {{ opacity: 0, x: -100}}
          transition={{ duration: 1.5}}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {icons.map((icon, index) => {
            const Icon = icon.iconName;
            const durations = [1, 1.5, 2, 2.5, 3, 2.5, 2, 1.5, 1][index];
            return (
              <motion.div
                key={index}
                initial={{ y: -10 }}
                animate={{ y: [10, -10] }}
                transition={{
                  duration: durations,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="p-4 border-4 rounded-2xl border-neutral"
              >
                <Icon className={`${icon.className} text-7xl`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
