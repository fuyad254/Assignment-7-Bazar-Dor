
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ICatagory } from "@/type/catagory";

interface CategoryNavProps {
  categories: ICatagory[];
}

const CategoryNav = ({ categories }: CategoryNavProps) => {
  const pathname = usePathname();

  return (
    <nav className="border-t border-gray-100">
      <div className="flex min-h-11 items-center gap-7 overflow-x-auto whitespace-nowrap px-1 sm:gap-8 scrollbar-hide">
        {categories.map((category) => {
          const isActive =
            pathname === `/catagory/${category.slug}`;

          return (
            <Link
              href={`/catagory/${category.slug}`}
              key={category.slug}
              className={`flex items-center gap-1.5 border-b-2 py-3 text-[13px] transition-colors ${
                isActive
                  ? "border-[#047C37] font-bold text-[#047C37]"
                  : "border-transparent font-medium text-gray-600 hover:text-[#047C37]"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default CategoryNav;
