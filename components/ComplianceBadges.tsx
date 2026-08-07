import { ShieldCheck, Database, Scale, IndianRupee } from 'lucide-react';

export function ComplianceBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
        <ShieldCheck className="h-3 w-3" />
        DPDP Act - PII in India Region
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-300">
        <Scale className="h-3 w-3" />
        Fairness: No bias
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-medium text-indigo-300">
        <IndianRupee className="h-3 w-3" />
        ₹0.40 / decision
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/40 bg-slate-700/20 px-2.5 py-1 text-[11px] font-medium text-slate-300">
        <Database className="h-3 w-3" />
        Rules + Open-source
      </span>
    </div>
  );
}
