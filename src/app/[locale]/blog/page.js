import CardBlog from "@/components/cardBlog";

export default function Blog() {
  return (
    <div className="min-h-screen p-8 bg-light-grey">
      <div className="flex justify-center">
        <div className="w-32 pb-5">
          <h1 className="py-1 text-xl font-semibold text-center text-black rounded-full bg-light">
            Blog
          </h1>
        </div>
      </div>
      <p className="mb-8 text-center">
        writing first, because you can&apos;t code without it
      </p>
      <CardBlog />
    </div>
  );
}
