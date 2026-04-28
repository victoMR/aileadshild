import { STATS } from "@/lib/constants/content";

export function StatsSection() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-600 py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-black/65 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
