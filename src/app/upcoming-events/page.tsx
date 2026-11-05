import EventCard from '@/components/shared/EventCard';
import { IEvent } from '@/lib/eventType';
import React from 'react';

export default async function UpcomingEventsPage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upcoming-events`);
    const upcomingEvents = await res.json();

    return (
        <div className='mx-auto max-w-7xl py-10'>
            <h1 className='mt-28 text-center text-3xl font-bold text-[#26351F] dark:text-stone-100'>
                Upcoming Events
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4'>
                {upcomingEvents.map((event: IEvent) => (
                    <div key={event._id} className="h-full">
                        <EventCard event={event} />
                    </div>
                ))}
            </div>
        </div>
    );
}
