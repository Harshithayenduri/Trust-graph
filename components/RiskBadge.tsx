export function riskColor(score: number): { text: string; bg: string; border: string; dot: string; label: string } {
  if (score > 85) return { text: 'text-red-300', bg: 'bg-red-500/10', border: 'border-red-500/40', dot: 'bg-red-500', label: 'Fraud' };
  if (score >= 40) return { text: 'text-amber-300', bg: 'bg-amber-500/10', border: 'border-amber-500/40', dot: 'bg-amber-500', label: 'Review' };
  return { text: 'text-emerald-300', bg: 'bg-emerald-500/10', border: 'border-emerald-500/40', dot: 'bg-emerald-500', label: 'Genuine' };
}

export function RiskBadge({ score, size = 'md' }: { score: number; size?: 'sm' | 'md' }) {
  const c = riskColor(score);
  const pad = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${c.bg} ${c.border} ${c.text} ${pad} font-medium`}>
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
      {score} · {c.label}
    </span>
  );
}

export function RiskBar({ score }: { score: number }) {
  const c = riskColor(score);
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-700/40">
      <div className={`h-full rounded-full ${c.dot} transition-all duration-700`} style={{ width: `${score}%` }} />
    </div>
  );
}
