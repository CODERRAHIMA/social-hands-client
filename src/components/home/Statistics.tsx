import { CalendarHeart, Clock, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "12K+", label: "Active Volunteers" },
  { icon: CalendarHeart, value: "8.5K+", label: "Events Hosted" },
  { icon: MapPin, value: "150+", label: "Communities Served" },
  { icon: Clock, value: "1.2M+", label: "Volunteer Hours" },
];

const Statistics = () => {
  return (
    <section className="relative z-20 mx-auto -mt-16 w-full max-w-7xl px-6 sm:px-10 lg:-mt-20 lg:px-12">
      <div className="grid grid-cols-2 gap-y-10 rounded-3xl border border-black/5 bg-white p-8 shadow-2xl shadow-black/20 lg:grid-cols-4 lg:gap-y-0 lg:p-10">
        {stats.map(({ icon: Icon, value, label }, index) => (
          <div
            key={label}
            className={`flex flex-col items-center gap-3 text-center lg:px-4 ${
              index > 0 ? "lg:border-l lg:border-black/10" : ""
            }`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#647F52]/10 text-[#42512C]">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <p className="text-3xl font-extrabold tracking-tight text-[#26351f] sm:text-4xl">
              {value}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/50 sm:text-sm">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
