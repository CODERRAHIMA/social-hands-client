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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/joined-events`, {
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
    <Button
      onClick={handleJoinEvent}
      className={`cursor-pointer h-11 flex-1 rounded-xl px-5 font-semibold shadow-md transition-all hover:-translate-y-0.5 focus-visible:ring-offset-2 sm:flex-none ${
        isJoined
          ? "bg-[#647F52] text-white shadow-[#42512C]/15 hover:bg-[#526942] dark:bg-[#263b21] dark:text-lime-200 dark:hover:bg-[#31492b]"
          : "bg-[#42512C] text-white shadow-[#42512C]/20 hover:bg-[#344222] dark:bg-lime-300 dark:text-[#172313] dark:shadow-lime-300/10 dark:hover:bg-lime-200"
      }`}
    >
      <Heart size={16} aria-hidden="true" />
      {isJoined ? "Joined (click to leave)" : "Join Event"}
    </Button>
  );
};

export default JoinEvent;
