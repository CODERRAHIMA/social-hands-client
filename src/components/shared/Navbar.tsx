"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, LogIn, Moon } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[28px] border px-4 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-black/10 bg-[#F9F9F2]/95 py-2 shadow-xl shadow-black/15"
            : "border-white/50 bg-[#F9F9F2]/80 py-3 shadow-lg shadow-black/5"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-full outline-none focus-visible:ring-3 focus-visible:ring-[#647F52]/40"
        >
          <Image
            src="/shlogo.jpg"
            alt="SocialHands logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-xl font-extrabold leading-5 tracking-tight text-[#42512C]">
            SocialHands
          </span>
        </Link>

        {/* Upcoming Events */}
        <Link
          href="/events"
          className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#42512C]/80 transition-colors outline-none hover:bg-[#42512C]/10 hover:text-[#1C2012] focus-visible:ring-3 focus-visible:ring-[#647F52]/40 md:flex"
        >
          <CalendarDays aria-hidden="true" size={19} />
          Upcoming Events
        </Link>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle dark mode"
            className="h-10 w-10 rounded-full border-black/10 bg-white/70 text-[#42512C] shadow-sm hover:bg-white hover:text-[#1C2012]"
          >
            <Moon size={20} aria-hidden="true" />
          </Button>

          <Button className="h-10 rounded-full bg-green-700 px-5 font-semibold text-white shadow-md shadow-green-900/20 hover:bg-green-800">
            <LogIn size={18} aria-hidden="true" />
            <span className="hidden sm:inline">Login</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
