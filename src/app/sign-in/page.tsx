
import Link from "next/link";

export default function SignInForm() {
  return (
    <section className="min-h-[calc(100vh-150px)] bg-[#f0f5f0] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-[500px]">

        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="text-[25px] font-bold text-[#202923]">
            সাইন ইন
          </h1>

          <p className="text-[20px] text-gray-500 mt-1 leading-relaxed">
            বিস্তারিত দাম, বাজার তথ্য ও ড্যাশবোর্ড দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#f9fcf9] border border-[#e0e9e0] rounded-xl p-4">

          {/* Email */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-[11px] font-semibold text-[#26332b] mb-1"
            >
              ইমেইল
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full h-[26px] px-2.5 text-[10px] text-[#26332b] bg-transparent border border-[#e0e9e0] rounded-md outline-none focus:border-[#078d46] focus:ring-2 focus:ring-green-100 transition-all"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-[11px] font-semibold text-[#26332b] mb-1"
            >
              পাসওয়ার্ড
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="current-password"
              required
              className="w-full h-[26px] px-2.5 text-[10px] text-[#26332b] bg-transparent border border-[#e0e9e0] rounded-md outline-none focus:border-[#078d46] focus:ring-2 focus:ring-green-100 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full h-[27px] mt-1 bg-[#078d46] hover:bg-[#067a3d] text-white text-[10px] font-semibold rounded-md shadow-[0_3px_5px_rgba(0,0,0,0.2)] transition-all active:scale-[0.98]"
          >
            সাইন ইন
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2.5 my-3">
            <div className="flex-1 h-px bg-[#e0e9e0]" />

            <span className="text-[9px] text-gray-500">
              অথবা
            </span>

            <div className="flex-1 h-px bg-[#e0e9e0]" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-1.5">

            {/* Google */}
            <Link
              href="/api/auth/signin/google"
              className="h-[26px] flex items-center justify-center gap-1 border border-[#e0e9e0] rounded-md text-[9px] font-semibold text-[#26332b] hover:bg-gray-100 transition-all"
            >
              <svg viewBox="0 0 48 48" className="w-3 h-3 shrink-0">
                <path fill="#EA4335" d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.8-6.8C35.8 2.4 30.4 0 24 0 14.7 0 6.6 5.3 2.7 13l7.9 6.1C12.5 13.1 17.8 9.5 24 9.5Z" transform="translate(0 3)"/>
                <path fill="#4285F4" d="M47.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h13.2c-.6 2.9-2.3 5.3-4.8 6.9l7.4 5.7c4.3-4 7.7-9.9 7.7-17.1Z"/>
                <path fill="#FBBC05" d="M10.6 28.7a14.4 14.4 0 0 1 0-9.4l-7.9-6.1a24 24 0 0 0 0 21.6l7.9-6.1Z" transform="translate(0 3)"/>
                <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.8-5.7l-7.4-5.7c-2.1 1.4-4.8 2.2-8.4 2.2-6.2 0-11.5-3.6-13.4-8.8l-7.9 6.1C6.6 43.7 14.7 48 24 48Z" transform="translate(0 -3)"/>
              </svg>

              Google দিয়ে চালিয়ে যান
            </Link>

            {/* GitHub */}
            <Link
              href="/api/auth/signin/github"
              className="h-[26px] flex items-center justify-center gap-1 border border-[#e0e9e0] rounded-md text-[9px] font-semibold text-[#26332b] hover:bg-gray-100 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 shrink-0"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3.3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z"/>
              </svg>

              GitHub দিয়ে চালিয়ে যান
            </Link>

          </div>

          {/* Sign Up Link */}
          <p className="text-center text-[10px] text-gray-600 mt-3">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="text-[#078d46] font-semibold hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>

        </div>

        {/* Back Home */}
        <div className="text-center mt-4">
          <Link
            href="/"
            className="text-[10px] text-gray-500 hover:text-[#078d46] transition-colors"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>

      </div>
    </section>
  );
}
