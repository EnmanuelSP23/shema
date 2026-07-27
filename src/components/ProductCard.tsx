interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  badge?: string | null;
}

export default function ProductCard({ name, category, price, image, badge }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-lilac-50 mb-4">
        <div className="absolute inset-0 bg-gradient-to-t from-lilac-100/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-3/4 h-3/4 rounded-2xl"
              style={{ background: image }}
            />
          </div>
        </div>
        {badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-lilac-700 text-xs font-semibold shadow-sm backdrop-blur-sm">
            {badge}
          </span>
        )}
        <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-lilac-500 hover:text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
      <div>
        <p className="text-xs text-lilac-500 font-medium uppercase tracking-wider mb-1">{category}</p>
        <h3 className="text-sm font-semibold text-dark">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{price}</p>
      </div>
    </div>
  );
}
