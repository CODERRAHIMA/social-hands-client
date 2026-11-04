import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { IEvent } from "@/lib/eventType";
import { authClient } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";

const JoinEvent = ({ event }: { event: IEvent }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();
  const pathname = usePathname();

  const handleJoinEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!user) {
      router.push(`/sign-in?redirectTo=${pathname}`);
      return;
    }

    const data = {
      username: user?.name,
      email: user?.email,
      userimage: user?.image,
      ...event,
    };

    try {
      const res = await fetch("http://localhost:8000/joined-events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok) {
        alert("Successfully joined the event!");
      } else {
        alert(responseData.message || "Failed to join event");
      }
    } catch (error) {
      console.error("Error joining event:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Button
      onClick={handleJoinEvent}
      className="flex-1 sm:flex-none bg-teal-600 hover:bg-teal-700"
    >
      <Heart size={16} />
      Join Event
    </Button>
  );
};

export default JoinEvent;
