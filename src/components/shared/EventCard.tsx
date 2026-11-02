import { ArrowRight, CalendarDays, MapPin, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Event {
  _id: string;
  title: string;
  eventType: string;
  eventDate: string;
  location: string;
  image: string;
  description: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E9DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#42512C]/10">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Event Type */}
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/50 bg-white/95 px-3 py-1.5 text-xs font-bold capitalize tracking-wide text-[#42512C] shadow-sm backdrop-blur-sm">
          <Tag className="h-3.5 w-3.5" />
          {event.eventType}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex w-fit items-center gap-2 rounded-lg border border-[#42512C]/30 bg-[#42512C]/5 px-3 py-2 text-[13px] font-bold text-[#42512C]">
          <CalendarDays className="h-4 w-4" />
          {new Date(event.eventDate).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div>
          <h3 className="text-lg font-bold tracking-tight text-[#26351F] transition-colors group-hover:text-[#647F52]">
            {event.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
            {event.description}
          </p>
        </div>

        {/* Event Information */}
        <div className="flex items-center gap-2.5 text-sm text-gray-600">
          <MapPin className="h-4 w-4 shrink-0 text-[#647F52]" />
          <dt className="sr-only">Location</dt>
          <dd className="truncate">{event.location}</dd>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-gray-100 pt-4">
          <Link
            href={`/events/${event._id}`}
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#42512C] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#344222] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#647F52]"
          >
            View event
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
