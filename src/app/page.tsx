import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const featuredProducts = [
  {
    name: "Velvet Matte Lipstick",
    category: "Makeup",
    price: "$24.00",
    image: "linear-gradient(135deg, #c084fc, #7c2fba)",
    badge: "Best Seller",
  },
  {
    name: "Silk Chemise",
    category: "Clothing",
    price: "$68.00",
    image: "linear-gradient(135deg, #f3e8ff, #e8b4b8)",
    badge: "New",
  },
  {
    name: "Radiance Serum",
    category: "Skincare",
    price: "$42.00",
    image: "linear-gradient(135deg, #fdf2f8, #c084fc)",
    badge: null,
  },
  {
    name: "Lace Bralette Set",
    category: "Clothing",
    price: "$54.00",
    image: "linear-gradient(135deg, #e9d5ff, #d8b4fe)",
    badge: "Trending",
  },
];

const categories = [
  { name: "Makeup", gradient: "from-lilac-200 to-lilac-400", icon: "✦" },
  { name: "Clothing", gradient: "from-blush to-rose-gold", icon: "◆" },
  { name: "Accessories", gradient: "from-lilac-100 to-lilac-300", icon: "◈" },
  { name: "Essentials", gradient: "from-lilac-50 to-lilac-200", icon: "◇" },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-lilac-100 text-lilac-600 text-xs font-semibold uppercase tracking-wider mb-4">
              Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
              Shop by Category
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href="/products"
                className={`rounded-2xl bg-gradient-to-br ${cat.gradient} p-6 md:p-8 text-center transition-transform hover:-translate-y-1`}
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h3 className="text-sm font-semibold text-dark">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-lilac-50/50 bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-lilac-100 text-lilac-600 text-xs font-semibold uppercase tracking-wider mb-4">
                Featured
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
                Bestsellers
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex text-sm font-medium text-lilac-600 hover:text-lilac-700 transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map(({ name, category, price, image, badge }) => (
              <ProductCard key={name} name={name} category={category} price={price} image={image} badge={badge ?? undefined} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex px-6 py-3 rounded-full border border-lilac-300 text-lilac-700 text-sm font-semibold"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-lilac-600 to-lilac-800 overflow-hidden">
            <div className="absolute inset-0 bg-dots-white" />
            <div className="relative p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Free Shipping on Orders Over $75
              </h2>
              <p className="mt-2 text-sm sm:text-base text-lilac-200">
                Plus, easy 30-day returns on all items.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
