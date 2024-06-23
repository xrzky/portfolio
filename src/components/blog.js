"use client";

import { shareTwitter } from "@/utils/shareTwitter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Blog({ article }) {
  const { t } = useTranslation();
    
  return (
    <div className="container px-4 py-20 mx-auto md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-6 pb-3/4">
          <Image
            src={article.image}
            width={1057}
            height={697}
            alt={article.alt}
            className="object-cover w-full h-auto rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 sm:flex-row sm:items-center ">
          <h1 className="text-xl font-bold sm:text-2xl">{article.title}</h1>
          <span className="mt-2 text-black sm:mt-0">{article.date}</span>
        </div>
        <p className="mb-6 text-sm text-justify sm:text-base">
          {article.description}
        </p>
        <div className="flex flex-col items-end gap-4 mt-auto sm:flex-col sm:items-end sm:justify-end">
          <button
            onClick={() => shareTwitter(article.title)}
            className="w-32 px-4 py-1 bg-white border rounded-full border-dark-gray text-grey"
          >
            {t("blogs.share")}
          </button>
          <Link href="/blog">
            <button className="w-32 px-4 py-1 text-white bg-black border rounded-full ">
              {t("blogs.back")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}