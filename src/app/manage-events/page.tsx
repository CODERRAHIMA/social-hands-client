import Link from "next/link";
import { CalendarCheck2, ClipboardList, Plus } from "lucide-react";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { IEvent } from "@/lib/eventType";
import MyEventCard from "@/components/shared/MyEventCard";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

const ManageEventsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const token = await getTokenFromServer();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/manage-events/${user?.email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const events = await res.json();

  return (
    <div className="mx-auto mt-20 max-w-7xl px-3 py-8 min-[380px]:px-4 sm:px-6 sm:py-16 lg:py-20">
      <header className="mb-7 flex flex-col gap-5 border-b border-[#42512C]/10 pb-6 dark:border-white/10 sm:mb-9 sm:gap-6 sm:pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#42512C]/10 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#647F52] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-lime-300">
            <ClipboardList className="h-4 w-4" />
            YOUR EVENTS
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#26351F] dark:text-stone-100 sm:text-4xl">
            Manage Events
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-stone-400 sm:text-base">
            Keep track of the events you&apos;ve created, all in one place.
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-2 sm:w-auto">
          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#42512C]/10 bg-white/80 px-4 py-3 text-sm font-medium text-[#42512C] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-stone-200">
            <CalendarCheck2 className="h-4 w-4 text-[#647F52] dark:text-lime-300" />
            <span>
              {events.length} {events.length === 1 ? "event" : "events"}
            </span>
          </div>
          <Link
            href="/add-event"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#42512C] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#344222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#647F52] dark:bg-lime-300 dark:text-[#172313] dark:hover:bg-lime-200 dark:focus-visible:outline-lime-300 min-[380px]:px-4 min-[380px]:text-sm sm:flex-none sm:px-5"
          >
            <Plus className="h-4 w-4" />
            Create an event
          </Link>
        </div>
      </header>

      {events.length > 0 ? (
        <div className="grid gap-4">
          {events.map((event: IEvent) => (
            <div key={event._id} className="h-full">
              <MyEventCard event={event} showManagementActions />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-[#42512C]/20 bg-white/60 px-4 py-12 text-center dark:border-white/15 dark:bg-white/[0.03] sm:px-6 sm:py-16">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#42512C]/5 text-[#647F52] dark:bg-lime-300/10 dark:text-lime-300">
            <ClipboardList className="h-7 w-7" />
          </div>
          <h2 className="text-lg font-semibold text-[#26351F] dark:text-stone-100">
            No events to manage yet
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-stone-400">
            Create an event and it will appear here for you to manage.
          </p>
          <Link
            href="/add-event"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#42512C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#344222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#647F52] dark:bg-lime-300 dark:text-[#172313] dark:hover:bg-lime-200 dark:focus-visible:outline-lime-300"
          >
            <Plus className="h-4 w-4" />
            Create an event
          </Link>
        </div>
      )}
    </div>
  );
};

export default ManageEventsPage;
