"use client";

import React from "react";
import Image from "next/image";
import ListArticles from "@/config/listArticles";
import { truncateString } from "@/utils/truncateString";
import Link from "next/link";
import { shareTwitter } from "@/utils/shareTwitter";

const CardBlog = () => {
  const articles = ListArticles();
  return (
    <div className="container px-4 mx-auto md:px-0">
      {articles.map((article, index) => (
        <div
          key={index}
          className="flex flex-col h-auto p-4 mb-4 bg-light rounded-3xl md:flex-row md:mx-auto md:w-auto lg:w-3/5"
        >
          <div className="flex items-center justify-center w-full md:w-1/3">
            <Image
              src={article.image}
              width={200}
              height={175}
              alt="article image"
              className="ml-4"
            />
          </div>
          <div className="flex flex-col w-full p-4 ml-4 md:w-2/3">
            <h2 className="mb-2 font-bold text-md lg:text-lg ">
              {article.title}
            </h2>
            <p className="flex-grow text-black">
              {truncateString(article.description)}
            </p>
          </div>
          <div className="flex flex-col justify-between w-full p-4 md:w-auto">
            <span className="mb-2 text-black md:mb-4">{article.date}</span>
            <div className="flex flex-col mt-auto space-y-2">
              <button
                onClick={() => shareTwitter(article.title)}
                className="w-24 px-4 py-1 bg-white border rounded-full text-grey border-dark-gray"
              >
                Share
              </button>
              <Link href={{ pathname: `/blog/${article.id}` }}>
                <button className="w-24 px-4 py-1 text-white bg-black rounded-full">
                  Read
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
