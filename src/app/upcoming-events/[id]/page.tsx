import NotFound from "@/app/not-found";
import EventDetailPage from "@/components/event/EventDetail";
import React from "react";


const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/upcoming-events/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  const event = await res.json();

  return <EventDetailPage event={event} />;
};

export default page;
