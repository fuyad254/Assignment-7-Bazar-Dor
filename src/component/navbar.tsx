import logo from "@/assets/logo-icon.png";
import Image from "next/image";
import Link from "next/link";
import Marquee from "./marquee";
import CategoryNav from "./catagoryNav";




const Navbar= async ()=> {
  

    const res= await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const categories= await res.json();

    const date= new Date().toLocaleDateString("bn-BD" ,{
        dateStyle: "full"
    })


    // const [catagory,setCatagory]= useState("")
    

  return (
    <header className="w-full bg-[#f9fbf9] border-b border-gray-100">
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

              <p className="text-[12px] text-gray-600 mt-1">
                {date}
              </p>
            </div>
          </div>

          {/* User Profile */}
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

            {/* <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2.5 rounded-lg p-1.5 hover:bg-gray-100 transition"
              aria-expanded={profileOpen}
            >
              <div className="w-[38px] h-[38px] rounded-xl bg-gray-200 flex items-center justify-center text-lg overflow-hidden">
                👨🏻
              </div>

              <span className="text-sm font-medium text-[#26332b]">Rezwan</span>

              <span className="text-[10px] text-gray-500">▼</span>
            </button> */}

            {/* {profileOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                  প্রোফাইল
                </button>

                <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50">
                  লগ আউট
                </button>
              </div>
            )} */}
          </div>
        </div>

        {/* Category Navigation */}
        <nav className="border-t border-gray-100">
      <div className="flex min-h-11 items-center gap-7 overflow-x-auto whitespace-nowrap px-1 sm:gap-8">
         {<CategoryNav categories={categories}></CategoryNav>}
          

          {/* // return (
          //   <Link */}
          {/* //     href={`/catagory/${category.slug}`}
          //     key={category.slug}
          //     className={`flex items-center gap-1.5 border-b-2 py-3 text-[13px] transition-colors                
          //          "border-transparent font-medium text-gray-600 hover:text-[#047C37]"
          //     `}
          {/* //   >? */}
          {/* //     <span>{category.icon}</span>
          //     <span>{category.nameBn}</span>
          //   </Link> */} 
          {/* // ); */}
        
      </div>
    </nav>
      </div>
        <Marquee/>
    </header>
  );
}
export default Navbar



