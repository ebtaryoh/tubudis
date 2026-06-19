interface EyebrowProps {
  children: React.ReactNode;
  dark?: boolean;
  number?: string;
}

export default function Eyebrow({ children, dark, number }: EyebrowProps) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`h-px w-10 ${dark ? "bg-gold-soft/60" : "bg-clay"}`}
        aria-hidden
      />
      {number && (
        <span
          className={`font-mono text-xs ${dark ? "text-gold-soft" : "text-gold"}`}
        >
          {number}
        </span>
      )}
      <span
        className={`font-mono text-[11px] tracking-eyebrow uppercase ${
          dark ? "text-bone-200/70" : "text-slate-warm"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
