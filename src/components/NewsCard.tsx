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

const NewsCard = ({ news }: { news: INews }) => {
  if (!news) return null;

  return (
   <Link href={`/news-deatils/${news.id}`}>
     <div className="card bg-base-100 w-full shadow-sm border border-gray-100 rounded-lg overflow-hidden flex flex-col justify-between">
      <div>
        <figure className="relative h-48 w-full">
          <Image
            src={news.imageUrl}
            fill
            className="object-cover"
            alt={news.imageAlt || news.title}
          />
        </figure>
        <div className="card-body p-4">
          {news.category && (
            <p className="text-xs font-bold text-red-600 uppercase">
              {news.category}
            </p>
          )}
          <h2 className="card-title text-base font-bold line-clamp-2 hover:text-blue-600 cursor-pointer">
            {news.title}
          </h2>
          {news.description && (
            <p className="text-sm text-gray-600 line-clamp-2 mt-1">
              {news.description}
            </p>
          )}
        </div>
      </div>
    </div>
   </Link>
  );
};

export default NewsCard;