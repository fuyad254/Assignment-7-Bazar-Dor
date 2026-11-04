import React from "react";
import ProductCard from "./productCard";
import { IProducts } from "@/type/products";

const AllProduct = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const allProduct: IProducts[] = await res.json();

  // Today's Top Risers
  const risers = allProduct
    .filter((product) => product.change?.dir === "up")
    .sort((a, b) => b.change!.pct - a.change!.pct)
    .slice(0, 6);

  // Today's Top Fallers
  const fallers = allProduct
    .filter((product) => product.change?.dir === "down")
    .sort((a, b) => b.change!.pct - a.change!.pct)
    .slice(0, 6);

  return (
    <main className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-xl text-red-600">
              ▲
            </span>

            <div>
              <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                আজ দাম বেড়েছে
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                যেসব পণ্যের দাম আজ সবচেয়ে বেশি বেড়েছে
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {risers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-xl text-green-600">
            ▼
          </span>

          <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
              আজ দাম কমেছে
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              যেসব পণ্যের দাম আজ সবচেয়ে বেশি কমেছে
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fallers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="allProduct" className="scroll-mt-24">
        <div className="mb-6 flex flex-col gap-2 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              সব পণ্য
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              বাজারের সকল পণ্যের আজকের দাম দেখুন
            </p>
          </div>

          <span className="w-fit rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
            মোট {allProduct.length.toLocaleString("bn-BD")} টি পণ্য
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" id="allProduct">
          {allProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AllProduct;
