import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="container flex flex-col md:flex-row w-full md:min-h-[400px] min-h-screen pt-20"
    >
      <div className="flex flex-col justify-between w-full p-8 text-left bg-terang md:w-1/2 ">
        <div className="px-4 mx-auto text-center max-w-96">
          <h2 className="text-2xl font-bold">Starting a new project?</h2>
        </div>
        <div className="px-4 py-4 mx-auto text-center max-w-96">
          <p className="text-lg">
            Call, email, meet or video call us - however you&apos;d prefer to
            work I would love to hear from you
          </p>
        </div>
        <div className="flex flex-row max-w-6xl px-4 py-4 mx-auto">
          <div className="flex space-x-6">
            <Link href="mailto:lukirizkii18@gmail.com" target="_blank">
              <MdEmail className="text-gelap" size={24} />
            </Link>
            <Link href="https://x.com/warung_premium" target="_blank">
              <FaSquareXTwitter className="text-gelap" size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/luki-rizki-708399246/"
              target="_blank"
            >
              <FaLinkedin className="text-gelap" size={24} />
            </Link>
            <Link href="https://github.com/xrzky" target="_blank">
              <FaGithub className="text-gelap" size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full p-8 text-left bg-gelap md:w-1/2">
        <div className="max-w-5xl mx-auto lg:max-w-md">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-terang">Have a project?</h2>
            <p className="text-lg text-terang">Let&apos;s talk with me</p>
          </div>
          <div className="p-8 mt-4 rounded-lg bg-terang">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  className="w-full p-2 rounded-md text-gelap bg-abu-muda md:w-1/2"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="w-full p-2 mt-4 rounded-md bg-abu-muda text-gelap md:w-1/2 md:mt-0"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="w-full p-2 rounded-md bg-abu-muda text-gelap"
                placeholder="Message"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 rounded-md bg-gelap text-terang"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;