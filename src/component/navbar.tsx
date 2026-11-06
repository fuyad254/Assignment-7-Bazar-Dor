import logo from "@/assets/logo-icon.png";
import Image from "next/image";
import Link from "next/link";
import Marquee from "./marquee";
import CategoryNav from "./catagoryNav";
import UserInfo from "./userInfo";

const Navbar = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const categories = await res.json();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  // const [catagory,setCatagory]= useState("")

  return (
    <header className="w-full bg-[#f9fbf9] border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Navbar */}
        <div className="min-h-19 flex items-center justify-between gap-4">
          {/* Logo & Website Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-10.75 h-10.75 bg-[#078d46] rounded-xl flex items-center justify-center text-2xl shrink-0">
              <Link href={"/"}>
                {" "}
                <Image height={30} width={30} src={logo} alt="logo"></Image>
              </Link>
            </div>

            <div>
              <Link href={"/"}>
                <h1 className="text-[21px] font-bold text-[#202923] leading-tight">
                  বাজার দর
                </h1>
              </Link>

              <p className="text-[12px] text-gray-600 mt-1">{date}</p>
            </div>
          </div>

          {/* User Profile */}

          
            <UserInfo />
          
        </div>

        {/* Category Navigation */}
        <nav className="border-t border-gray-100">
          <div className="flex min-h-11 items-center gap-7 overflow-x-auto whitespace-nowrap px-1 sm:gap-8">
            {<CategoryNav categories={categories}></CategoryNav>}
          </div>
        </nav>
      </div>
      <Marquee />
    </header>
  );
};
export default Navbar;
