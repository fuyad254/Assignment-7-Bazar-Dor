import { IProduct } from "@/type/product";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const toBn = (n: number) => n.toLocaleString("bn-BD");

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const products = await res.json();

  return (
    <div className="w-full overflow-hidden border-b border-gray-200 bg-white py-2">
      <MarqueeText duration={10} direction="right" pauseOnHover>
        {products.map((p: IProduct) => {
          const isUp = p.change?.dir === "up";
          const isDown = p.change?.dir === "down";

          const arrow = isUp ? "▲" : isDown ? "▼" : "•";

          const color = isUp
            ? "text-red-600"
            : isDown
              ? "text-green-600"
              : "text-gray-500";

          return (
            <span
              key={p.id}
              className="mx-4 inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-gray-800 bg-gray-50 border border-gray-200 px-3 py-1 rounded-md shadow-sm"
            >
              {/* Render API image/emoji directly as text */}
              <span className="text-base">
                {p.image || p.categoryIcon || "📦"}
              </span>

              <span>{p.nameBn}</span>

              <span className="text-gray-600 font-semibold">
                {toBn(p.today)} টাকা/{p.unit}
              </span>

              <span
                className={`inline-flex items-center gap-0.5 text-xs font-bold ${color}`}
              >
                {arrow} {toBn(Math.abs(p.change?.pct ?? 0))}%
              </span>
            </span>
          );
        })}
      </MarqueeText>
    </div>
  );
};
export default Marquee;
