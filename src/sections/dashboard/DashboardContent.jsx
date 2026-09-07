import { Bell, Check, Search, Sparkles, TrendingUp } from "lucide-react";
import { activity, focusWeek, insights, projects, tasks } from "../../data/dashboard";
import { cn } from "../../utils/cn";
import {
  Avatar,
  Card,
  CardTitle,
  MiniBars,
  ProgressBar,
  StatusBadge,
} from "./DashboardWidgets";

function Header() {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="min-w-0">
        <p className="truncate text-[13px] font-semibold text-white">
          Good morning, Maya
        </p>
        <p className="truncate text-[11px] text-mist-500">
          Tuesday · 4 priorities today
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        <span className="hidden items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[10px] text-mist-500 sm:flex">
          <Search aria-hidden="true" className="size-3" />
          Search…
        </span>
        <span className="relative flex size-7 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <Bell aria-hidden="true" className="size-3.5 text-mist-300" />
          <span
            aria-hidden="true"
            className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-brand-400"
          />
        </span>
        <Avatar initials="MK" tone="brand" className="size-7 text-[10px]" />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Card>
      <div className="mb-2 flex items-center justify-between gap-2">
        <CardTitle>Active projects</CardTitle>
        <span className="text-[10px] font-semibold text-brand-300">
          View all
        </span>
      </div>
      <ul className="space-y-3">
        {projects.map((project, index) => (
          <li key={project.name} className="min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-white">
                  {project.name}
                </p>
                <p className="truncate text-[10px] text-mist-500">
                  {project.meta}
                </p>
              </div>
              <StatusBadge
                label={project.status.label}
                tone={project.status.tone}
              />
            </div>
            <div className="mt-1.5">
              <ProgressBar
                value={project.progress}
                tone={project.status.tone === "brand" ? "brand" : project.status.tone}
                delay={0.4 + index * 0.15}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Tasks() {
  return (
    <Card className="sm:col-span-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <CardTitle>Today&apos;s tasks</CardTitle>
        <span className="text-[10px] font-semibold text-mist-500 tabular-nums">
          1 of 3 done
        </span>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.title} className="flex min-w-0 items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                "flex size-4 shrink-0 items-center justify-center rounded-md border",
                task.done
                  ? "border-emerald-400/40 bg-emerald-400/15"
                  : "border-white/20 bg-transparent",
              )}
            >
              {task.done && <Check className="size-3 text-emerald-300" />}
            </span>
            <span className="min-w-0 flex-1">
              <span
                className={cn(
                  "block truncate text-[11px] font-medium",
                  task.done ? "text-mist-500 line-through" : "text-mist-100",
                )}
              >
                {task.title}
              </span>
              <span className="block truncate text-[10px] text-mist-500">
                {task.tag} · Due {task.due}
              </span>
            </span>
            <Avatar
              initials={task.owner.initials}
              tone={task.owner.tone}
              className="size-5 text-[8px]"
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}

function AiInsights() {
  return (
    <Card className="border-brand-500/25 bg-brand-500/[0.08] sm:col-span-2">
      <div className="mb-2 flex items-center gap-1.5">
        <Sparkles aria-hidden="true" className="size-3.5 text-brand-300" />
        <CardTitle>NOVA AI</CardTitle>
      </div>
      <ul className="space-y-2">
        {insights.map((insight) => (
          <li key={insight} className="flex min-w-0 gap-1.5">
            <span
              aria-hidden="true"
              className="mt-1.5 size-1 shrink-0 rounded-full bg-brand-300"
            />
            <span className="min-w-0 text-[11px] leading-relaxed text-mist-100">
              {insight}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Activity() {
  return (
    <Card className="sm:col-span-3">
      <div className="mb-2">
        <CardTitle>Team activity</CardTitle>
      </div>
      <ul className="space-y-2.5">
        {activity.map((entry) => (
          <li key={entry.name} className="flex min-w-0 items-center gap-2">
            <Avatar initials={entry.initials} tone={entry.tone} className="size-6" />
            <p className="min-w-0 flex-1 truncate text-[11px] text-mist-500">
              <span className="font-semibold text-white">{entry.name}</span>{" "}
              {entry.action}
            </p>
            <span className="shrink-0 text-[10px] text-mist-500 tabular-nums">
              {entry.time}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function FocusChart() {
  return (
    <Card className="sm:col-span-2">
      <div className="mb-1 flex items-center justify-between gap-2">
        <CardTitle>{focusWeek.label}</CardTitle>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
          <TrendingUp aria-hidden="true" className="size-3" />
          +18%
        </span>
      </div>
      <p className="text-lg font-bold text-white tabular-nums">
        {focusWeek.total}
      </p>
      <p className="mb-2 text-[10px] text-mist-500">{focusWeek.delta}</p>
      <MiniBars bars={focusWeek.bars} />
    </Card>
  );
}

export function DashboardContent() {
  return (
    <div className="min-w-0 flex-1 space-y-3 p-3 sm:p-4">
      <Header />
      <Projects />
      <div className="grid min-w-0 gap-3 sm:grid-cols-5">
        <Tasks />
        <AiInsights />
      </div>
      <div className="grid min-w-0 gap-3 sm:grid-cols-5">
        <Activity />
        <FocusChart />
      </div>
    </div>
  );
}
