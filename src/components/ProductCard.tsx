"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting) setRevealed(true);
    }, { threshold: 0.08 });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className="boutique-card"
      data-revealed={revealed}
      data-in-view={inView}
    >
      <Link href={`/products/${product.id}`} className="boutique-card-link">
        <div className="boutique-card-stage">
          <div className="boutique-card-image">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 767px) calc(100vw - 96px), (max-width: 1152px) 50vw, 560px"
              className="object-contain p-3 md:p-5"
            />
          </div>
          <span className="boutique-flower boutique-flower-first" aria-hidden="true">
            <Image src="/catalog-pansy.webp" alt="" width={240} height={226} unoptimized className="boutique-flower-image" />
          </span>
          <span className="boutique-flower boutique-flower-second" aria-hidden="true">
            <Image src="/catalog-pansy.webp" alt="" width={240} height={226} unoptimized className="boutique-flower-image" />
          </span>
        </div>

        <div className="boutique-card-details">
          <p className="boutique-card-brand">{product.brand}</p>
          <h3 className="boutique-card-name">{product.name}</h3>
          <p className="boutique-card-category">{product.category}</p>

          {(product.size || product.color) && (
            <dl className="boutique-card-specs">
              {product.size && <div><dt>Size</dt><dd>{product.size}</dd></div>}
              {product.color && <div><dt>Shade / Style</dt><dd>{product.color}</dd></div>}
            </dl>
          )}

          <div className="boutique-card-bottom">
            <p className="boutique-card-price">${product.price.toFixed(2)} <span>USD</span></p>
            <span className="boutique-card-cta">
              View details
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
