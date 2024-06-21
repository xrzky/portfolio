import React from "react";
import Image from "next/image";
import articles from "@/config/listArticles";
import { truncateString } from "@/utils/truncateString";
import Link from "next/link";
import { shareTwitter } from "@/utils/shareTwitter";
import { useTranslation } from "react-i18next";
import { FaShare } from "react-icons/fa";
import { CiRead } from "react-icons/ci";

const CardBlog = () => {
  const { t } = useTranslation();
  return (
    <div className="container px-4 mx-auto md:px-0">
      {articles.map((article, index) => (
        <div
          key={index}
          className="flex flex-row h-auto p-4 mb-4 bg-light rounded-3xl md:mx-auto md:w-auto lg:w-4/5 xl:w-3/5"
        >
          <div className="flex items-center justify-center w-1/3 sm:w-1/4">
            <Image
              src={article.image}
              width={200}
              height={175}
              alt={article.alt}
              className="ml-4 sm:w-20 sm:h-20 md:w-32 md:h-32"
            />
          </div>
          <div className="flex flex-col w-1/2 p-4 ml-4 sm:w-3/4">
            <h2 className="mb-2 text-xs font-bold sm:text-xl md:text-xl lg:text-lg ">
              {article.title}
            </h2>
            <p className="flex-grow hidden text-black md:sm:block">
              {truncateString(article.description)}
            </p>
          </div>
          <div className="flex flex-col items-end justify-between w-auto p-4">
            <span className="mb-2 text-xs text-black sm:text-sm md:text-md lg:text-lg md:mb-4">
              {article.date}
            </span>
            <div className="flex flex-col mt-auto space-y-2">
              <button
                onClick={() => shareTwitter(article.title)}
                className="w-8 px-2 py-1 bg-white border rounded-full sm:w-20 md:w-24 text-grey border-dark-gray"
              >
                <FaShare className="block sm:hidden" />
                <p className="hidden sm:block">{t("blogs.share")}</p>
              </button>
              <Link href={{ pathname: `/blog/${article.id}` }}>
                <button className="w-8 px-2 py-1 text-white bg-black rounded-full sm:w-20 md:w-24">
                  <CiRead className="block sm:hidden" />
                  <p className="hidden sm:block">{t("blogs.read")}</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBlog;