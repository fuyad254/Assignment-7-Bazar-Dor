// "use client";
// import { authClient } from "../lib/auth-client";

// export default function Profile() {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;

//   const handleUpdateProfile = async(e: React.SubmitEvent<HTMLElement>) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const user = Object.fromEntries(formData.entries()) as {
//       name: string;
//     };

//     const { data, error } = await authClient.updateUser({
    
//     name: user.name,
// });
//   };


//   const handleSignOut = async () => {
//       try {
//         await authClient.signOut();
//       } catch (error) {
//         console.error("Sign out failed:", error);
//       }
//     };

//   return (
//     <section className="min-h-[calc(100vh-76px)] bg-[#f0f5f0] px-4 sm:px-6 lg:px-10 py-10 md:py-14">
//       <div className="max-w-5xl mx-auto">
//         {/* Heading */}
//         <div className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#202923]">
//             আমার প্রোফাইল
//           </h1>

//           <p className="text-base md:text-lg text-gray-500 mt-2">
//             আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
//           </p>
//         </div>

//         {/* Profile Information Card */}
//         <div className="bg-[#f9fcf9] border border-[#e0e9e0] rounded-2xl p-6 md:p-8 lg:p-10 mb-8">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
//             {/* User Information */}
//             <div className="flex flex-col sm:flex-row items-center gap-5 min-w-0">
//               {/* Profile Image */}
//               <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gray-200 overflow-hidden shrink-0 flex items-center justify-center">
//                 <span className="text-4xl font-bold text-gray-600">
//                   {user?.name.charAt(0)}
//                 </span>
//               </div>

//               {/* Name & Email */}
//               <div className="text-center sm:text-left min-w-0">
//                 <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#26332b]">
//                   {user?.name}
//                 </h2>

//                 <p className="text-sm md:text-lg lg:text-xl text-gray-500 mt-1 break-all">
//                   {user?.email}
//                 </p>
//               </div>
//             </div>

//             {/* Sign Out Button */}
//             <button
//               onClick={handleSignOut}
//               className="inline-flex cursor-pointer items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-3.5 text-base md:text-lg font-semibold text-red-500 border border-red-400 rounded-xl hover:bg-red-50 transition-all duration-300 shrink-0"
//             >
//               <span className="text-xl">↩</span>
//               সাইন আউট
//             </button>
//           </div>
//         </div>

//         {/* Edit Profile Card */}
//         <div className="bg-[#f9fcf9] border border-[#e0e9e0] rounded-2xl p-6 md:p-8 lg:p-10">
//           <h3 className="text-xl md:text-2xl font-bold text-[#26332b] mb-10">
//             তথ্য
//           </h3>

//           <form onSubmit={handleUpdateProfile} method="POST">
//             {/* Name Input */}
//             <div className="px-2 md:px-5 mb-6">
//               <label
//                 htmlFor="name"
//                 className="block text-base md:text-lg font-medium text-[#26332b] mb-3"
//               >
//                 নাম
//               </label>

//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="আপনার নাম লিখুন"
//                 required
//                 className="w-full h-12 md:h-14 px-4 text-base md:text-lg text-[#26332b] bg-transparent border border-[#dce6dc] rounded-xl outline-none focus:border-[#078d46] focus:ring-2 focus:ring-green-100 transition-all duration-300"
//               />
//             </div>

//             {/* Update Button */}
//             <div className="px-2 md:px-5 mt-6">
//               <button
//                 type="submit"
//                 className="w-full cursor-pointer h-12 md:h-14 bg-[#078d46] hover:bg-[#067a3d] text-white text-base md:text-lg font-bold rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
//               >
//                 আপডেট
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useState } from "react";
import { authClient } from "../lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const [isUpdating, setIsUpdating] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleUpdateProfile = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    const name = formValues.name.trim();

    if (!name) {
      toast.error("নাম লিখুন!");
      return;
    }

    try {
      setIsUpdating(true);

      const { error } = await authClient.updateUser({
        name,
      });

      if (error) {
        toast.error(error.message || "প্রোফাইল আপডেট করা যায়নি!");
        return;
      }

      toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
    } catch (error) {
      console.error("Profile update failed:", error);
      toast.error("প্রোফাইল আপডেট করতে সমস্যা হয়েছে!");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);

      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "সাইন আউট করা যায়নি!");
        return;
      }

      toast.success("সফলভাবে সাইন আউট হয়েছে!");
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
    <section className="min-h-[calc(100vh-76px)] bg-[#f0f5f0] px-4 sm:px-6 lg:px-10 py-10 md:py-14">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#202923]">
            আমার প্রোফাইল
          </h1>

          <p className="text-base md:text-lg text-gray-500 mt-2">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Profile Information Card */}
        <div className="bg-[#f9fcf9] border border-[#e0e9e0] rounded-2xl p-6 md:p-8 lg:p-10 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* User Information */}
            <div className="flex flex-col sm:flex-row items-center gap-5 min-w-0">
              {/* Profile Image */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gray-200 overflow-hidden shrink-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-600">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </span>
              </div>

              {/* Name & Email */}
              <div className="text-center sm:text-left min-w-0">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#26332b]">
                  {user?.name}
                </h2>

                <p className="text-sm md:text-lg lg:text-xl text-gray-500 mt-1 break-all">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              type="button"
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="inline-flex cursor-pointer items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-3.5 text-base md:text-lg font-semibold text-red-500 border border-red-400 rounded-xl hover:bg-red-50 transition-all duration-300 shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSigningOut ? (
                <>
                  <span className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                  সাইন আউট হচ্ছে...
                </>
              ) : (
                <>
                  <span className="text-xl">↩</span>
                  সাইন আউট
                </>
              )}
            </button>
          </div>
        </div>

        {/* Edit Profile Card */}
        <div className="bg-[#f9fcf9] border border-[#e0e9e0] rounded-2xl p-6 md:p-8 lg:p-10">
          <h3 className="text-xl md:text-2xl font-bold text-[#26332b] mb-10">
            তথ্য
          </h3>

          <form onSubmit={handleUpdateProfile}>
            {/* Name Input */}
            <div className="px-2 md:px-5 mb-6">
              <label
                htmlFor="name"
                className="block text-base md:text-lg font-medium text-[#26332b] mb-3"
              >
                নাম
              </label>

              <input
                type="text"
                id="name"
                name="name"
                defaultValue={user?.name || ""}
                placeholder="আপনার নাম লিখুন"
                required
                className="w-full h-12 md:h-14 px-4 text-base md:text-lg text-[#26332b] bg-transparent border border-[#dce6dc] rounded-xl outline-none focus:border-[#078d46] focus:ring-2 focus:ring-green-100 transition-all duration-300"
              />
            </div>

            {/* Update Button */}
            <div className="px-2 md:px-5 mt-6">
              <button
                type="submit"
                disabled={isUpdating}
                className="w-full cursor-pointer h-12 md:h-14 bg-[#078d46] hover:bg-[#067a3d] text-white text-base md:text-lg font-bold rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isUpdating ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    আপডেট হচ্ছে...
                  </span>
                ) : (
                  "আপডেট"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
