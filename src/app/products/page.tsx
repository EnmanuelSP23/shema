import ProductCard from "@/components/ProductCard";

const products = [
  { name: "Velvet Matte Lipstick", category: "Makeup", price: "$24.00", image: "linear-gradient(135deg, #c084fc, #7c2fba)", badge: "Best Seller" },
  { name: "Silk Chemise", category: "Clothing", price: "$68.00", image: "linear-gradient(135deg, #f3e8ff, #e8b4b8)", badge: "New" },
  { name: "Radiance Serum", category: "Skincare", price: "$42.00", image: "linear-gradient(135deg, #fdf2f8, #c084fc)", badge: null },
  { name: "Lace Bralette Set", category: "Clothing", price: "$54.00", image: "linear-gradient(135deg, #e9d5ff, #d8b4fe)", badge: "Trending" },
  { name: "Satin Eye Shadow Palette", category: "Makeup", price: "$38.00", image: "linear-gradient(135deg, #d8b4fe, #6b21a8)", badge: null },
  { name: "Cashmere Robe", category: "Clothing", price: "$89.00", image: "linear-gradient(135deg, #f3e8ff, #c084fc)", badge: "Luxury" },
  { name: "Hydrating Face Mist", category: "Skincare", price: "$18.00", image: "linear-gradient(135deg, #e9d5ff, #fdf2f8)", badge: null },
  { name: "Crystal Hair Clip", category: "Accessories", price: "$16.00", image: "linear-gradient(135deg, #faf5ff, #d8b4fe)", badge: null },
];

const categories = ["All", "Makeup", "Clothing", "Skincare", "Accessories"];

export default function ProductsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-lilac-100 text-lilac-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Collection
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
            All Products
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === "All"
                  ? "bg-lilac-600 text-white"
                  : "bg-lilac-50 text-lilac-700 hover:bg-lilac-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(({ name, category, price, image, badge }) => (
            <ProductCard key={name} name={name} category={category} price={price} image={image} badge={badge ?? undefined} />
          ))}
        </div>
      </div>
    </div>
  );
}
