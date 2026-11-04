
export default function Footer() {
  return (
    <footer className="w-full bg-[#f9fcf9] border-t border-[#e5ebe5]">
      <div className="container mx-auto px-40 sm:px-6 py-4">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

          {/* Left Text */}
          <p className="text-[21px] md:text-xs text-[#47534a]">
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </p>

          {/* Right Text */}
          <p className="text-[21px] md:text-xs text-[#47534a]">
            সকল দাম সম্ভাব্য; বাজার অবস্থার উপর নির্ভর করে পরিবর্তিত হয়।
          </p>

        </div>

      </div>
    </footer>
  );
}
