import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Network, ShieldAlert, Activity } from 'lucide-react';
import { ComplianceBadges } from './ComplianceBadges';

const nav = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/graph', label: 'Trust Graph', icon: Network, end: false },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)]/50 md:flex">
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/20">
          <ShieldAlert className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold tracking-tight">Trust Graph</div>
          <div className="text-[11px] text-[var(--color-text-dim)]">Fraud Detection</div>
        </div>
      </div>

      <nav className="mt-2 flex-1 space-y-1 px-3">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                isActive
                  ? 'bg-indigo-500/15 text-indigo-200 shadow-sm ring-1 ring-indigo-500/20'
                  : 'text-[var(--color-text-muted)] hover:bg-white/5 hover:text-[var(--color-text)]'
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="space-y-3 px-4 py-5">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/50 p-3">
          <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-dim)]">
            <Activity className="h-3 w-3" /> System Status
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-emerald-300">Engine online</span>
          </div>
        </div>
        <ComplianceBadges />
      </div>
    </aside>
  );
}

export function MobileNav() {
  return (
    <nav className="flex items-center gap-1 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-2 md:hidden">
      <div className="flex items-center gap-2 px-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500">
          <ShieldAlert className="h-4 w-4 text-white" />
        </div>
        <span className="text-sm font-semibold">Trust Graph</span>
      </div>
      <div className="ml-auto flex gap-1">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs transition ${
                isActive ? 'bg-indigo-500/15 text-indigo-200' : 'text-[var(--color-text-muted)]'
              }`
            }
          >
            <item.icon className="h-3.5 w-3.5" />
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
