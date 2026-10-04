import Image from "next/image";

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
      {/* প্রথম/প্রধান খবর */}
      <div className="card bg-base-100 w-full md:w-1/2 shadow-sm border border-base-200">
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
          <h2 className="card-title text-xl font-bold">{firstNews.title}</h2>
          <p className="text-sm text-gray-600 line-clamp-3">
            {firstNews.description}
          </p>
        </div>
      </div>

      {/* অন্যান্য খবর তালিকা */}
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        {otherNews.slice(0, 4).map((other) => (
          <div
            key={other.id}
            className="p-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 rounded transition"
          >
            <p className="text-xs font-semibold text-red-500 mb-3">
              {other.category}
            </p>
            <div className="text-sm font-medium text-gray-800 hover:text-blue-600 cursor-pointer">
              {other.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaainNews;