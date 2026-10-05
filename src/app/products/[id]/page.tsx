"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Product } from "@/types";
import { supabase } from "@/lib/supabase";
import { getProductImages } from "@/lib/products";
import { socialLinks } from "@/lib/config";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  const images = product ? getProductImages(product) : [];
  const currentImage = images[Math.min(imageIndex, images.length - 1)];

  useEffect(() => {
    setImageIndex(0);
  }, [params.id]);

  useEffect(() => {
    if (images.length <= 1) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        setImageIndex((i) => (i - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setImageIndex((i) => (i + 1) % images.length);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length]);

  useEffect(() => {
    async function fetchProduct() {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("id", params.id)
        .single();

      if (data) {
        setProduct(data as Product);
        const { data: related } = await supabase
          .from("products")
          .select("*")
          .eq("category", data.category)
          .neq("id", data.id)
          .limit(4);
        if (related) setRelatedProducts(related as Product[]);
      }
      setLoading(false);
    }
    if (params.id) fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-primary">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Product Not Found</h1>
          <Link href="/products" className="text-secondary hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-pink-100 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-primary">
            <li>
              <Link href="/" className="hover:text-dark-rose">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-dark-rose">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="text-primary font-bold">{product.name}</li>
          </ol>
        </nav>

        {/* Product Detail */}
        <div className="bg-pink-50 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative h-96 md:h-[500px] bg-pink-200 flex items-center justify-center">
              {currentImage ? (
                <Image
                  src={currentImage}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  priority
                />
              ) : null}

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() =>
                      setImageIndex((i) => (i - 1 + images.length) % images.length)
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary text-2xl leading-none font-bold flex items-center justify-center shadow-md transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => setImageIndex((i) => (i + 1) % images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary text-2xl leading-none font-bold flex items-center justify-center shadow-md transition-colors"
                  >
                    ›
                  </button>
                  <span className="absolute bottom-3 right-3 bg-white/80 text-primary text-xs font-bold px-2 py-1 rounded-full">
                    {Math.min(imageIndex, images.length - 1) + 1} / {images.length}
                  </span>
                </>
              )}
            </div>

            {/* Product Info */}
            <div className="p-6">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                {product.brand}
              </p>
              <h1 className="text-2xl font-bold text-primary mb-4 uppercase">
                {product.name}
              </h1>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center">
                  <span className="w-20 font-bold text-primary uppercase">SIZE:</span>
                  <span className="text-primary uppercase">{product.size}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-20 font-bold text-primary uppercase">COLOR:</span>
                  <span className="text-primary uppercase">{product.color}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-20 font-bold text-primary uppercase">CATEGORY:</span>
                  <span className="text-primary uppercase">{product.category}</span>
                </div>
              </div>

              <p className="text-primary mb-4 text-sm">{product.description}</p>

              <div className="mb-4">
                <span className="text-xl font-bold text-primary uppercase">
                  PRICE: ${product.price.toFixed(2)}
                </span>
              </div>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-dark-rose transition-colors text-center"
              >
                Get Product Now
              </a>

              <div className="mt-4 flex items-center text-xs text-primary">
                <svg
                  className="w-4 h-4 mr-2 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                In Stock - Ready to ship
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-6 uppercase">
              Related Products
            </h2>
            <div className="space-y-0">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
