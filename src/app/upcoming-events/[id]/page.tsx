import NotFound from "@/app/not-found";
import EventDetailPage from "@/components/event/EventDetail";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upcoming-events/${id}`, {
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
