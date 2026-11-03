import React from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { IEvent } from "@/lib/eventType";

const JoinEvent = ({ event }: { event: IEvent }) => {
  const handleJoinEvent = () => {
    console.log(`Joining event: ${event.title}`);
  }

  return (
    <Button onClick={handleJoinEvent} className="flex-1 sm:flex-none bg-teal-600 hover:bg-teal-700">
      <Heart size={16} />
      Join Event
    </Button>
  );
};

export default JoinEvent;
