"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { IEvent } from "@/lib/eventType";
import { authClient } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";

const JoinEvent = ({ event }: { event: IEvent }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const pathname = usePathname();

  const [isJoined, setIsJoined] = useState(false);

  const handleJoinEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!user) return router.push(`/sign-in?redirectTo=${pathname}`);

    try {
      const res = await fetch("http://localhost:8000/joined-events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user?.name, email: user?.email, userimage: user?.image, ...event }),
      });

      const responseData = await res.json();
      if (res.ok) {
        setIsJoined(responseData.joined);
        toast.success(
          responseData.joined
            ? "You've joined this event."
            : "You've left this event.",
        );
      } else {
        toast.error("Unable to update your event registration. Please try again.");
      }
    } catch {
      toast.error("Unable to update your event registration. Please try again.");
    }
  };

  return (
    <Button onClick={handleJoinEvent} className={`flex-1 sm:flex-none ${isJoined ? "bg-teal-700" : "bg-teal-600"}`}>
      <Heart size={16} />
      {isJoined ? "Joined (click to leave)" : "Join Event"}
    </Button>
  );
};

export default JoinEvent;
