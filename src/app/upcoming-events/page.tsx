import EventCard from '@/components/shared/EventCard';
import { IEvent } from '@/lib/eventType';
import React from 'react';

export default async function UpcomingEventsPage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upcoming-events`, {
        cache: "no-store"
    });
    const upcomingEvents = await res.json();

    return (
        <div className='mx-auto max-w-7xl px-3 py-8 min-[380px]:px-4 sm:py-10'>
            <h1 className='mt-24 text-center text-2xl font-bold text-[#26351F] dark:text-stone-100 sm:mt-28 sm:text-3xl'>
                Upcoming Events
            </h1>
            <div className='mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
                {upcomingEvents.map((event: IEvent) => (
                    <div key={event._id} className="h-full">
                        <EventCard event={event} />
                    </div>
                ))}
            </div>
        </div>
    );
}
