// interface Market {
//   market: string;
//   division: string;
//   min: number;
//   max: number;
// }

import { IMarket } from "@/type/market";
import { IProducts } from "@/type/products";

// interface Product {
//   id: number;
//   slug: string;
//   nameBn: string;
//   category: string;
//   categoryNameBn: string;
//   categoryIcon: string;
//   unit: string;
//   image: string;
//   today: number;
//   yesterday: number;
//   lastWeek: number;
//   lastMonth: number;
//   change: {
//     dir: "up" | "down";
//     pct: number;
//   };
//   markets: Market[];
// }

// interface ProductPriceDetailsProps {
//   product: Product;
// }

const numberFormat = new Intl.NumberFormat("bn-BD");

const formatPrice = (price: number) => numberFormat.format(price);

const getUnit = (unit: string) => {
  const units: Record<string, string> = {
    kg: "কেজি",
    liter: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  return units[unit] || unit;
};

export default async function ProductPriceDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products`,
  );
  const products = await res.json();

  const product = products.find((product: IProducts) => product.slug === slug);

  
  const markets = product.markets || [];

  const minPrice = markets.length
    ? Math.min(...markets.map((item: IMarket) => item.min))
    : 0;

  const maxPrice = markets.length
    ? Math.max(...markets.map((item: IMarket) => item.max))
    : 0;

  // প্রতিটি বাজারের Min ও Max এর গড়
  const averagePrice = markets.length
    ? markets.reduce(
        (total: number, item: IMarket) => total + (item.min + item.max) / 2,
        0,
      ) / markets.length
    : 0;

  const isUp = product.change.dir === "up";

  return (
    <section className="min-h-screen bg-[#f1f6f2] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-5 flex items-center gap-2 text-xs text-gray-500">
          <span>হোম</span>
          <span>›</span>
          <span>চাল</span>
          <span>›</span>
          <span className="text-gray-700">{product.nameBn}</span>
        </div>

        {/* Product Summary */}
        <div className="mb-4 flex flex-col gap-4 rounded-xl border border-[#e1eae3] bg-[#fbfdfb] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
              {product.image || product.categoryIcon}
            </div>

            <div className="min-w-0">
              <h1 className="text-lg font-bold text-[#202c24] sm:text-xl">
                {product.nameBn}
              </h1>

              <p className="mt-0.5 text-xs text-gray-500">
                {product.categoryNameBn} · প্রতি {getUnit(product.unit)}
              </p>

              <p className="mt-1 text-xs text-gray-600">
                বাংলাদেশের বিভিন্ন বাজারের আজকের বাজার দর দেখুন।
              </p>

              {/* Category Tags */}
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-md bg-[#eaf3eb] px-2 py-1 text-[11px] font-medium text-green-700">
                  {product.categoryNameBn}
                </span>

                <span className="rounded-md bg-gray-100 px-2 py-1 text-[11px] text-gray-600">
                  প্রতি {getUnit(product.unit)}
                </span>
              </div>
            </div>
          </div>

          {/* Today's Price */}
          <div className="flex shrink-0 items-center justify-between gap-5 rounded-xl bg-[#f0f5f0] px-5 py-3 sm:min-w-26.25 sm:flex-col sm:gap-0 sm:text-center">
            <div>
              <p className="text-[11px] text-gray-500">আজকের দাম</p>

              <h2 className="text-2xl font-bold text-[#26352b]">
                {formatPrice(product.today)}
              </h2>

              <p className="text-[10px] text-gray-500">
                টাকা / {getUnit(product.unit)}
              </p>
            </div>

            <div
              className={`flex items-center gap-1 text-xs font-semibold ${
                !isUp ? "text-red-500" : "text-green-600"
              }`}
            >
              <span>{!isUp ? "▲" : "▼"}</span>
              <span>{formatPrice(product.change.pct)}%</span>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="rounded-xl border border-[#e1eae3] bg-[#fbfdfb] p-4 sm:p-5">
          <h2 className="mb-3 text-sm font-bold text-[#26352b]">
            দামের সংক্ষিপ্তসার
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {/* Minimum */}
            <div className="rounded-xl border border-[#e4ece5] bg-[#f9fcf9] p-3">
              <p className="text-[11px] text-gray-500">সর্বনিম্ন দাম</p>

              <h3 className="mt-1 text-xl font-bold text-green-600">
                {formatPrice(minPrice)}
                <span className="ml-1 text-xs font-medium">টাকা</span>
              </h3>

              <p className="mt-1 text-[10px] text-gray-500">
                সবচেয়ে কম বাজার দর
              </p>
            </div>

            {/* Maximum */}
            <div className="rounded-xl border border-[#e4ece5] bg-[#f9fcf9] p-3">
              <p className="text-[11px] text-gray-500">সর্বোচ্চ দাম</p>

              <h3 className="mt-1 text-xl font-bold text-red-500">
                {formatPrice(maxPrice)}
                <span className="ml-1 text-xs font-medium">টাকা</span>
              </h3>

              <p className="mt-1 text-[10px] text-gray-500">
                সবচেয়ে বেশি বাজার দর
              </p>
            </div>

            {/* Average */}
            <div className="rounded-xl border border-[#e4ece5] bg-[#f9fcf9] p-3">
              <p className="text-[11px] text-gray-500">গড় দাম</p>

              <h3 className="mt-1 text-xl font-bold text-green-600">
                {formatPrice(Math.round(averagePrice))}
                <span className="ml-1 text-xs font-medium">টাকা</span>
              </h3>

              <p className="mt-1 text-[10px] text-gray-500">
                প্রতি {getUnit(product.unit)}-এর হিসাবে
              </p>
            </div>
          </div>

          {/* Market Wise Prices */}
          <div className="mt-5">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-[#26352b]">
                বাজারভিত্তিক আজকের দাম
              </h2>

              <span className="rounded-md bg-[#eaf3eb] px-2.5 py-1 text-[11px] text-green-700">
                মোট {formatPrice(markets.length)} টি বাজার
              </span>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto rounded-xl border border-[#e4ece5]">
              <table className="w-full min-w-162.5 border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-[#f6f9f6] text-gray-500">
                    <th className="px-3 py-3 font-semibold">বাজার</th>

                    <th className="px-3 py-3 font-semibold">বিভাগ</th>

                    <th className="px-3 py-3 text-right font-semibold">
                      সর্বনিম্ন
                    </th>

                    <th className="px-3 py-3 text-right font-semibold">
                      সর্বোচ্চ
                    </th>

                    <th className="px-3 py-3 text-right font-semibold">গড়</th>
                  </tr>
                </thead>

                <tbody>
                  {markets.map((market: IMarket, index: number) => {
                    const marketAverage = (market.min + market.max) / 2;

                    return (
                      <tr
                        key={`${market.market}-${index}`}
                        className={`border-t border-[#e5ebe5] transition-colors hover:bg-[#eaf3eb] ${
                          index % 2 === 0 ? "bg-[#fbfdfb]" : "bg-[#f1f6f2]"
                        }`}
                      >
                        <td className="whitespace-nowrap px-3 py-3 font-medium text-[#26352b]">
                          {market.market}
                        </td>

                        <td className="whitespace-nowrap px-3 py-3 text-gray-600">
                          {market.division}
                        </td>

                        <td className="whitespace-nowrap px-3 py-3 text-right text-green-600">
                          {formatPrice(market.min)} টাকা
                        </td>

                        <td className="whitespace-nowrap px-3 py-3 text-right text-red-500">
                          {formatPrice(market.max)} টাকা
                        </td>

                        <td className="whitespace-nowrap px-3 py-3 text-right font-semibold text-[#26352b]">
                          {formatPrice(Math.round(marketAverage))} টাকা
                        </td>
                      </tr>
                    );
                  })}

                  {markets.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-3 py-8 text-center text-gray-500"
                      >
                        কোনো বাজারের তথ্য পাওয়া যায়নি।
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-[11px] text-gray-400">
              * বাজারের গড় দাম সর্বনিম্ন ও সর্বোচ্চ দামের গড় হিসেবে গণনা করা
              হয়েছে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------------

// import { IProducts } from '@/type/products';
// import React from 'react';

// const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products`)
// const products = await res.json()

// const page = async({ params }: { params: Promise<{ slug: string }> }) => {
//     const { slug } = await params;

//     const find= products.find((product:IProducts)=> product.slug === slug)

//     console.log(find,"this");
//     return (
//         <div>

//         </div>
//     );
// };

// export default page;
