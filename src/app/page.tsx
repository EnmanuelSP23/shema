import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";
import { Product } from "@/types";

function Arrow() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function findInCategories(products: Product[], categories: string[]) {
  for (const category of categories) {
    const product = products.find((item) => item.category.toLowerCase() === category.toLowerCase());
    if (product) return product;
  }
}

export default async function Home() {
  const products = await getProducts();
  const moods = [
    {
      title: "Everyday essentials",
      description: "The little things that make a look feel like you.",
      cta: "Explore essentials",
      product: findInCategories(products, ["Lip Care", "Mascara", "Eyeliner", "Lip Stain"]),
      fallbackImage: "/products/3.jpg",
      className: "home-mood-essentials",
    },
    {
      title: "A little glow",
      description: "A touch of color. A little extra confidence.",
      cta: "Find your glow",
      product: findInCategories(products, ["Blush", "Lip Gloss", "Contour", "Gift Set"]),
      fallbackImage: "/products/3.jpg",
      className: "home-mood-glow",
    },
    {
      title: "Your signature scent",
      description: "Find the fragrance that feels unmistakably yours.",
      cta: "Find your scent",
      product: findInCategories(products, ["Fragrance", "Body Fragrance", "Body Fragance", "Fragance", "Body Care"]),
      fallbackImage: "/products/amber1.jpg",
      className: "home-mood-scent",
    },
  ];
  const featuredProducts = [...new Map([
    ...moods.flatMap((mood) => mood.product ? [mood.product] : []),
    ...products,
  ].map((product) => [product.id, product])).values()].slice(0, 3);
  const heroProduct = moods[1].product ?? featuredProducts[0];
  const heroCompanion = moods[2].product ?? featuredProducts.find((product) => product.id !== heroProduct?.id);

  return (
    <div className="editorial-home">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="boutique-eyebrow">SHEMA · MAKEUP COLLECTION</p>
            <h1 id="home-hero-title">Your look,<br /><em>your rules.</em></h1>
            <p className="home-hero-description">Beauty is personal. Discover makeup, body care, and little luxuries to make every day your own.</p>
            <Link href="/products" className="home-button">Explore the collection <Arrow /></Link>
            <p className="home-hero-footnote">A little color. A little confidence. A lot of you.</p>
          </div>

          <div className="home-hero-gallery">
            <span className="home-gallery-halo" aria-hidden="true" />
            <Link href={heroProduct ? `/products/${heroProduct.id}` : "/products"} className="home-hero-photo home-hero-photo-main">
              <div className="home-hero-photo-image">
                {/* Request extra source pixels for the portrait crop of wide product photos. */}
                <Image src={heroProduct?.image || "/products/3.jpg"} alt={heroProduct?.name ?? "Discover the SHEMA makeup collection"} fill sizes="(max-width: 767px) 180vw, (max-width: 1200px) 85vw, 1024px" loading="eager" className="object-contain" />
              </div>
              <span>{heroProduct?.brand ?? "A little glow"}</span>
            </Link>
            <Link href={heroCompanion ? `/products/${heroCompanion.id}` : "/products"} className="home-hero-photo home-hero-photo-small">
              <div className="home-hero-photo-image">
                <Image src={heroCompanion?.image || "/products/amber1.jpg"} alt={heroCompanion?.name ?? "Explore fragrance at SHEMA"} fill sizes="(max-width: 767px) 40vw, (max-width: 1200px) 18vw, 215px" className="object-contain" />
              </div>
              <span>A new favorite awaits.</span>
            </Link>
            <p className="home-gallery-caption">The beauty of a little discovery.</p>
          </div>
        </div>
      </section>

      <section className="home-section home-moods" aria-labelledby="home-moods-title">
        <div className="home-section-heading">
          <p className="boutique-eyebrow">A LITTLE SOMETHING FOR EVERY YOU</p>
          <h2 id="home-moods-title">Shop by <em>mood.</em></h2>
          <p>Follow your feeling. Find your favorite.</p>
        </div>
        <div className="home-mood-grid">
          {moods.map((mood, index) => (
            <Link key={mood.title} href={mood.product ? `/products?category=${encodeURIComponent(mood.product.category)}` : "/products"} className={`home-mood-card ${mood.className}`}>
              <div className="home-mood-image">
                <span className="home-mood-number" aria-hidden="true">0{index + 1}</span>
                <Image src={mood.product?.image || mood.fallbackImage} alt="" fill sizes="(max-width: 767px) calc(100vw - 72px), (max-width: 1200px) 30vw, 360px" className="object-contain" />
              </div>
              <div className="home-mood-copy">
                <h3>{mood.title}</h3>
                <p>{mood.description}</p>
                <span>{mood.cta} <Arrow /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="home-section home-edit" aria-labelledby="home-edit-title">
          <div className="home-section-heading">
            <p className="boutique-eyebrow">THREE LOVELY PLACES TO START</p>
            <h2 id="home-edit-title">The SHEMA <em>Edit.</em></h2>
            <p>A few favorites from our collection, picked for your next beauty ritual.</p>
          </div>
          <div className="home-featured-grid">
            {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="home-section-action"><Link href="/products" className="home-text-link">See the full collection <Arrow /></Link></div>
        </section>
      )}

      <section className="home-about" aria-labelledby="home-about-title">
        <div className="home-about-inner">
          <div className="home-about-intro">
            <p className="boutique-eyebrow">A LITTLE NOTE FROM SHEMA</p>
            <h2 id="home-about-title">For the everyday.<br /><em>And the just because.</em></h2>
          </div>
          <div className="home-about-copy">
            <p>Sometimes it’s a new lip color. Sometimes it’s a scent that feels like you. SHEMA brings together makeup, body care, and accessories for those little moments of self-expression.</p>
            <p>Not sure where to start? We’d love to help you find something lovely.</p>
            <Link href="/contact" className="home-text-link">Let’s find your next favorite <Arrow /></Link>
            <span className="home-about-signature">With love, SHEMA.</span>
          </div>
        </div>
      </section>

      <section className="home-closing" aria-labelledby="home-closing-title">
        <p className="boutique-eyebrow">MAKE A LITTLE ROOM FOR YOU</p>
        <h2 id="home-closing-title">Find something that<br /><em>feels like you.</em></h2>
        <Link href="/products" className="home-button">Find your favorite <Arrow /></Link>
      </section>
    </div>
  );
}
