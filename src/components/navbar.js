"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTimes, FaBars, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
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
    <div className="fixed w-full py-0 px-5 z-[999] duration-300 bg-terang">
      <div className="flex items-center justify-between max-w-6xl px-2 py-4 mx-auto">
        <div className="flex items-center gap-4">
          <div className="grid text-xl rounded-full text-terang bg-gelap size-10 place-items-center">
            LR
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase">xrzky</h4>
          </div>
        </div>
        <ul className="gap-10 md:flex hidden hover:*:text-gelap *:duration-200">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#techstack">Tech Stack</Link>
          </li>
          <li>
            <Link href="#project">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact Us</Link>
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
        className={`fixed top-0 right-0 h-full bg-terang shadow-lg z-50 w-3/4 max-w-sm transform transition-transform duration-300 ${
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
              Home
            </Link>
          </li>
          <li className="my-2">
            <Link
              href="#techstack"
              className="text-lg"
              onClick={closeMobileNav}
            >
              Tech Stack
            </Link>
          </li>
          <li className="my-2">
            <Link href="#project" className="text-lg" onClick={closeMobileNav}>
              Projects
            </Link>
          </li>
          <li className="my-2">
            <Link href="#contact" className="text-lg" onClick={closeMobileNav}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;