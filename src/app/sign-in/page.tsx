"use client";

import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";

export default function SignInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) return;

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    if (!user.email || !user.password) {
      toast.error("ইমেইল ও পাসওয়ার্ড লিখুন");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
      });

      if (error) {
        toast.error(error.message || "ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে!");
        return;
      }

      if (data) {
        toast.success("সফলভাবে সাইন ইন হয়েছে।");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Signin error:", error);
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
      });

      if (error) {
        toast.error(error.message || "Google দিয়ে সাইন ইন করা সম্ভব হয়নি!");
      }
    } catch (error) {
      console.error("Google signin error:", error);
      toast.error("Google Sign In ব্যর্থ হয়েছে!");
    }
  };

  const handleGithubSignIn = async () => {
    try {
      const { error } = await authClient.signIn.social({
        provider: "github",
      });

      if (error) {
        toast.error(error.message || "GitHub দিয়ে সাইন ইন করা সম্ভব হয়নি!");
      }
    } catch (error) {
      console.error("Github signin error:", error);
      toast.error("GitHub Sign In ব্যর্থ হয়েছে!");
    }
  };

  return (
    <section className="flex min-h-[calc(100svh-150px)] items-center justify-center bg-[#f0f5f0] px-4 py-12 sm:px-6">
      <div className="w-full max-w-110">
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#202923] sm:text-3xl">
            সাইন ইন
          </h1>

          <p className="mx-auto mt-2 max-w-90 text-sm leading-6 text-gray-500 sm:text-[15px]">
            বিস্তারিত দাম, বাজার তথ্য ও ড্যাশবোর্ড দেখতে আপনার অ্যাকাউন্টে
            প্রবেশ করুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#e0e9e0] bg-[#f9fcf9] p-5 shadow-sm sm:p-7">
          <form onSubmit={handleSignIn}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#26332b]"
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
                type="password"
                id="password"
                name="password"
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                autoComplete="current-password"
                required
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
                  সাইন ইন হচ্ছে...
                </span>
              ) : (
                "সাইন ইন করুন"
              )}
            </button>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#e0e9e0]" />

              <span className="text-xs font-medium text-gray-400">অথবা</span>

              <div className="h-px flex-1 bg-[#e0e9e0]" />
            </div>
          </form>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex h-12 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-[#dfe8df] bg-white px-3 text-sm font-semibold text-[#26332b] transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              <FcGoogle className="h-5 w-5 shrink-0" />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={handleGithubSignIn}
              className="flex h-12 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-[#dfe8df] bg-white px-3 text-sm font-semibold text-[#26332b] transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              <FaGithubSquare className="h-5 w-5 shrink-0" />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-[#078d46] transition-colors hover:text-[#056d36] hover:underline cursor-pointer"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-[#078d46]"
          >
            <span>←</span>
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </section>
  );
}
