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
import { EditEventDialog } from "@/components/event/EditEventDialog";
import { DeleteEventDialog } from "@/components/event/DeleteEventDialog";
import { IEvent } from "@/lib/eventType";
import JoinEvent from "./JoinEvent";

const EventDetailPage = ({ event }: { event: IEvent }) => {
  const formattedDate = new Date(event.eventDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-35">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/upcoming-events"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600 transition mb-8"
        >
          <ArrowLeft size={16} />
          Back to Upcoming Events
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          {/* Event Banner */}
          <div className="relative h-64 md:h-80">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Event Type */}
            <div className="absolute top-5 left-5">
              <Badge className="bg-white text-teal-700 hover:bg-white rounded-full px-4 py-2 gap-2">
                <Heart size={13} />
                {event.eventType}
              </Badge>
            </div>

            {/* Event Title */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-2xl md:text-4xl font-bold mb-3">
                {event.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} />
                  {event.location}
                </span>

                <span className="flex items-center gap-1.5">
                  <CalendarDays size={15} />
                  {formattedDate}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-8">
            {/* Join Event Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4 mb-7">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 text-teal-600 p-3 rounded-lg">
                  <Users size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-slate-800">
                    Be Part of This Initiative
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Join us and make a positive difference.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white shrink-0"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                >
                  <Share2 size={17} />
                </Button>

                <JoinEvent event={event} />
              </div>
            </div>

            {/* Details and Sidebar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {/* Left Content */}
              <div className="md:col-span-2">
                <h2 className="text-lg font-bold text-slate-800 mb-3">
                  About This Initiative
                </h2>

                <p className="text-sm text-slate-600 leading-7 mb-7">
                  {event.description}
                </p>

                {/* Event Information */}
                <div className="border-t border-slate-200 pt-5">
                  <h3 className="text-sm font-bold text-slate-700 mb-4">
                    EVENT INFORMATION
                  </h3>

                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CalendarDays
                        size={16}
                        className="text-teal-500 mt-0.5 shrink-0"
                      />
                      Event Date: {formattedDate}
                    </li>

                    <li className="flex items-start gap-2">
                      <MapPin
                        size={16}
                        className="text-teal-500 mt-0.5 shrink-0"
                      />
                      Location: {event.location}
                    </li>

                    <li className="flex items-start gap-2">
                      <Heart
                        size={16}
                        className="text-teal-500 mt-0.5 shrink-0"
                      />
                      Event Type: {event.eventType}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-5">
                {/* Event Details */}
                <Card className="shadow-none border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Event Details
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-teal-50 text-teal-600 p-2.5 rounded-full">
                        <CalendarDays size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">Date</p>
                        <p className="text-sm font-semibold text-slate-700">
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
                      <div className="bg-teal-50 text-teal-600 p-2.5 rounded-full">
                        <MapPin size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">Location</p>
                        <p className="text-sm font-semibold text-slate-700">
                          {event.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-teal-50 text-teal-600 p-2.5 rounded-full">
                        <ShieldCheck size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">Category</p>
                        <p className="text-sm font-semibold text-slate-700 capitalize">
                          {event.eventType}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Reminder */}
                <Card className="bg-teal-50 border-teal-100 shadow-none">
                  <CardContent className="pt-6">
                    <h3 className="text-sm font-bold text-teal-800 mb-2">
                      Make a Difference!
                    </h3>

                    <p className="text-xs text-teal-700 leading-6">
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
