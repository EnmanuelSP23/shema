import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-lilac-300 to-lilac-500" />
              <span className="text-lg font-bold tracking-tight">Shema</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Curated essentials for the modern soul. Beauty, fashion, and everyday elegance.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-lilac-300 mb-4">Shop</h3>
            <ul className="space-y-2">
              {["Makeup", "Clothing", "Accessories", "Essentials"].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-sm text-gray-400 hover:text-lilac-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-lilac-300 mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-lilac-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-lilac-300 mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {["Instagram", "TikTok", "Pinterest"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-lilac-500 hover:text-white transition-all"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 Shema. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-lilac-300 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-lilac-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
