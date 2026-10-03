const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="border-t border-gray-200 py-6 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-500 text-sm">
          {/* Left Side: Copyright Text */}
          <p className="font-serif">© {currentYear} BanglaBulletin</p>

          {/* Right Side: Source Credit */}
          <p className="font-serif">Source: BBC Bangla</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
