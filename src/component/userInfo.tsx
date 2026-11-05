'use client'
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";


const UserInfo = () => {

    const session= authClient.useSession()
    console.log(session);

    return (
        <div>
            <div className="relative">
            <Link href={"/sign-in"}>
              <button className="px-4 py-3 text-[15px] font-semibold text-[#090909] hover:text-green-700 transition-all duration-300">
                সাইন ইন
              </button>
            </Link>

            {/* Sign Up Button */}
            <Link href={"/sign-up"}>
              <button className="px-5 py-3 bg-[#078d46] text-white text-[15px] font-semibold rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:bg-[#067a3d] hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-300">
                সাইন আপ
              </button>
            </Link>

           
          </div>
        </div>
    );
};

export default UserInfo;