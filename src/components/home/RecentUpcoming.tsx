import EventCard from "@/components/shared/EventCard";
import { IEvent } from "@/lib/eventType";

export default async function RecentUpcoming() {
  const res = await fetch("http://localhost:8000/recent-events");
  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mt-10">Recent Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
        {data.map((event: IEvent) => (
          <div key={event._id} className="h-full">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
