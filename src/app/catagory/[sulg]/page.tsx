
import CategoryProductList from "@/component/categoryProductList";
import { IProducts } from "@/type/products";

interface PageProps {
  params: Promise<{
    sulg: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { sulg } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${sulg}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  const products: IProducts[] = await res.json();

  const categoryName = products[0]?.categoryNameBn ?? "পণ্য";
  const categoryIcon = products[0]?.categoryIcon ?? "🛒";

  console.log(products);

  return (
    <main className="min-h-screen bg-[#F0F5F0] px-4 py-5 sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* Category Header */}
        <div className="mb-5 flex items-center gap-3 rounded-2xl border border-[#DFE8DF] bg-white p-4 sm:p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-3xl">
            {categoryIcon}
          </div>

          <div>
            <h1 className="text-xl font-bold text-[#202923] sm:text-2xl">
              {categoryName}
            </h1>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              {products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* Product List with Sorting */}
        <CategoryProductList products={products} />

      </div>
    </main>
  );
};

export default Page;
