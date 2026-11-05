import { CalendarCheck2, HandHeart } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { IEvent } from "@/lib/eventType";
import MyEventCard from "@/components/shared/MyEventCard";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

const JoinedEventsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const token = await getTokenFromServer();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/joined-events/${user?.email}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const events = await res.json();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-20 mt-20">
      <header className="mb-9 flex flex-col gap-6 border-b border-[#42512C]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#42512C]/10 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#647F52] shadow-sm">
            <HandHeart className="h-4 w-4" />
            YOUR COMMUNITY
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#26351F] sm:text-4xl">
            Joined Events
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            The events you&apos;re part of, all in one place.
          </p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#42512C]/10 bg-white/80 px-4 py-3 text-sm font-medium text-[#42512C] shadow-sm">
          <CalendarCheck2 className="h-4 w-4 text-[#647F52]" />
          <span>
            {events.length} {events.length === 1 ? "event" : "events"}
          </span>
        </div>
      </header>

      {events.length > 0 ? (
        <div className="grid gap-4">
          {events.map((event: IEvent) => (
            <div key={event._id} className="h-full">
              <MyEventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-[#42512C]/20 bg-white/60 px-6 py-16 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#42512C]/5 text-[#647F52]">
            <CalendarCheck2 className="h-7 w-7" />
          </div>
          <h2 className="text-lg font-semibold text-[#26351F]">
            No joined events yet
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            When you join an event, it will show up here.
          </p>
        </div>
      )}
    </div>
  );
};

export default JoinedEventsPage;
