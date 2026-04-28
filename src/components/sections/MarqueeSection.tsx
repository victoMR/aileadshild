"use client";

import { useEffect, useState } from "react";
import { MARQUEE_ITEMS } from "@/lib/constants/content";

export function MarqueeSection() {
  const [duplicatedItems, setDuplicatedItems] = useState<string[]>([]);

  useEffect(() => {
    setDuplicatedItems([...MARQUEE_ITEMS, ...MARQUEE_ITEMS]);
  }, []);

  return (
    <div className="border-y border-cyan-500/20 bg-black/50 overflow-hidden py-6 md:py-8">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="text-xs uppercase tracking-widest text-white/45 flex items-center gap-4 flex-shrink-0"
          >
            <span>{item}</span>
            <span className="text-cyan-400">✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
