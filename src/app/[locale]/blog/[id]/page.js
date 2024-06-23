import articles from "@/config/listArticles";
import Blog from "@/components/blog";

export default async function BlogDetail({ params: { id } }) {
  const article = articles.find((article) => article.id === id);

  return (
    <div>
      <Blog article={article} />
    </div>
  );
}
