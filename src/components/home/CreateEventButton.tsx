"use client";

import { Button } from "../ui/button";
import React from 'react';
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
    <div>
      <Button 
        onClick={handleCreateEventClick}
        variant="outline" 
        className="h-12 rounded-full border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/20 hover:text-white sm:text-base"
      >
        Create an Event
      </Button>
    </div>
  );
};

export default CreateEventButton;
