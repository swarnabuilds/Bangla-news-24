import Image from "next/image";
import logo from '@/asset/logo.webp'
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

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
        <div className="hidden md:block w-28"></div>
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
            <p className="text-xs text-gray-500 font-medium mt-1">
              {banglaDate}
            </p>
          </div>
        </div>
          
       <UserInfo></UserInfo>

      </div>
     <NavLinks></NavLinks> 
    </header>
    );
};

export default Navbar;