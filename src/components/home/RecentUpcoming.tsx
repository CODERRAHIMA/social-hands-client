import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

type Event = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  spots: number;
  icon: LucideIcon;
  gradient: string;
};

const upcomingEvents: Event[] = [
  {
    id: "beach-cleanup",
    title: "Coastal Cleanup Morning",
    description:
      "Spend a few hours clearing plastic and debris from the shoreline with local volunteers.",
    category: "Environment",
    date: "Sat, Nov 14",
    time: "8:00 AM – 11:00 AM",
    location: "Sunset Beach, Bay Area",
    attendees: 84,
    spots: 16,
    icon: Sprout,
    gradient: "from-[#3f5a35] via-[#5b7a4a] to-[#8aa86f]",
  },
  {
    id: "coding-class",
    title: "Weekend Coding Class",
    description:
      "Teach basic web skills to high school students and help them build their first page.",
    category: "Education",
    date: "Sun, Nov 22",
    time: "10:00 AM – 1:00 PM",
    location: "Riverside Community Center",
    attendees: 42,
    spots: 8,
    icon: Users,
    gradient: "from-[#2f4a4a] via-[#3f6a63] to-[#79a89b]",
  },
  {
    id: "food-drive",
    title: "Community Food Drive",
    description:
      "Sort and pack donated groceries for families facing food insecurity this season.",
    category: "Food Support",
    date: "Sat, Dec 05",
    time: "9:00 AM – 2:00 PM",
    location: "Downtown Food Bank",
    attendees: 126,
    spots: 24,
    icon: Sprout,
    gradient: "from-[#5a4a2f] via-[#7a6840] to-[#b39a63]",
  },
];

const recentEvents: Event[] = [
  {
    id: "tree-planting",
    title: "Tree Planting Day",
    description:
      "Volunteers planted 340 native saplings across the city park and its walking trails.",
    category: "Environment",
    date: "Sat, Oct 24",
    time: "8:00 AM – 12:00 PM",
    location: "Hillview Park",
    attendees: 210,
    spots: 0,
    icon: Sprout,
    gradient: "from-[#3f5a35] via-[#5b7a4a] to-[#8aa86f]",
  },
  {
    id: "winter-clothing",
    title: "Winter Clothing Collection",
    description:
      "Collected and distributed over 1,200 coats, blankets, and warm layers to shelters.",
    category: "Community Care",
    date: "Sun, Oct 18",
    time: "11:00 AM – 4:00 PM",
    location: "Old Town Hall",
    attendees: 96,
    spots: 0,
    icon: Users,
    gradient: "from-[#43395a] via-[#5f5480] to-[#9487b8]",
  },
  {
    id: "senior-visits",
    title: "Senior Companion Visits",
    description:
      "An afternoon of reading, games, and conversation at three local care homes.",
    category: "Health",
    date: "Sat, Oct 10",
    time: "2:00 PM – 5:00 PM",
    location: "Meadow Care Homes",
    attendees: 64,
    spots: 0,
    icon: Users,
    gradient: "from-[#4a2f3f] via-[#714a5f] to-[#b8849c]",
  },
];

const events = [...upcomingEvents, ...recentEvents];

const RecentUpcoming = () => {

  return (
    <section id="opportunities" className="bg-[#F9F9F2] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#647F52]">
              Events
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#26351f] sm:text-4xl lg:text-5xl">
              Recent &amp; upcoming events
            </h2>
            <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
              Join an event that is coming up, or see the impact our volunteers
              created in the last few weeks.
            </p>
          </div>

          <Button
            variant="outline"
            className="h-11 self-start rounded-full border-[#42512C]/20 bg-white px-6 font-semibold text-[#42512C] hover:bg-[#42512C] hover:text-white lg:self-auto"
          >
            View all events
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const Icon = event.icon;
            const isPast = event.spots === 0;

            return (
              <article
                key={event.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
              >
                <div
                  className={`relative flex h-40 items-start justify-between bg-gradient-to-br p-5 ${event.gradient}`}
                >
                  <Icon
                    aria-hidden="true"
                    className="absolute -bottom-4 right-3 h-28 w-28 text-white/20"
                  />
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#42512C]">
                    {event.category}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      isPast
                        ? "bg-black/25 text-white"
                        : "bg-lime-300 text-[#1C2012]"
                    }`}
                  >
                    {isPast ? "Completed" : "Open"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-[#26351f]">
                      {event.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/60">
                      {event.description}
                    </p>
                  </div>

                  <dl className="flex flex-col gap-2 text-sm text-black/60">
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-[#647F52]"
                      />
                      <dt className="sr-only">Date</dt>
                      <dd>{event.date}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-[#647F52]"
                      />
                      <dt className="sr-only">Time</dt>
                      <dd>{event.time}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-[#647F52]"
                      />
                      <dt className="sr-only">Location</dt>
                      <dd className="truncate">{event.location}</dd>
                    </div>
                  </dl>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/5 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/45">
                      {isPast
                        ? `${event.attendees} volunteers joined`
                        : `${event.spots} spots left`}
                    </p>
                    <Link
                      href={`/events/${event.id}`}
                      className="flex items-center gap-1.5 text-sm font-bold text-[#42512C] transition-colors hover:text-[#1C2012]"
                    >
                      View details
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentUpcoming;
