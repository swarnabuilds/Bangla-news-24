import Link from "next/link";

interface ICategory {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}
const NavLinks = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json()
    const navLinks:ICategory[] = data.data
    const filterNavs = navLinks.filter(n => n.scrapable)
    
    return (
        <div className="border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-5 py-4 overflow-x-auto">
                {
                    filterNavs.map((n, idx:number) => (
                        <Link 
                            key={idx} 
                            href={n.slug}
                            className="text-sm font-medium text-gray-700 hover:text-red-700 transition-colors whitespace-nowrap"
                        >
                            {n.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default NavLinks;