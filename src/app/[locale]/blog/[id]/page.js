import Navbar from "@/components/navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import listArticles from "@/config/listArticles";
import Blog from "@/components/blog";

const i18nNamespaces = ["common"];

export default async function BlogDetail({ params: { id, locale} }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const articles = listArticles();
  const article = articles.find((article) => article.id === id);

  return (
    <div>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
        <Navbar />
        <Blog article={article} />
      </TranslationsProvider>
    </div>
  );
}
