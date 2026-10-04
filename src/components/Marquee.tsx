import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import Link from "next/link"

interface IHeadline {
    id: string;
    _id?: string;
    articleId?: string;
    title: string;
}

const Marquee = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10', { cache: 'no-store' })
    const data = await res.json()
    const handelLines:IHeadline[] = data.data 

    return (
        <div className="bg-red-700 text-white">
            <div className="max-w-7xl mx-auto px-4 flex items-center overflow-hidden">
                {/* Left Badge */}
                <div className="bg-red-900 text-white font-bold text-sm px-4 py-2 z-10 whitespace-nowrap flex items-center">
                    সর্বশেষ
                </div>

                {/* Marquee Container */}
                <div className="flex-1 py-2 overflow-hidden">
                    <MarqueeText direction="right" duration={13}>
                        {
                            handelLines.map(h => {
                                const newsId = h.id || h._id || h.articleId;
                                return (
                                    <span key={newsId} className="inline-flex items-center text-sm font-medium">
                                        <Link 
                                            href={`/news-deatils/${newsId}`} 
                                            className="px-3 hover:underline cursor-pointer"
                                        >
                                            {h.title}
                                        </Link>
                                        <span className="px-2 font-bold">•</span>
                                    </span>
                                )
                            })
                        }
                    </MarqueeText>
                </div>
            </div>
        </div>
    );
};

export default Marquee;