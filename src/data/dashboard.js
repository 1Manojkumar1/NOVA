export const projects = [
  {
    name: "Website relaunch",
    meta: "12 tasks · Design",
    progress: 72,
    status: { label: "On track", tone: "emerald" },
  },
  {
    name: "Mobile app v2",
    meta: "18 tasks · Engineering",
    progress: 45,
    status: { label: "At risk", tone: "amber" },
  },
  {
    name: "Q3 planning",
    meta: "9 tasks · Operations",
    progress: 100,
    status: { label: "Done", tone: "brand" },
  },
];

export const tasks = [
  {
    title: "Review API rate limits",
    tag: "Engineering",
    due: "Today",
    done: true,
    owner: { initials: "MK", tone: "brand" },
  },
  {
    title: "Draft launch announcement",
    tag: "Marketing",
    due: "Tomorrow",
    done: false,
    owner: { initials: "JT", tone: "cyan" },
  },
  {
    title: "Sync staging database",
    tag: "DevOps",
    due: "Friday",
    done: false,
    owner: { initials: "AR", tone: "amber" },
  },
];

export const insights = [
  "Mobile app v2 is trending late — reassign 2 tasks to stay on track.",
  "Team focus peaks Tue–Thu. NOVA protected 6h of deep work.",
];

export const activity = [
  {
    name: "Maya",
    initials: "MK",
    tone: "brand",
    action: "moved “API redesign” to Done",
    time: "2m",
  },
  {
    name: "Jonas",
    initials: "JT",
    tone: "cyan",
    action: "started “Onboarding flow”",
    time: "26m",
  },
  {
    name: "Aisha",
    initials: "AR",
    tone: "amber",
    action: "commented on “Pricing page”",
    time: "1h",
  },
];

export const focusWeek = {
  label: "Focus time",
  total: "32.5h",
  delta: "+18% this week",
  bars: [
    { day: "M", value: 55 },
    { day: "T", value: 80 },
    { day: "W", value: 65 },
    { day: "T", value: 95 },
    { day: "F", value: 45 },
    { day: "S", value: 25 },
    { day: "S", value: 30 },
  ],
};
