import Image from "next/image";
import Link from "next/link";

interface INews {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category?: string;
}

const MaainNews = ({ news }: { news: INews[] }) => {

  

  const [firstNews, ...otherNews] = news;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      <Link href={`/news-deatils/${firstNews.id}`} className="w-full md:w-1/2">
        <div className="card bg-base-100 w-full shadow-sm border border-base-200 hover:shadow-md transition">
          <figure className="relative h-64 w-full">
            <Image
              src={firstNews.imageUrl}
              fill
              className="object-cover"
              alt={firstNews.imageAlt || firstNews.title}
            />
          </figure>
          <div className="card-body p-4">
            <p className="text-xs font-bold text-red-600 uppercase">
              {firstNews.category}
            </p>
            <h2 className="card-title text-xl font-bold hover:text-blue-600 transition">
              {firstNews.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {firstNews.description}
            </p>
          </div>
        </div>
      </Link>

      {/* অন্যান্য খবর তালিকা */}
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        {otherNews.slice(0, 4).map((other) => (
          <Link href={`/news-deatils/${other.id}`} key={other.id}>
            <div className="p-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 rounded transition">
              <p className="text-xs font-semibold text-red-500 mb-1">
                {other.category}
              </p>
              <div className="text-sm font-medium text-gray-800 hover:text-blue-600 cursor-pointer">
                {other.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MaainNews;