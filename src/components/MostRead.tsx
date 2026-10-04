
type MostReadNews = {
  id: string;
  title: string;
};

type ApiResponse = {
  data: MostReadNews[];
};

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data: ApiResponse = await res.json();
  const news: MostReadNews[] = data.data;

  return (
    <div className="flex flex-col divide-y divide-gray-100">
      {news?.map((n, i: number) => (
        <div
          key={n.id}
          className="flex items-start gap-4 py-3 group cursor-pointer transition-colors duration-200 hover:bg-gray-50/80 px-2 rounded-md"
        >
          <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-red-50 text-red-600 font-extrabold text-sm border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors">
            {i + 1}
          </span>

          <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 line-clamp-2 leading-snug transition-colors">
            {n.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default MostRead;