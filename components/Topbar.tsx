import { Search, Bell } from 'lucide-react';
import { ComplianceBadges } from './ComplianceBadges';

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] glass">
      <div className="flex items-center gap-4 px-4 py-3 md:px-6">
        <div className="min-w-0">
          <h1 className="truncate text-base font-semibold tracking-tight md:text-lg">{title}</h1>
          {subtitle && <p className="truncate text-xs text-[var(--color-text-muted)]">{subtitle}</p>}
        </div>
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <ComplianceBadges />
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <div className="hidden items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 sm:flex">
            <Search className="h-3.5 w-3.5 text-[var(--color-text-dim)]" />
            <input
              placeholder="Search case, seller, GSTIN..."
              className="w-40 bg-transparent text-xs text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-dim)]"
            />
          </div>
          <button className="relative rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2 text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs font-semibold text-white">
            RA
          </div>
        </div>
      </div>
    </header>
  );
}
