"use client";

import { useState } from "react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQ[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [expanded, setExpanded] = useState<string | null>("1");

  return (
    <div className="space-y-4">
      {items.map((faq) => (
        <div
          key={faq.id}
          className="border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors"
        >
          <button
            onClick={() =>
              setExpanded(expanded === faq.id ? null : faq.id)
            }
            className="w-full flex items-center justify-between p-6 bg-black/50 hover:bg-cyan-500/5 transition-colors text-left"
          >
            <h3 className="text-lg font-bold text-white pr-4">
              {faq.question}
            </h3>
            <div
              className={`text-cyan-400 text-2xl flex-shrink-0 transition-transform duration-300 ${
                expanded === faq.id ? "rotate-45" : ""
              }`}
            >
              +
            </div>
          </button>

          {expanded === faq.id && (
            <div className="px-6 py-6 bg-black/80 border-t border-cyan-500/20">
              <p className="text-white/70 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
