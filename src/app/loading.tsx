import React from 'react';

const loading = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-slate-950 px-4 text-center text-white">
      <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-slate-800 border-t-indigo-500 border-r-purple-500" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-400"
        >
          <path d="m6.5 6.5 11 11" />
          <path d="m21 21-1-1" />
          <path d="m3 3 1 1" />
          <path d="m18 6 2-2" />
          <path d="m4 20 2-2" />
          <path d="M9 3v3" />
          <path d="M15 18v3" />
          <path d="M3 9h3" />
          <path d="M18 15h3" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold sm:text-3xl">
        Fetching Your{" "}
        <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Exercises...
        </span>
      </h2>

      <p className="mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
        We&apos;re getting the best workout plans for you.
        <br />
        Just a moment...
      </p>

      <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-linear-to-r from-blue-500 to-purple-600" />
      </div>
    </div>
    );
};

export default loading;