import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section - Catalog Cover Style */}
      <section className="relative bg-gradient-to-b from-pink-200 to-pink-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-black text-primary mb-4 tracking-tight">
                SHEMA
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-bold mb-6 uppercase">
                Makeup Collection
              </p>
              <p className="text-lg text-primary mb-8 max-w-md">
                www.shema.com
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/products"
                  className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-dark-rose transition-colors text-center"
                >
                  Shop Now
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96">
              <Image
                src="/products/sehma.jpg"
                alt="SHEMA Makeup Collection"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements - Stars */}
        <div className="absolute top-10 left-10 text-primary opacity-30">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute top-20 right-20 text-primary opacity-30">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 text-primary opacity-30">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        
        {/* Discounts Banner */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-right">
          <p className="text-primary font-bold text-sm md:text-lg">DISCOUNTS,</p>
          <p className="text-primary font-bold text-sm md:text-lg">GOOD PRICES</p>
          <p className="text-primary font-bold text-sm md:text-lg">AND MORE</p>
          <p className="text-primary font-bold text-xs md:text-sm mt-1 md:mt-2">AGOSTO</p>
          <p className="text-primary font-black text-lg md:text-2xl">2026</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 bg-pink-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h3 className="text-xl font-bold text-primary mb-2 uppercase">
                Authentic Products
              </h3>
              <p className="text-primary">
                100% genuine products from top brands like Sephora, Victoria&apos;s Secret, and
                Juicy Couture.
              </p>
            </div>

            <div className="text-center p-4">
              <h3 className="text-xl font-bold text-primary mb-2 uppercase">
                Best Prices
              </h3>
              <p className="text-primary">
                Discounted prices on premium products. Save big on your favorite brands.
              </p>
            </div>

            <div className="text-center p-4">
              <h3 className="text-xl font-bold text-primary mb-2 uppercase">
                Fast Delivery
              </h3>
              <p className="text-primary">
                Quick and reliable shipping right to your doorstep. Track your order anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-primary mb-4 uppercase">
              Featured Products
            </h2>
            <p className="text-primary max-w-2xl mx-auto">
              Explore our handpicked selection of premium makeup and beauty products.
            </p>
          </div>

          <div className="space-y-0">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-dark-rose transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase">Multiply Your Beauty</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SHEMA for their beauty needs.
            Shop now and discover the difference!
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-pink-100 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
