"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTimes, FaBars, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "id" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  useEffect(() => {
    const handleClickOutNavbar = (event) => {
      const mobileNav = document.getElementById("mobile-nav");

      if (!mobileNav.contains(event.target)) {
        closeMobileNav();
      }
    };

    document.addEventListener("click", handleClickOutNavbar);

    return () => {
      document.removeEventListener("click", handleClickOutNavbar);
    };
  }, [mobileNavOpen]);

  return (
    <div className="fixed w-full z-[999] bg-white">
      <div className="flex items-center justify-between max-w-6xl px-2 py-4 mx-auto">
        <div className="flex items-center gap-4">
          <div className="grid text-xl text-white bg-black rounded-full size-10 place-items-center">
            LR
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase">xrzky</h4>
          </div>
        </div>
        <ul className="gap-10 md:flex hidden hover:*:text-black *:duration-200">
          <li>
            <Link href="#home">{t("navbar.home")}</Link>
          </li>
          <li>
            <Link href="#techstack">{t("navbar.techstack")}</Link>
          </li>
          <li>
            <Link href="#project">{t("navbar.projects")}</Link>
          </li>
          <li>
            <Link href="#contact">{t("navbar.contact")}</Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <Link
            className="px-2"
            href="https://github.com/xrzky"
            target="_blank"
          >
            <FaGithub size={24} />
          </Link>
          <div className="items-center hidden gap-2 md:flex">
            <button
              onClick={() => handleLanguageToggle()}
              className="flex items-center gap-1 px-2 py-1"
            >
              <FiGlobe size={20} />
              {language === "en" ? "ID" : "EN"}
            </button>
          </div>
          <span
            id="menubar"
            className="text-xl cursor-pointer md:hidden"
            onClick={toggleMobileNav}
          >
            <FaBars />
          </span>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-3/4 max-w-sm transform transition-transform duration-300 ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <FaTimes
            className="text-xl cursor-pointer"
            onClick={toggleMobileNav}
          />
        </div>
        <ul className="flex flex-col p-4">
          <li className="my-2">
            <Link href="#home" className="text-lg" onClick={closeMobileNav}>
             {t("navbar.home")}
            </Link>
          </li>
          <li className="my-2">
            <Link
              href="#techstack"
              className="text-lg"
              onClick={closeMobileNav}
            >
              {t("navbar.techstack")}
            </Link>
          </li>
          <li className="my-2">
            <Link href="#project" className="text-lg" onClick={closeMobileNav}>
              {t("navbar.projects")}
            </Link>
          </li>
          <li className="my-2">
            <Link href="#contact" className="text-lg" onClick={closeMobileNav}>
              {t("navbar.contact")}
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white">
          <button
            onClick={handleLanguageToggle}
            className="flex items-center justify-center w-full gap-2 px-4 py-2 border rounded-full"
          >
            <FiGlobe size={20} />
            {language === "en" ? "Bahasa Indonesia" : "English"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;