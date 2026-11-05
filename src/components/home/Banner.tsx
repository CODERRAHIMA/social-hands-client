import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout } from "lucide-react";
import Link from "next/link";
import CreateEventButton from "./CreateEventButton";

const BannerPage = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#1d2919] text-white"
    >
      <Image
        src="/bannerImg.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Main Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r 
        from-[#10190f]/85 via-[#10190f]/55 to-[#10190f]/10
        dark:from-[#10190f]/90 dark:via-[#10190f]/70 dark:to-[#10190f]/25"
      />

      {/* Bottom Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t
          from-[#26351f]/45 via-transparent to-[#26351f]/10
          dark:from-[#10190f]/65 dark:via-transparent dark:to-[#10190f]/25"
      />

      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/4 h-72 w-72 rounded-full
      bg-lime-300/15 blur-3xl
      dark:bg-lime-200/10
        sm:right-[8%] sm:h-96 sm:w-96"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-36 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold tracking-wide text-white shadow-lg shadow-black/10 backdrop-blur-xl sm:text-sm">
            <Sprout size={16} aria-hidden="true" className="text-lime-200" />
            <span>Community-Driven Social Development Platform</span>
          </div>

          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-lime-200 sm:text-sm">
            <span aria-hidden="true" className="h-px w-8 bg-lime-200" />
            Together, we can make a difference
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Lend a hand.
            <br />
            <span className="text-lime-200">Change a life.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Bring your time, skills, and heart to the causes that make our
            communities stronger.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/upcoming-events">
              <Button className="h-12 rounded-full bg-lime-200 px-6 text-sm font-bold text-[#1d2919] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-lime-100 sm:text-base">
                Explore Upcoming Events
                <ArrowRight aria-hidden="true" className="ml-1 size-4" />
              </Button>
            </Link>
            
            <CreateEventButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
