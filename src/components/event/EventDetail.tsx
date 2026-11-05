"use client";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Users,
  Share2,
  Heart,
  ShieldCheck,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IEvent } from "@/lib/eventType";
import JoinEvent from "./JoinEvent";
import toast from "react-hot-toast";

const EventDetailPage = ({ event }: { event: IEvent }) => {
  const formattedDate = new Date(event.eventDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F6F1] via-[#fbfbf8] to-white px-4 py-12 dark:from-[#071E07] dark:via-[#0b190b] dark:to-[#0a140a] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/upcoming-events"
          className="mb-6 mt-22 inline-flex items-center gap-2 rounded-full border border-[#647F52]/15 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:border-[#647F52]/35 hover:text-[#42512C] dark:border-white/10 dark:bg-white/5 dark:text-stone-300 dark:hover:border-lime-300/30 dark:hover:text-lime-200 sm:mb-8"
        >
          <ArrowLeft size={16} />
          Back to Upcoming Events
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white shadow-[0_30px_90px_-35px_rgba(27,39,20,0.3)] dark:border-white/10 dark:bg-[#102110] dark:shadow-black/30">
          {/* Event Banner */}
          <div className="relative h-72 sm:h-80 md:h-[26rem]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10190f]/90 via-[#10190f]/25 to-[#10190f]/5" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#10190f]/35 via-transparent to-transparent" />

            {/* Event Type */}
            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
              <Badge className="gap-2 rounded-full border border-white/30 bg-white/95 px-4 py-2 text-[#42512C] shadow-lg shadow-black/10 hover:bg-white dark:border-lime-200/20 dark:bg-[#172615]/90 dark:text-lime-200 dark:hover:bg-[#172615]">
                <Heart size={13} aria-hidden="true" />
                {event.eventType}
              </Badge>
            </div>

            {/* Event Title */}
            <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <h1 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {event.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-100">
                <span className="flex items-center gap-2">
                  <MapPin size={15} />
                  {event.location}
                </span>

                <span className="flex items-center gap-2">
                  <CalendarDays size={15} />
                  {formattedDate}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-7 md:p-9">
            {/* Join Event Bar */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#647F52]/15 bg-gradient-to-r from-[#f3f6ed] to-[#f8faf5] p-4 dark:border-white/10 dark:from-[#172617] dark:to-[#142214] sm:flex-row sm:items-center sm:p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#647F52]/10 p-3 text-[#42512C] dark:bg-lime-300/10 dark:text-lime-300">
                  <Users size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-stone-100">
                    Be Part of This Initiative
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-stone-400">
                    Join us and make a positive difference.
                  </p>
                </div>
              </div>

              <div className="flex w-full items-center gap-3 sm:w-auto">
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 border-stone-200 bg-white text-slate-700 hover:bg-stone-50 dark:border-white/15 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                      .then(() => toast.success("Event link copied."))
                      .catch(() => toast.error("Unable to copy the event link."));
                  }}
                >
                  <Share2 size={17} />
                </Button>

                <JoinEvent event={event} />
              </div>
            </div>

            {/* Details and Sidebar */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-9">
              {/* Left Content */}
              <div className="md:col-span-2">
                <h2 className="mb-3 text-xl font-extrabold tracking-tight text-slate-900 dark:text-stone-100">
                  About This Initiative
                </h2>

                <p className="mb-8 text-sm leading-7 text-slate-600 dark:text-stone-300 sm:text-base">
                  {event.description}
                </p>

                {/* Event Information */}
                <div className="border-t border-stone-200 pt-6 dark:border-white/10">
                  <h3 className="mb-4 text-xs font-bold tracking-[0.16em] text-[#647F52] dark:text-lime-300">
                    EVENT INFORMATION
                  </h3>

                  <ul className="space-y-3.5 text-sm text-slate-600 dark:text-stone-300">
                    <li className="flex items-start gap-2">
                      <CalendarDays
                        size={16}
                        className="mt-0.5 shrink-0 text-[#647F52] dark:text-lime-300"
                      />
                      Event Date: {formattedDate}
                    </li>

                    <li className="flex items-start gap-2">
                      <MapPin
                        size={16}
                        className="mt-0.5 shrink-0 text-[#647F52] dark:text-lime-300"
                      />
                      Location: {event.location}
                    </li>

                    <li className="flex items-start gap-2">
                      <Heart
                        size={16}
                        className="mt-0.5 shrink-0 text-[#647F52] dark:text-lime-300"
                      />
                      Event Type: {event.eventType}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-5">
                {/* Event Details */}
                <Card className="rounded-2xl border-stone-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#142414]">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xs font-bold uppercase tracking-[0.14em] text-[#647F52] dark:text-lime-300">
                      Event Details
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#647F52]/10 p-2.5 text-[#42512C] dark:bg-lime-300/10 dark:text-lime-300">
                        <CalendarDays size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500 dark:text-stone-400">Date</p>
                        <p className="text-sm font-semibold text-slate-800 dark:text-stone-100">
                          {new Date(event.eventDate).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#647F52]/10 p-2.5 text-[#42512C] dark:bg-lime-300/10 dark:text-lime-300">
                        <MapPin size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500 dark:text-stone-400">Location</p>
                        <p className="text-sm font-semibold text-slate-800 dark:text-stone-100">
                          {event.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#647F52]/10 p-2.5 text-[#42512C] dark:bg-lime-300/10 dark:text-lime-300">
                        <ShieldCheck size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500 dark:text-stone-400">Category</p>
                        <p className="text-sm font-semibold capitalize text-slate-800 dark:text-stone-100">
                          {event.eventType}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Reminder */}
                <Card className="rounded-2xl border-[#647F52]/15 bg-gradient-to-br from-[#eef4e8] to-[#f7f9f2] shadow-none dark:border-lime-300/15 dark:from-[#1b2c19] dark:to-[#142414]">
                  <CardContent className="pt-6">
                    <h3 className="mb-2 text-sm font-bold text-[#42512C] dark:text-lime-200">
                      Make a Difference!
                    </h3>

                    <p className="text-xs leading-6 text-[#526546] dark:text-stone-300">
                      Your participation can help create a positive impact in
                      the community. Join this initiative today!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
