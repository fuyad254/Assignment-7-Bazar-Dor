'use client'
import React from "react";
import Link from "next/link";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";

export default function RegisterForm() {


  const handleSignUp= async (e: React.SubmitEvent<HTMLElement>)=>{
    e.preventDefault()

    const formData= new FormData(e.target)
    const user=  Object.fromEntries(formData.entries()) as {name:string, email:string, password:string}

    const {data,error}= await authClient.signUp.email({
      ...user,
    })

    if(data){
      // console.log(data);
      redirect("/")
    }
    if(error){
      // console.log(error);
    }
    
  }


  return (
    <section className="flex min-h-[calc(100svh-150px)] items-center justify-center bg-[#f0f5f0] px-4 py-12 sm:px-6">

      <div className="w-full max-w-110">

        <div className="mb-7 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#202923] sm:text-3xl">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mx-auto mt-2 max-w-90 text-sm leading-6 text-gray-500">
            বিনা খরচে সাইন আপ করে বাজারের সব বিস্তারিত দাম ও তথ্য দেখুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#e0e9e0] bg-[#f9fcf9] p-5 shadow-sm sm:p-7">

          <form action="/api/auth/register" method="POST" onSubmit={handleSignUp}>

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
              className="h-11 w-full cursor-pointer rounded-lg bg-[#078d46] text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#067a3d] hover:shadow-md active:scale-[0.98]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>

          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e0e9e0]" />

            <span className="text-xs font-medium text-gray-400">
              অথবা
            </span>

            <div className="h-px flex-1 bg-[#e0e9e0]" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

            <Link
              href="/api/auth/signin/google"
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#dfe8df] bg-white px-3 text-xs font-semibold text-[#26332b] transition-all hover:border-gray-300 hover:bg-gray-50 sm:text-sm"
            >
              <svg viewBox="0 0 48 48" className="h-4 w-4 shrink-0">
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

            <Link
              href="/api/auth/signin/github"
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#dfe8df] bg-white px-3 text-xs font-semibold text-[#26332b] transition-all hover:border-gray-300 hover:bg-gray-50 sm:text-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3.3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
              </svg>

              GitHub দিয়ে চালিয়ে যান
            </Link>

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
