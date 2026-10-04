import MaainNews from "@/components/MaainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

type News = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
};

type Section = {
  curationId: string;
  title: string;
  articles: News[];
};

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section: Section[] = data.data;
  const mainNews: News[] = section[0].articles;

  // other section (cut 1st section)
  const otherSection: Section[] = section.slice(1);
  // console.log(otherSection)

  return (
    <div className="min-h-screen bg-gray-50">


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto py-6 px-4">
        {/* news section */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-100 p-6">
          <MaainNews news={mainNews} />



          {/* other news card section  */}
          <div className="mt-10 flex flex-col gap-10">
            {otherSection.map((other) => (
              <div key={other.curationId} className="w-full">
                <div className="relative border-b-2 border-red-600 pb-2 mb-6 w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                      {other.title}
                    </h1>
                  </div> 
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {other.articles?.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* most read section */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm border border-gray-100 p-6 h-fit">
          <div className="border-b-2 border-red-600 pb-2 mb-6 w-full flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">সর্বাধিক পঠিত</h2>
          </div>

            <MostRead></MostRead>

        </div>
      </div>
    </div>
  );
}