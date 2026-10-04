import NewsCard from "@/components/NewsCard";

interface INews {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category?: string;
}

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);
  const data = await res.json();

  const category: INews[] = data.data || [];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold border-b-2 border-red-600 pb-2 mb-6 capitalize">
        {id}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category?.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;