import Link from "next/link";

export default function RegisterForm() {
  return (
    <section className="min-h-[calc(100vh-150px)] bg-[#f0f5f0] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[500px]">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="text-[22px] font-bold text-[#202923]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="text-[12px] text-gray-500 mt-1">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
          </p>
        </div>

        {/* Registration Card */}
        <div className="bg-[#f9fcf9] border border-[#e0e9e0] rounded-xl p-5">
          <form action="/api/auth/register" method="POST">
            {/* Name */}
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-[12px] font-semibold text-[#26332b] mb-1"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                required
                autoComplete="name"
                className="w-full h-[34px] px-3 text-[12px] text-[#26332b] bg-transparent border border-[#e0e9e0] rounded-lg outline-none focus:border-[#078d46] focus:ring-2 focus:ring-green-100 transition-all"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-[12px] font-semibold text-[#26332b] mb-1"
              >
                ইমেইল
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="w-full h-[34px] px-3 text-[12px] text-[#26332b] bg-transparent border border-[#e0e9e0] rounded-lg outline-none focus:border-[#078d46] focus:ring-2 focus:ring-green-100 transition-all"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-[12px] font-semibold text-[#26332b] mb-1"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full h-[34px] px-3 text-[12px] text-[#26332b] bg-transparent border border-[#e0e9e0] rounded-lg outline-none focus:border-[#078d46] focus:ring-2 focus:ring-green-100 transition-all"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="block text-[12px] font-semibold text-[#26332b] mb-1"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="আবার লিখুন"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full h-[34px] px-3 text-[12px] text-[#26332b] bg-transparent border border-[#e0e9e0] rounded-lg outline-none focus:border-[#078d46] focus:ring-2 focus:ring-green-100 transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[35px] mt-1 bg-[#078d46] hover:bg-[#067a3d] text-white text-[12px] font-semibold rounded-lg shadow-[0_3px_5px_rgba(0,0,0,0.2)] transition-all duration-300 active:scale-[0.98]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-[#e0e9e0]" />

            <span className="text-[11px] text-gray-500">অথবা</span>

            <div className="flex-1 h-px bg-[#e0e9e0]" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-2">
            {/* Google */}
            <Link
              href="/api/auth/signin/google"
              className="h-[34px] flex items-center justify-center gap-1.5 border border-[#e0e9e0] rounded-lg text-[11px] font-semibold text-[#26332b] hover:bg-gray-100 transition-all"
            >
              <svg viewBox="0 0 48 48" className="w-[13px] h-[13px]">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.8-6.8C35.8 2.4 30.4 0 24 0 14.7 0 6.6 5.3 2.7 13l7.9 6.1C12.5 13.1 17.8 9.5 24 9.5Z"
                  transform="translate(0 3)"
                />
                <path
                  fill="#4285F4"
                  d="M47.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h13.2c-.6 2.9-2.3 5.3-4.8 6.9l7.4 5.7c4.3-4 7.7-9.9 7.7-17.1Z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.6 28.7a14.4 14.4 0 0 1 0-9.4l-7.9-6.1a24 24 0 0 0 0 21.6l7.9-6.1Z"
                  transform="translate(0 3)"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.5 0 11.9-2.1 15.8-5.7l-7.4-5.7c-2.1 1.4-4.8 2.2-8.4 2.2-6.2 0-11.5-3.6-13.4-8.8l-7.9 6.1C6.6 43.7 14.7 48 24 48Z"
                  transform="translate(0 -3)"
                />
              </svg>
              Google দিয়ে চালিয়ে যান
            </Link>

            {/* GitHub */}
            <Link
              href="/api/auth/signin/github"
              className="h-[34px] flex items-center justify-center gap-1.5 border border-[#e0e9e0] rounded-lg text-[11px] font-semibold text-[#26332b] hover:bg-gray-100 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[13px] h-[13px]"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3.3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub দিয়ে চালিয়ে যান
            </Link>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-[11px] text-gray-600 mt-4">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="text-[#078d46] font-semibold hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        {/* Back Home */}
        <div className="text-center mt-5">
          <Link
            href="/"
            className="text-[11px] text-gray-500 hover:text-[#078d46] transition-colors"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </section>
  );
}
