import EventCard from "@/components/shared/EventCard";
import { IEvent } from "@/lib/eventType";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default async function RecentUpcoming() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recent-events`);
  const data = await res.json();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-1 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#647F52] dark:text-lime-300 sm:mb-4 sm:text-sm sm:tracking-[0.24em]">
          🔥Upcoming Initiatives
        </p>
        <h2 className="text-2xl font-extrabold tracking-tight text-[#26351F] dark:text-stone-100 sm:text-4xl lg:text-5xl">
          Recent Upcoming Events
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-stone-400 sm:mt-5 sm:text-base sm:leading-7">
          Latest 6 community drives scheduled in your city. Get involved today.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {data.map((event: IEvent) => (
          <div key={event._id} className="h-full">
            <EventCard event={event} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center sm:mt-10">
        <Link href="/upcoming-events" className="group w-full sm:w-auto">
          <Button className="cursor-pointer h-11 w-full rounded-full border border-[#42512C]/20 bg-[#42512C] px-5 text-sm font-bold text-white shadow-lg shadow-[#42512C]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#344222] hover:shadow-xl hover:shadow-[#42512C]/20 dark:border-lime-300/20 dark:bg-lime-300 dark:text-[#172313] dark:hover:bg-lime-200 sm:h-12 sm:w-auto sm:px-7 sm:text-base">
            View All Upcoming Events
            <ArrowRight
              aria-hidden="true"
              className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}
