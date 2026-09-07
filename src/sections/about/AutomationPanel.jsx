import { Archive, Bell, Zap } from "lucide-react";
import { cn } from "../../utils/cn";
import { Card, CardTitle, StatusBadge } from "../dashboard/DashboardWidgets";

const rules = [
  {
    icon: Zap,
    tone: "text-brand-300 border-brand-500/20 bg-brand-500/10",
    trigger: "Task moved to Done",
    action: "Post update to #launch",
    on: true,
  },
  {
    icon: Bell,
    tone: "text-accent-300 border-accent-400/20 bg-accent-400/10",
    trigger: "Deadline within 24 hours",
    action: "Remind assignee in Slack",
    on: true,
  },
  {
    icon: Archive,
    tone: "text-mist-300 border-white/10 bg-white/5",
    trigger: "Sprint closed",
    action: "Archive files to Docs",
    on: false,
  },
];

function Toggle({ on }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative h-[18px] w-8 shrink-0 rounded-full transition-colors",
        on ? "bg-emerald-400/80" : "bg-white/15",
      )}
    >
      <span
        className={cn(
          "absolute top-[2px] size-3.5 rounded-full bg-white",
          on ? "right-[2px]" : "left-[2px]",
        )}
      />
    </span>
  );
}

export function AutomationPanel() {
  return (
    <div
      role="img"
      aria-label="Preview of NOVA automation rules: done tasks post to the launch channel, upcoming deadlines remind assignees."
      className="min-w-0"
    >
      <Card className="p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <CardTitle>Automations</CardTitle>
          <StatusBadge label="2 active" tone="emerald" />
        </div>
        <ul className="space-y-2.5">
          {rules.map((rule) => (
            <li
              key={rule.trigger}
              className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-lg border",
                  rule.tone,
                )}
              >
                <rule.icon className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-white">
                  When {rule.trigger}
                </span>
                <span className="block truncate text-[11px] text-mist-500">
                  {rule.action}
                </span>
              </span>
              <Toggle on={rule.on} />
            </li>
          ))}
        </ul>
        <p className="mt-3 border-t border-white/5 pt-3 text-[11px] text-mist-500">
          <span className="font-semibold text-white tabular-nums">46 runs</span>{" "}
          this week ·{" "}
          <span className="font-semibold text-white tabular-nums">3.2h</span>{" "}
          saved
        </p>
      </Card>
    </div>
  );
}
