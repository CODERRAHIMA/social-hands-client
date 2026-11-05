import { CalendarHeart, Clock, MapPin, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12K+",
    label: "Active Volunteers",
    accent: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300",
    valueColor: "text-emerald-800 dark:text-emerald-300",
  },
  {
    icon: CalendarHeart,
    value: "8.5K+",
    label: "Events Hosted",
    accent: "bg-sky-50 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300",
    valueColor: "text-sky-800 dark:text-sky-300",
  },
  {
    icon: MapPin,
    value: "150+",
    label: "Communities Served",
    accent: "bg-amber-50 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300",
    valueColor: "text-amber-800 dark:text-amber-300",
  },
  {
    icon: Clock,
    value: "1.2M+",
    label: "Volunteer Hours",
    accent: "bg-violet-50 text-violet-700 dark:bg-violet-400/15 dark:text-violet-300",
    valueColor: "text-violet-800 dark:text-violet-300",
  },
];

const Statistics = () => {
  return (
    <section
      aria-label="Community impact statistics"
      className="relative z-20 mx-auto -mt-12 w-full max-w-7xl px-4 sm:-mt-16 sm:px-10 lg:-mt-20 lg:px-12"
    >
      <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white/95 p-2 shadow-[0_24px_70px_-24px_rgba(27,39,20,0.28)] backdrop-blur-xl dark:border-white/10 dark:bg-[#26351F] sm:rounded-[2rem] sm:p-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-lime-500/10 blur-3xl dark:bg-lime-300/10"
        />
        <div className="relative">
          <div className="grid grid-cols-2 gap-y-2 sm:gap-y-5 lg:grid-cols-4 lg:gap-y-0">
            {stats.map(
              ({ icon: Icon, value, label, accent, valueColor }, index) => (
                <div
                  key={label}
                  className={`group flex flex-col items-center gap-2 rounded-2xl px-1 py-3 text-center transition-colors hover:bg-stone-50/80 dark:hover:bg-white/[0.03] sm:gap-3 sm:px-4 sm:py-4 ${
                    index > 0
                      ? "lg:border-l lg:border-stone-200 dark:lg:border-white/10"
                      : ""
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-transform group-hover:-translate-y-0.5 sm:h-12 sm:w-12 ${accent}`}
                  >
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <p
                    className={`text-2xl font-extrabold tracking-tight sm:text-4xl ${valueColor}`}
                  >
                    {value}
                  </p>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-stone-500 dark:text-stone-300 sm:text-xs sm:tracking-[0.14em]">
                    {label}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
