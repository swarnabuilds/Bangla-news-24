import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`, {
    cache: "no-store",
  });

 if (!res.ok) {
    notFound();
  }

  const jsonResponse = await res.json();
  if(!jsonResponse){
    notFound()
  }
 
  const news = jsonResponse?.data || jsonResponse;

  if (!news) {
   notFound() 
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 bg-white my-6 rounded-lg shadow-sm border border-gray-100">
      {news.category && (
        <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded">
          {news.category}
        </span>
      )}

      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
        {news.title}
      </h1>

      {news.imageUrl && (
        <div className="relative w-full h-[300px] md:h-[480px] mb-6 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt || news.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className="text-gray-800 leading-relaxed text-base md:text-lg whitespace-pre-line mb-8">
        {news.text || news.description}
      </div>

      {news.tags && news.tags.length > 0 && (
        <div className="border-t pt-4 mt-6">
          <h3 className="text-sm font-bold text-gray-700 mb-3">ট্যাগসমূহ:</h3>
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs md:text-sm font-medium px-3 py-1 rounded-full hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetailsPage;