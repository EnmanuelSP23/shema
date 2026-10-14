"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { supabase } from "@/lib/supabase";

function ProductsCatalog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const selectedCategory = searchParams.get("category") ?? "";
  const [selectedBrand, setSelectedBrand] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "name">("name");

  function setSelectedCategory(category: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (category) params.set("category", category);
    else params.delete("category");
    const query = params.toString();
    router.replace(query ? `/products?${query}` : "/products", { scroll: false });
  }

  useEffect(() => {
    let cancelled = false;
    async function fetchProducts() {
      try {
        if (!supabase) return;
        const { data, error: fetchError } = await supabase.from("products").select("*").order("name");
        if (cancelled) return;
        if (fetchError) setError(true);
        else setProducts((data ?? []) as Product[]);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchProducts();
    return () => { cancelled = true; };
  }, [attempt]);

  // Include custom brands and categories added through the admin form.
  const categories = useMemo(() => [...new Set(products.map((p) => p.category).filter(Boolean))].sort(), [products]);
  const brands = useMemo(() => [...new Set(products.map((p) => p.brand).filter(Boolean))].sort(), [products]);
  const hasFilters = Boolean(selectedCategory || selectedBrand || searchQuery);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const result = products.filter((product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedBrand || product.brand === selectedBrand) &&
      (!query || [product.name, product.brand, product.description, product.category].some((value) => value?.toLowerCase().includes(query)))
    );
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [products, selectedCategory, selectedBrand, searchQuery, sortBy]);

  function clearFilters() {
    setSelectedCategory("");
    setSelectedBrand("");
    setSearchQuery("");
  }

  return (
    <div className="boutique-catalog">
      <header className="boutique-catalog-header">
        <p className="boutique-eyebrow">THE SHEMA EDIT</p>
        <h1>Find your next <em>favorite.</em></h1>
        <p>Little luxuries. Lovely discoveries. All yours.</p>
        <div className="boutique-header-rule" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" /></svg>
        </div>
      </header>

      <div className="boutique-catalog-content">
        <section className="boutique-filters" aria-label="Filter products">
          <div className="boutique-filter-fields">
            <div className="boutique-search-field">
              <label htmlFor="catalog-search">Find something lovely</label>
              <div className="boutique-search-input">
                <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
                <input id="catalog-search" type="search" placeholder="Search makeup, fragrance & more…" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
              </div>
            </div>
            <div>
              <label htmlFor="catalog-brand">Brand</label>
              <select id="catalog-brand" value={selectedBrand} onChange={(event) => setSelectedBrand(event.target.value)}>
                <option value="">All brands</option>
                {brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="catalog-sort">Sort by</label>
              <select id="catalog-sort" value={sortBy} onChange={(event) => setSortBy(event.target.value as typeof sortBy)}>
                <option value="name">Name (A–Z)</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
              </select>
            </div>
          </div>

          <div className="boutique-category-list" role="group" aria-label="Product categories">
            <button type="button" aria-pressed={!selectedCategory} onClick={() => setSelectedCategory("")}>All beauties</button>
            {categories.map((category) => (
              <button type="button" key={category} aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)}>{category}</button>
            ))}
          </div>
        </section>

        <div className="boutique-results-bar">
          <p role="status" aria-live="polite" aria-atomic="true">
            {loading ? "Gathering your favorites…" : error ? "Our collection" : `${filteredProducts.length} ${filteredProducts.length === 1 ? "lovely find" : "lovely finds"}${hasFilters ? ` · ${products.length} in the collection` : " in the collection"}`}
          </p>
          {hasFilters && <button type="button" onClick={clearFilters}>Clear filters</button>}
        </div>

        {loading ? (
          <div className="boutique-product-list" aria-hidden="true">
            {[0, 1, 2].map((index) => <div key={index} className="boutique-skeleton"><div /><div><span /><span /><span /></div></div>)}
          </div>
        ) : error ? (
          <div className="boutique-empty" role="alert">
            <h2>A little pause in the beauty.</h2>
            <p>We couldn’t load the collection. Please try again.</p>
            <button type="button" onClick={() => { setError(false); setLoading(true); setAttempt((value) => value + 1); }}>Try again</button>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="boutique-product-list">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="boutique-empty">
            <p className="boutique-eyebrow">ROOM FOR A NEW FAVORITE</p>
            <h2>{hasFilters ? "No matches, just yet." : "Something lovely is on its way."}</h2>
            <p>{hasFilters ? "Try another search or explore the full collection." : "Check back soon for our latest beauty finds."}</p>
            {hasFilters && <button type="button" onClick={clearFilters}>Explore all products</button>}
          </div>
        )}

        <p className="boutique-catalog-signoff">Your look, your rules. <span>With love, SHEMA.</span></p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="boutique-catalog p-8 text-center" role="status">Gathering your favorites…</div>}>
      <ProductsCatalog />
    </Suspense>
  );
}
