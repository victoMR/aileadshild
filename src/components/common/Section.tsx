interface SectionLabelProps {
  text: string;
  centered?: boolean;
}

export function SectionLabel({ text, centered = false }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-4 text-xs uppercase tracking-widest text-cyan-400 mb-4 ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="w-7 h-px bg-cyan-400"></span>
      {text}
    </div>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight -tracking-wide max-w-4xl">
      {children}
    </h2>
  );
}

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full py-16 md:py-20 lg:py-32 px-4 md:px-8 lg:px-12 ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
