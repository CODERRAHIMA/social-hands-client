import React from "react";
import EventDetailPage from "./EventDetail";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/upcoming-events/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    return <div>Event not found</div>;
  }

  const event = await res.json();

  return <EventDetailPage event={event} />;
};

export default page;
