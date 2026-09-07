import {
  CalendarDays,
  ChevronDown,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Zap,
} from "lucide-react";
import { cn } from "../../utils/cn";

const items = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: FolderKanban, label: "Projects", active: false },
  { icon: CalendarDays, label: "Calendar", active: false },
  { icon: FileText, label: "Docs", active: false },
  { icon: Zap, label: "Automations", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function DashboardSidebar() {
  return (
    <div className="flex w-12 shrink-0 flex-col border-r border-white/10 bg-white/[0.02] px-2 py-3 sm:w-44">
      <div className="flex items-center gap-2 rounded-lg px-1.5 py-1">
        <span
          aria-hidden="true"
          className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-500 text-[10px] font-bold text-white"
        >
          A
        </span>
        <span className="hidden min-w-0 flex-1 truncate text-[11px] font-semibold text-white sm:block">
          Acme Inc
        </span>
        <ChevronDown
          aria-hidden="true"
          className="hidden size-3.5 shrink-0 text-mist-500 sm:block"
        />
      </div>

      <ul className="mt-3 space-y-0.5">
        {items.map((item) => (
          <li key={item.label}>
            <span
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-2 py-2 text-[11px] font-medium",
                item.active
                  ? "bg-brand-500/15 text-white"
                  : "text-mist-500",
              )}
            >
              <item.icon aria-hidden="true" className="size-4 shrink-0" />
              <span className="hidden truncate sm:block">{item.label}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-2 rounded-lg px-1.5 pt-3">
        <span
          aria-hidden="true"
          className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-[9px] font-bold text-white"
        >
          MK
        </span>
        <span className="hidden min-w-0 flex-1 truncate text-[11px] font-medium text-mist-300 sm:block">
          Maya K.
        </span>
      </div>
    </div>
  );
}
