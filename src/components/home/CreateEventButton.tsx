"use client";

import { Button } from "../ui/button";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const CreateEventButton = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleCreateEventClick = () => {
    if (user) {
      router.push("/add-event");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="min-w-0 flex-1 sm:flex-none">
      <Button
        onClick={handleCreateEventClick}
        variant="outline"
        className="h-11 w-full whitespace-nowrap rounded-full border-white/35 bg-white/10 px-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/20 hover:text-white sm:h-12 sm:w-auto sm:px-6 sm:text-base"
      >
        Create an Event
      </Button>
    </div>
  );
};

export default CreateEventButton;
