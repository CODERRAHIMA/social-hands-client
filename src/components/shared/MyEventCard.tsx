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
    <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-[#E5E9DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#42512C]/10 md:flex-row">
      <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-auto md:min-h-50 md:w-86">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 344px"
          className="p-4 rounded-3xl object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-5 px-4 py-5 sm:px-5 sm:py-6 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#42512C]/20 bg-[#42512C]/5 px-3 py-1.5 font-semibold text-[#42512C]">
              <CalendarDays className="h-4 w-4" />
              {new Date(event.eventDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600">
              <Tag className="h-4 w-4 text-[#647F52]" />
              {event.eventType}
            </span>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#26351F]">
              {event.title}
            </h2>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
              {event.description}
            </p>
          </div>

          <p className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 shrink-0 text-[#647F52]" />
            <span className="truncate">{event.location}</span>
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-gray-100 pt-4 sm:flex-row sm:justify-end lg:w-36 lg:shrink-0 lg:flex-col lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
          <Link
            href={`/upcoming-events/${event._id}`}
            className="inline-flex min-h-11 w-full items-center justify-center gap-0.5 rounded-xl bg-[#42512C] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#344222] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#647F52] sm:w-auto lg:w-full"
          >
            View event
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          {showManagementActions && (
            <>
              <EditEventDialog
                key={event._id}
                event={event}
                triggerClassName="h-11 w-full justify-center rounded-xl border-[#42512C]/20 bg-white px-4 py-1 sm:py-0 font-semibold text-[#42512C] shadow-sm transition-all hover:border-[#42512C]/30 hover:bg-[#42512C]/5 hover:text-[#344222] focus-visible:ring-[#647F52]/30 sm:w-auto lg:w-full"
              />
              <DeleteEventDialog
                id={event._id}
                triggerClassName="h-11 w-full justify-center rounded-xl border-red-200 bg-white px-4 py-1 sm:py-0 font-semibold text-red-700 shadow-sm transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-800 focus-visible:border-red-300 focus-visible:ring-red-500/30 sm:w-auto lg:w-full"
              />
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default MyEventCard;
