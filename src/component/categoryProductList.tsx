
"use client";

import { useMemo, useState } from "react";
import ProductCard from "./productCard";
import { IProducts } from "@/type/products";

interface CategoryProductListProps {
  products: IProducts[];
}

const CategoryProductList = ({
  products,
}: CategoryProductListProps) => {
  const [sort, setSort] = useState("default");

  const sortedProducts = useMemo(() => {
    const items = [...products];

    if (sort === "low") {
      return items.sort(
        (a, b) => (a.today ?? 0) - (b.today ?? 0)
      );
    }

    if (sort === "high") {
      return items.sort(
        (a, b) => (b.today ?? 0) - (a.today ?? 0)
      );
    }

    return items;
  }, [products, sort]);

  return (
    <>
      {/* Sort & Product Count */}
      <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-[#DFE8DF] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-xs text-gray-500 sm:text-sm">
          মোট{" "}
          <span className="font-bold text-[#26332B]">
            {products.length.toLocaleString("bn-BD")}
          </span>{" "}
          টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <label
            htmlFor="product-sort"
            className="text-xs font-medium text-gray-500"
          >
            সাজান
          </label>

          <select
            id="product-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 outline-none transition focus:border-green-600"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">কম দাম</option>
            <option value="high">বেশি দাম</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#DFE8DF] bg-white px-4 py-16 text-center">
          <p className="text-sm text-gray-500">
            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
          </p>
        </div>
      )}
    </>
  );
};

export default CategoryProductList;
