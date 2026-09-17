"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import { Product, Category } from "@/types";

const categories: Category[] = [
  "Lip Gloss",
  "Lip Stain",
  "Lip Care",
  "Contour",
  "Mascara",
  "Eyeliner",
  "Blush",
  "Foundation",
  "Body Care",
  "Fragrance",
  "Accessories",
  "Apparel",
  "Gift Set",
];

const brands = ["Sephora Collection", "Victoria's Secret", "Juicy Couture", "Givenchy", "Dolce & Gabbana"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "name">("name");

  const filteredProducts = useMemo(() => {
    let result = [...products] as Product[];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  return (
    <div className="bg-pink-100 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2 uppercase">
            Our Products
          </h1>
          <p className="text-primary">
            Explore our collection of premium makeup and beauty products
          </p>
        </div>

        {/* Filters */}
        <div className="bg-pink-50 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-bold text-primary mb-1">
                Search
              </label>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-bold text-primary mb-1">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Category | "")}
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-bold text-primary mb-1">
                Brand
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-bold text-primary mb-1">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-primary font-bold">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products List - Catalog Style */}
        {filteredProducts.length > 0 ? (
          <div className="space-y-0">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-primary text-lg">
              No products found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("");
                setSelectedBrand("");
                setSearchQuery("");
              }}
              className="mt-4 text-primary hover:text-dark-rose underline font-bold"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
