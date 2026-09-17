"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const { addItem } = useCart();

  const product = products.find((p) => p.id === params.id);

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

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

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
            <div className="relative h-96 md:h-[500px] bg-pink-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
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

              <button
                onClick={() => addItem(product)}
                className="w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-dark-rose transition-colors"
              >
                Add to Cart
              </button>

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
