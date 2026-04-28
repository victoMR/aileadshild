interface BadgeProps {
  children: React.ReactNode;
}

export function HeroBadge({ children }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 border border-cyan-500/20 rounded-full px-4 py-2 mb-6 text-xs uppercase tracking-wider text-cyan-400 animate-pulse">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
      {children}
    </div>
  );
}
