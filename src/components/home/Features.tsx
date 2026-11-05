import { BadgeCheck, CalendarClock, Compass, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Upcoming Events",
    description:
      "Strict future-date filters guarantee you will always discover upcoming initiatives that need volunteers.",
  },
  {
    icon: BadgeCheck,
    title: "Creator Controls",
    description:
      "Manage, update, and track participation for your own initiatives, creator authorization.",
  },
  {
    icon: CalendarClock,
    title: "One-Click Participation",
    description:
      "Join verified social initiatives with a single click and coordinate directly with local volunteer leaders.",
  },
  {
    icon: HeartHandshake,
    title: "Community-Led Drives",
    description:
      "Every citizen can organize relevent events in their local area in minutes.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#647F52] dark:text-lime-300">
            Platform Features
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#26351F] dark:text-stone-100 sm:text-4xl lg:text-5xl">
            Everything you need<br />to make a difference
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-stone-400 sm:text-lg">
            A frictionless platform connecting compassionate citizens with direct local community initiatives.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-5 rounded-3xl border border-stone-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:border-white/10 dark:bg-[#142414] dark:hover:shadow-black/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#647F52]/10 text-[#42512C] transition group-hover:bg-[#42512C] group-hover:text-white dark:bg-lime-300/10 dark:text-lime-300 dark:group-hover:bg-lime-300 dark:group-hover:text-[#172313]">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold tracking-tight text-[#26351F] dark:text-stone-100">
                {title}
              </h3>
              <p className="text-sm leading-6 text-slate-600 dark:text-stone-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
