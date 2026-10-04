import MaainNews from "@/components/MaainNews";
import Marquee from "@/components/Marquee";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles;

  return (
    <div className="min-h-screen bg-gray-50">
      <Marquee></Marquee>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto py-6 px-4">
        {/* news section */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">
          <MaainNews news={mainNews}></MaainNews>
        </div>

        {/* most read section */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <h2 className="text-lg font-bold border-b pb-2 mb-4">
            সর্বাধিক পঠিত
          </h2>
        </div>
      </div>
    </div>
  );
}