"use client";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-lilac-100 via-blush to-lilac-50 py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-white/60 text-lilac-600 text-xs font-semibold uppercase tracking-wider mb-4">
          Stay in touch
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
          Join the Shema Circle
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Be the first to know about new arrivals, exclusive drops, and special offers.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-full border border-lilac-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-lilac-400 focus:border-transparent text-sm text-gray-700 placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-lilac-600 text-white text-sm font-semibold hover:bg-lilac-700 transition-colors shadow-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
