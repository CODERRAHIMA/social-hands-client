import EventCard from "@/components/shared/EventCard";
import { IEvent } from "@/lib/eventType";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default async function RecentUpcoming() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recent-events`);
  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#647F52] dark:text-lime-300">
          🔥Upcoming Initiatives
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#26351F] dark:text-stone-100 sm:text-4xl lg:text-5xl">
          Recent Upcoming Events
        </h2>
        <p className="mt-5 text-base leading-7 text-slate-600 dark:text-stone-400 sm:text-md">
          Latest 6 community drives scheduled in your city. Get involved today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
        {data.map((event: IEvent) => (
          <div key={event._id} className="h-full">
            <EventCard event={event} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/upcoming-events" className="group">
          <Button className="cursor-pointer h-12 rounded-full border border-[#42512C]/20 bg-[#42512C] px-7 text-sm font-bold text-white shadow-lg shadow-[#42512C]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#344222] hover:shadow-xl hover:shadow-[#42512C]/20 dark:border-lime-300/20 dark:bg-lime-300 dark:text-[#172313] dark:hover:bg-lime-200 sm:text-base">
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
