"use client";

import { DeleteEventDialog } from "@/components/event/DeleteEventDialog";
import { EditEventDialog } from "@/components/event/EditEventDialog";
import { IEvent } from "@/lib/eventType";
import { ArrowRight, CalendarDays, MapPin, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MyEventCard = ({
  event,
  showManagementActions = false,
}: {
  event: IEvent;
  showManagementActions?: boolean;
}) => {
  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-[#E5E9DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#42512C]/10 dark:border-white/10 dark:bg-[#142414]">
      <div className="flex min-w-0 flex-col gap-4 p-4 sm:gap-5 sm:p-5 md:flex-row md:items-center md:gap-6">
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl md:h-48 md:w-72 lg:w-80">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4 py-1">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-stone-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#42512C]/20 bg-[#42512C]/5 px-3 py-1.5 font-semibold text-[#42512C] dark:border-white/10 dark:bg-white/5 dark:text-lime-200">
              <CalendarDays className="h-4 w-4" />
              {new Date(event.eventDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-stone-300">
              <Tag className="h-4 w-4 text-[#647F52] dark:text-lime-300" />
              {event.eventType}
            </span>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#26351F] dark:text-stone-100">
              {event.title}
            </h2>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500 dark:text-stone-400">
              {event.description}
            </p>
          </div>

          <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-stone-300">
            <MapPin className="h-4 w-4 shrink-0 text-[#647F52] dark:text-lime-300" />
            <span className="truncate">{event.location}</span>
          </p>
        </div>
      </div>

      <footer className="flex flex-col gap-2 border-t border-gray-100 px-4 py-3 dark:border-white/10 sm:flex-row sm:items-center sm:justify-end sm:gap-3 sm:px-5">
        <Link
          href={`/upcoming-events/${event._id}`}
          className="inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-xl bg-[#42512C] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#344222] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#647F52] dark:bg-lime-300 dark:text-[#172313] dark:hover:bg-lime-200 dark:focus-visible:outline-lime-300 sm:w-40"
        >
          View details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        {showManagementActions && (
          <>
            <div className="w-full sm:w-28">
              <EditEventDialog key={event._id} event={event} />
            </div>
            <div className="w-full sm:w-28">
              <DeleteEventDialog id={event._id} />
            </div>
          </>
        )}
      </footer>
    </article>
  );
};

export default MyEventCard;
