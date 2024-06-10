"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();
  const [time, setTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    setTime(new Date());

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString("en-US", { hour12: false });
  };

  return (
    <div
      id="home"
      className="container relative grid min-h-screen place-items-center"
    >
      <div className="grid items-center justify-around max-w-6xl pt-20 md:grid-cols-6 size-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-center lg:col-span-2 md:col-span-3 md:text-left sm:pl-2"
        >
          <div>
            <h1 className="text-4xl !leading-normal sm:text-5xl relative">
              {t("hero.greeting")} <br />
              {t("hero.intro")} <span className="font-bold">Luki Rizki</span>
            </h1>
            <Link href="#contact">
              <button className="mt-5 btn btn-filled">
                <FaEnvelope size={16} />
                {t("hero.talkWithMe")}
              </button>
            </Link>
            <Link href="#project">
              <button className="ml-4 font-semibold border-b-2 border-grey">
                <GoArrowUpRight size={16} />
                {t("hero.seeMyWork")}
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 md:justify-start md:w-96 md:ml-auto mt-9">
            <Link
              className="px-2"
              href="https://www.instagram.com/luki_rizkii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              className="px-2"
              href="https://www.linkedin.com/in/luki-rizki-708399246/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              className="px-2"
              href="https://x.com/warung_premium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter size={24} />
            </Link>
            <div className="hidden h-6 mr-4 border-r-2 border-black sm:block"></div>
            <div className="flex-col hidden space-y-2 md:flex sm:flex enter">
              <span className="text-black">Jakarta, Indonesia</span>
              <span className="text-black">
                {time ? formatTime(time) : "Loading..."}
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="lg:col-span-2 md:col-span-3"
        >
          <Image
            src="/assets/profiles.jpeg"
            width={500}
            height={500}
            alt="Profile"
            className="w-2/3 mx-auto mt-5 rounded-full md:w-11/12 max-w-96 md:mt-0 sm:mt-0"
          />
        </motion.div>
        <div className="text-center lg:col-span-2 md:col-span-6 md:text-right sm:pl-2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-2xl leading-[3.14rem] text-center pt-5 lg:block md:flex items-center justify-between"
          >
            <h3 className="lg:text-3xl !leading-normal relative md:text-2xl sm:text-lg">
              {t("hero.role")}
            </h3>
            <Link href="https://drive.google.com/uc?export=download&id=19IllZs2bMIoX0GzBfa0PSFi-TvVMMn9H">
              <button className="mt-10 lg:mt-10 md:mt-0 btn btn-outline">
                <FaDownload size={24} />
                {t("hero.downloadCV")}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
