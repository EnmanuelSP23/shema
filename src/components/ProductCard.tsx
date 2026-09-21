"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  return (
    <div className="bg-pink-200 overflow-hidden border-b border-pink-300">
      <Link href={`/products/${product.id}`}>
        <div className="flex flex-col md:flex-row min-h-[280px] md:min-h-[380px]">
          {/* Product Image - Left Side */}
          <div className="w-full md:w-[35%] h-64 md:h-auto relative bg-pink-100 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-2"
            />
          </div>

          {/* Product Details - Right Side */}
          <div className="w-full md:w-[65%] p-5 md:p-10 flex flex-col justify-center bg-pink-200">
            <p className="text-sm md:text-xl font-bold text-primary uppercase mb-1">
              {product.brand}
            </p>
            <h3 className="text-base md:text-2xl font-bold text-primary mb-4 md:mb-6 leading-tight uppercase">
              {product.name}
            </h3>

            <div className="flex gap-6 md:gap-10 mb-4 md:mb-6">
              <div>
                <span className="block text-xs md:text-sm font-bold text-primary uppercase mb-1">SIZE</span>
                <span className="text-sm md:text-base font-bold text-primary uppercase">{product.size}</span>
              </div>
              <div>
                <span className="block text-xs md:text-sm font-bold text-primary uppercase mb-1">COLOR</span>
                <span className="text-sm md:text-base font-bold text-primary uppercase">{product.color}</span>
              </div>
            </div>

            <div>
              <p className="text-lg md:text-2xl font-bold text-primary uppercase">
                PRICE: ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
