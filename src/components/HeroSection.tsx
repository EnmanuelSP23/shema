import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-lilac-50 via-white to-blush overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-lilac-200 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-rose-gold blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-lilac-100 text-lilac-700 text-xs font-semibold uppercase tracking-wider mb-6">
            New Collection 2026
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-dark leading-[1.1]">
            Elegance That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lilac-500 to-lilac-700">
              Speaks Volumes
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
            Discover curated makeup, clothing, and essentials that celebrate your unique beauty. 
            Every piece, thoughtfully chosen for the modern you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-lilac-600 text-white text-sm font-semibold hover:bg-lilac-700 transition-colors shadow-sm"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-lilac-300 text-lilac-700 text-sm font-semibold hover:bg-lilac-50 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
