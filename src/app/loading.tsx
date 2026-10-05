export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4">
        {/* স্পিনার অ্যানিমেশন */}
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
        </div>

        {/* লোডিং টেক্সট */}
        <div className="text-center space-y-1">
          <p className="text-base font-semibold text-gray-700 animate-pulse">
            লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
          </p>
        </div>
      </div>
    </div>
  );
}