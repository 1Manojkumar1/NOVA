import { Avatar, Card, CardTitle, ProgressBar, StatusBadge } from "../dashboard/DashboardWidgets";

const goals = [
  { name: "Website relaunch", value: 72 },
  { name: "Mobile app v2", value: 45 },
];

const team = [
  { initials: "MK", tone: "brand" },
  { initials: "JT", tone: "cyan" },
  { initials: "AR", tone: "amber" },
];

export function AlignmentPanel() {
  return (
    <div
      role="img"
      aria-label="Preview of NOVA team alignment: shared launch goals with progress and teammates currently online."
      className="min-w-0"
    >
      <Card className="p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <CardTitle>Launch readiness</CardTitle>
          <StatusBadge label="In sync" tone="emerald" />
        </div>
        <ul className="space-y-3">
          {goals.map((goal) => (
            <li key={goal.name} className="min-w-0">
              <p className="mb-1.5 truncate text-xs font-semibold text-white">
                {goal.name}
              </p>
              <ProgressBar value={goal.value} tone="emerald" />
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-3">
          <span className="flex shrink-0 -space-x-2" aria-hidden="true">
            {team.map((member) => (
              <Avatar
                key={member.initials}
                initials={member.initials}
                tone={member.tone}
                className="ring-2 ring-ink-900"
              />
            ))}
            <span className="flex size-6 items-center justify-center rounded-full bg-ink-700 text-[9px] font-bold text-white ring-2 ring-ink-900">
              +5
            </span>
          </span>
          <p className="flex min-w-0 items-center gap-1.5 text-[11px] text-mist-500">
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-emerald-400"
            />
            <span className="truncate">
              <span className="font-semibold text-white">8 teammates</span>{" "}
              online now
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
}
