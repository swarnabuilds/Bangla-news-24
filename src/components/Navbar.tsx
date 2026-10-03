import Image from "next/image";
import logo from '@/asset/logo.webp'

const Navbar = () => {
    const banglaDate = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
    return (
       <header className="border-b border-gray-200 py-3 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Left Side: Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-black">
            সাইন ইন
          </button>
          <button className="btn btn-sm bg-red-700 hover:bg-red-800 text-white border-none rounded-md px-4">
            সাইন আপ
          </button>
        </div>

        {/* Center Side: Logo Image & Dynamic Date */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src= {logo}
              alt="Bangla News 24 Logo"
              width={48}
              height={48}
              className="object-contain rounded-xl"
              priority
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-red-700 leading-tight">
              Bangla News 24
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              {banglaDate}
            </p>
          </div>
        </div>

        {/* Right Side: Spacer for symmetry */}
        <div className="hidden md:block w-28"></div>

      </div>
    </header>
    );
};

export default Navbar;