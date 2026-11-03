import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { IEvent } from "@/lib/eventType";
import { authClient } from "@/lib/auth-client";

const JoinEvent = ({ event }: { event: IEvent }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  
  const handleJoinEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const data = {
        username: user?.name,
        email: user?.email,
        userimage: user?.image,
        ...event
    }
    console.log("Joining event with data:", data);

    const res = await fetch("http://localhost:8000/joined-events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("Join event response:", result);
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
