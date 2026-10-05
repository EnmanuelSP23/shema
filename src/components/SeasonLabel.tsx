"use client";

import { useEffect, useState } from "react";

export default function SeasonLabel() {
  const [month, setMonth] = useState("\u00A0");
  const [year, setYear] = useState("\u00A0");

  useEffect(() => {
    const now = new Date();
    setMonth(
      now.toLocaleString("es-ES", { month: "long" }).toUpperCase()
    );
    setYear(String(now.getFullYear()));
  }, []);

  return (
    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-right">
      <p className="text-primary font-bold text-xs md:text-sm mt-1 md:mt-2">
        {month}
      </p>
      <p className="text-primary font-black text-lg md:text-2xl">{year}</p>
    </div>
  );
}
