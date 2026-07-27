export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-lilac-100 text-lilac-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
            About Shema
          </h1>
        </div>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="text-lg text-dark font-medium">
            Shema was born from a simple belief: beauty should feel personal, 
            effortless, and accessible to everyone.
          </p>
          <p>
            What started as a shared passion between two friends has grown into a 
            curated collection of makeup, clothing, and everyday essentials. We 
            carefully select every item in our store with the modern woman in 
            mind — pieces that bring confidence, comfort, and a touch of elegance 
            to your daily life.
          </p>
          <p>
            We believe in quality over quantity. Each product we offer is chosen 
            for its craftsmanship, design, and ability to make you feel your best. 
            From a perfectly formulated lipstick to a silk chemise that feels like 
            a second skin, everything at Shema is intentional.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { number: "200+", label: "Happy Customers" },
            { number: "50+", label: "Curated Products" },
            { number: "100%", label: "Loved & Tested" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-lilac-50 p-6 text-center"
            >
              <div className="text-2xl font-bold text-lilac-600">{stat.number}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
