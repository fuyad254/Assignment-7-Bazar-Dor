"use client";

import { useState, useEffect, useRef } from "react";
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sign Out
  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);

      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "সাইন আউট করা যায়নি!");
        return;
      }

      toast.success("সফলভাবে সাইন আউট হয়েছে!");

      setIsOpen(false);

      router.push("/sign-in");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
      toast.error("সাইন আউট করতে সমস্যা হয়েছে!");
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <div>
      {isPending ? (
        // Session Loading
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-medium text-gray-500">
            লোড হচ্ছে...
          </span>
        </div>
      ) : !user ? (
        // Login / Signup Buttons
        <div className="relative flex items-center">
          <Link href="/sign-in">
            <button className="px-4 py-3 text-[15px] font-semibold text-[#090909] hover:text-green-700 transition-all duration-300">
              সাইন ইন
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="px-5 py-3 bg-[#078d46] text-white text-[15px] font-semibold rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:bg-[#067a3d] hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-300">
              সাইন আপ
            </button>
          </Link>
        </div>
      ) : (
        // User Profile Dropdown
        <div className="relative" ref={dropdownRef}>
          {/* Profile Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-gray-100 transition-all duration-300"
            aria-expanded={isOpen}
            aria-label="User profile menu"
          >
            {/* User Image */}
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-emerald-100 ring-2 ring-gray-100">
              <span className="text-base font-bold text-emerald-700">
                {user.name?.charAt(0)?.toUpperCase() || "U"}
              </span>
            </span>

            {/* User Name */}
            <span className="text-[15px] font-medium text-gray-800">
              {user.name}
            </span>

            {/* Dropdown Arrow */}
            <svg
              className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 top-full mt-3 z-50 w-67.5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0_10px_25px_rgba(0,0,0,0.15)] origin-top-right transition-all duration-200 ${
              isOpen
                ? "visible opacity-100 scale-100 translate-y-0"
                : "invisible opacity-0 scale-95 -translate-y-2"
            }`}
          >
            {/* User Information */}
            <div className="mb-4">
              <h3 className="text-[15px] font-semibold text-gray-800">
                {user.name}
              </h3>

              <p className="mt-0.5 text-[13px] text-gray-500 break-all">
                {user.email}
              </p>
            </div>

            {/* My Profile */}
            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2 text-[14px] text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              <svg
                className="w-4.5 h-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              আমার প্রোফাইল
            </Link>

            {/* Divider */}
            <div className="my-2 border-t border-gray-100" />

            {/* Sign Out */}
            <button
              type="button"
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="flex w-full items-center gap-2 py-2 text-left text-[14px] text-red-500 hover:text-red-700 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSigningOut ? (
                <>
                  <span className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                  সাইন আউট হচ্ছে...
                </>
              ) : (
                <>
                  <svg
                    className="w-4.5 h-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H3m0 0l4-4m-4 4l4 4m5-12h5a2 2 0 012 2v12a2 2 0 01-2 2h-5"
                    />
                  </svg>

                  সাইন আউট
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
