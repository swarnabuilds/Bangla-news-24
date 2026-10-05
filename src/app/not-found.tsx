import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* ৪০৪ ব্যাকগ্রাউন্ড ইলাস্ট্রেশন/ব্যাজ */}
        <div className="relative flex justify-center items-center">
          <span className="text-9xl font-black text-emerald-500/10 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* হেডার ও টেক্সট */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            পেজটি খুঁজে পাওয়া যায়নি!
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-sm mx-auto">
            আপনি যে পেজটি খুঁজছেন তা মুছে ফেলা হয়েছে অথবা ঠিকানাটি ভুল লেখা হয়েছে।
          </p>
        </div>

        {/* হোম পেজে ফিরে যাওয়ার বাটন */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}