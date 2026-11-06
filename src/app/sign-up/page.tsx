"use client";
import { FcGoogle } from "react-icons/fc";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { authClient } from "../lib/auth-client";
import toast from "react-hot-toast";
import { FaGithubSquare } from "react-icons/fa";

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) return;

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    // Password validation
    if (user.password !== user.confirmPassword) {
      toast.error("দুটি পাসওয়ার্ড মিলছে না");
      return;
    }

    if (user.password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
      });

      if (error) {
        toast.error(error.message || "অ্যাকাউন্ট তৈরি করা সম্ভব হয়নি!");
        return;
      }

      if (data) {
        toast.success("সফলভাবে অ্যাকাউন্ট তৈরি হয়েছে!");
        router.push("/sign-in");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
      });

      if (error) {
        toast.error(error.message || "Google দিয়ে Signup করা সম্ভব হয়নি!");
      }
    } catch {
      toast.error("Google Signup ব্যর্থ হয়েছে!");
    }
  };

  const handleGithubSignUp = async () => {
    try {
      const { error } = await authClient.signIn.social({
        provider: "github",
      });

      if (error) {
        toast.error(error.message || "GitHub দিয়ে Signup করা সম্ভব হয়নি!");
      }
    } catch {
      toast.error("GitHub Signup ব্যর্থ হয়েছে!");
    }
  };

  return (
    <section className="flex min-h-[calc(100svh-150px)] items-center justify-center bg-[#f0f5f0] px-4 py-12 sm:px-6">
      <div className="w-full max-w-125">
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#202923] sm:text-3xl">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mx-auto mt-2 max-w-90 text-sm leading-6 text-gray-500">
            বিনা খরচে সাইন আপ করে বাজারের সব বিস্তারিত দাম ও তথ্য দেখুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#e0e9e0] bg-[#f9fcf9] p-6 shadow-sm sm:p-8">
          <form onSubmit={handleSignUp}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[#26332b]"
              >
                আপনার নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                required
                autoComplete="name"
                className="h-11 w-full rounded-lg border border-[#dfe8df] bg-white px-3.5 text-sm text-[#26332b] outline-none transition-all placeholder:text-gray-400 focus:border-[#078d46] focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#26332b]"
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
                className="h-11 w-full rounded-lg border border-[#dfe8df] bg-white px-3.5 text-sm text-[#26332b] outline-none transition-all placeholder:text-gray-400 focus:border-[#078d46] focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#26332b]"
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
                className="h-11 w-full rounded-lg border border-[#dfe8df] bg-white px-3.5 text-sm text-[#26332b] outline-none transition-all placeholder:text-gray-400 focus:border-[#078d46] focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-[#26332b]"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="পাসওয়ার্ড আবার লিখুন"
                required
                minLength={8}
                autoComplete="new-password"
                className="h-11 w-full rounded-lg border border-[#dfe8df] bg-white px-3.5 text-sm text-[#26332b] outline-none transition-all placeholder:text-gray-400 focus:border-[#078d46] focus:ring-4 focus:ring-green-100"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="h-11 w-full cursor-pointer rounded-lg bg-[#078d46] text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#067a3d] hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  অ্যাকাউন্ট তৈরি হচ্ছে...
                </span>
              ) : (
                "অ্যাকাউন্ট তৈরি করুন"
              )}
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e0e9e0]" />
            <span className="text-xs font-medium text-gray-400">অথবা</span>
            <div className="h-px flex-1 bg-[#e0e9e0]" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="flex h-12 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-[#dfe8df] bg-white px-3 text-sm font-semibold text-[#26332b] transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              <FcGoogle className="h-5 w-5 shrink-0" />
              Google দিয়ে চালিয়ে যান
            </button>
            <button
              type="button"
              onClick={handleGithubSignUp}
              className="flex h-12 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-[#dfe8df] bg-white px-3 text-sm font-semibold text-[#26332b] transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              <FaGithubSquare className="h-5 w-5 shrink-0" />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-[#078d46] transition-colors hover:text-[#056d36] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-[#078d46]"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </section>
  );
}
