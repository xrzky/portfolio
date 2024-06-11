"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import useHero from "@/hooks/useHero";

const Hero = () => {
  const { t } = useTranslation();
  const time = useHero();

  const formatTime = (time) => {
    return time.toLocaleTimeString("en-US", { hour12: false });
  };

  return (
    <div
      id="home"
      className="container relative grid min-h-screen place-items-center"
    >
      <div className="grid items-center justify-around max-w-6xl gap-8 pt-20 md:grid-cols-2 size-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="flex flex-col items-center justify-center text-center md:items-start md:text-left sm:pl-2"
        >
          <div className="mb-4 lg:col-span-2 md:col-span-3">
            <Image
              src="/assets/profiles.jpeg"
              width={72}
              height={72}
              alt="Profile"
              className="w-2/3 mx-auto mt-5 rounded-full md:w-11/12 max-w-96 md:mt-0 sm:mt-0"
            />
          </div>
          <h1 className="text-4xl font-normal lg:text-7xl">
            {t("hero.greeting")}
          </h1>
          <h1 className="mt-4 text-4xl font-normal lg:text-7xl">
            {t("hero.intro")} <span className="font-medium">Luki Rizki</span>
          </h1>
          <div className="flex items-center justify-center gap-6 md:justify-start mt-9">
            <Link
              className="flex items-center justify-center w-16 h-16 border rounded-full border-light"
              href="https://www.instagram.com/luki_rizkii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={32} className="text-black" />
            </Link>
            <Link
              className="flex items-center justify-center w-16 h-16 border rounded-full border-light"
              href="https://www.linkedin.com/in/luki-rizki-708399246/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link
              className="flex items-center justify-center w-16 h-16 border rounded-full border-light"
              href="https://x.com/warung_premium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter size={32} />
            </Link>
            <div className="hidden h-6 border-r-2 border-black sm:block"></div>
            <div className="flex-col hidden space-y-2 md:flex">
              <span className="text-black">Jakarta, Indonesia</span>
              <span className="font-bold text-black">
                {time ? formatTime(time) : "Loading..."}
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="flex flex-col items-center justify-center text-center md:items-start md:text-left sm:pl-2"
        >
          <h1 className="lg:md:text-4xl text-3xl font-normal !leading-tight">
            {t("hero.role")}
          </h1>
          <p className="mt-4 font-light lg:md:text-lg text:md">
            {t("hero.passionate")}
          </p>
          <div className="mt-4">
            <Link prefetch={false} href="#contact">
              <button className="flex items-center mt-5 btn btn-filled">
                <FaEnvelope size={16} className="mr-2" />
                {t("hero.talkWithMe")}
              </button>
            </Link>
            <Link
              prefetch={false}
              href="https://drive.google.com/uc?export=download&id=19IllZs2bMIoX0GzBfa0PSFi-TvVMMn9H"
              className="ml-4"
            >
              <button className="flex items-center mt-5 border-solid btn btn-outline">
                <FaDownload size={16} />
                {t("hero.downloadCV")}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
