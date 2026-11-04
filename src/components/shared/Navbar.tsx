"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  ChevronDown,
  CircleCheck,
  LogIn,
  LogOut,
  Moon,
  PlusCircle,
  Settings,
} from "lucide-react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";


const Navbar = () => {

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignout = () => {
    authClient.signOut();
    redirect("/");
  };

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
          href="/upcoming-events"
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

          {user ? (
            <Popover>
              <PopoverTrigger
                nativeButton={false}
                title={user?.name}
                render={
                  <div className="flex items-center gap-3 rounded-full bg-white/70 border border-black/20 p-1.5 pr-3 shadow-sm transition-all duration-200 hover:bg-white hover:border-gray-400/70 hover:shadow-md cursor-pointer group">
                    <div className="relative">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={user?.image || ""}
                          alt={user?.name || "User"}
                        />
                        <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <AvatarBadge className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500" />
                    </div>

                    <ChevronDown className="h-4 w-4 text-[#42512C] hover:text-[#1C2012] transition-transform duration-200 group-hover:text-gray-600 group-hover:translate-y-0.5" />
                  </div>
                }
              ></PopoverTrigger>
              <PopoverContent
                align="end"
                sideOffset={12}
                className="w-[220px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 shadow-xl shadow-gray-900/10"
              >
                {/* User Info */}
                <PopoverHeader className="border-b border-gray-100 px-4 py-2 text-left">
                  <PopoverTitle className="text-sm font-bold text-gray-900">
                    {user?.name}
                  </PopoverTitle>

                  <PopoverDescription className="mt-1 text-xs text-gray-500">
                    {user?.email}
                  </PopoverDescription>
                </PopoverHeader>

                {/* Menu Items */}
                <div className="px-2">
                  <Link
                    href="/add-event"
                    className="flex items-center gap-3 rounded-xl py-2 px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-600"
                  >
                    <PlusCircle className="h-[18px] w-[18px] text-teal-500" />
                    Create Event
                  </Link>

                  <Link
                    href="/manage-events"
                    className="flex items-center gap-3 rounded-xl py-2 px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-violet-50 hover:text-violet-600"
                  >
                    <Settings className="h-[18px] w-[18px] text-violet-500" />
                    Manage Events
                  </Link>

                  <Link
                    href="/joined-events"
                    className="flex items-center gap-3 rounded-xl py-2 px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    <CircleCheck className="h-[18px] w-[18px] text-emerald-500" />
                    Joined Events
                  </Link>
                </div>

                {/* Logout */}
                <div className="border-t border-gray-100 p-2">
                  <button
                    onClick={handleSignout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
                  >
                    <LogOut className="h-[18px] w-[18px]" />
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Link href="/sign-in">
              <Button className="h-10 rounded-full bg-green-700 px-5 font-semibold text-white shadow-md shadow-green-900/20 hover:bg-green-800">
                <LogIn size={18} aria-hidden="true" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
