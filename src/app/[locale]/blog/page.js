"use client"

import CardBlog from "@/components/cardBlog";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-24 bg-light-grey">
      <div className="flex justify-center">
        <div className="w-32 pb-5">
          <h1 className="py-1 text-xl font-semibold text-center text-black rounded-full bg-light">
            {t("blogs.blog")}
          </h1>
        </div>
      </div>
      <p className="mb-8 text-center">
        {t("blogs.quote")}
      </p>
      <CardBlog />
    </div>
  );
}