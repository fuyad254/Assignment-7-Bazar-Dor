'use client'
import { ArrowLeft, Home, SearchX } from 'lucide-react';

import Link from "next/link";
import React from 'react';

const NotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-3xl text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-5">
            <SearchX
              size={48}
              className="text-indigo-400"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-8xl font-extrabold tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
          Oops! The page you are looking for doesn&apos;t exist,
          may have been moved, or the URL is incorrect.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <Home size={19} />
            Go Back Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-indigo-400 hover:bg-slate-900"
          >
            <ArrowLeft size={19} />
            Go Back
          </button>
        </div>

        <p className="mt-12 text-sm text-slate-500">
          Error Code: 404 · Page Not Found
        </p>
      </div>
    </main>
    );
};

export default NotFound;