
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const BannerPage = () => {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#26351f] text-white">
      <Image
        src="/bannerImg.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#172313]/85 via-[#172313]/55 to-[#172313]/10"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-36 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-lg shadow-black/10 backdrop-blur-md sm:text-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(190,242,100,0.8)]"
            />
            <span>Community-Driven Social Development Platform</span>
          </div>

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-lime-200 sm:text-base">
            Small acts. Stronger communities.
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Lend a hand.
            <br />
            Change a life.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
            Bring your time, skills, and heart to the causes that make our
            communities stronger.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Button className="bg-[#647F52] hover:bg-[#42512C]">Explore Upcoming Events</Button>
            <Button variant="outline" className="py-3 px-4">Create an Event</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
