"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
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
  Sun,
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
import { Spinner } from "../ui/spinner";
import toast from "react-hot-toast";

const themeChangeEvent = "navbar-theme-change";

const subscribeToTheme = (onChange: () => void) => {
  window.addEventListener("storage", onChange);
  window.addEventListener(themeChangeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(themeChangeEvent, onChange);
  };
};

const getThemeSnapshot = () =>
  window.localStorage.getItem("navbar-theme") === "dark";
const getServerThemeSnapshot = () => false;
const subscribeToMount = () => () => {};
const getMountSnapshot = () => true;
const getServerMountSnapshot = () => false;

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [scrolled, setScrolled] = useState(false);
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const hasMounted = useSyncExternalStore(
    subscribeToMount,
    getMountSnapshot,
    getServerMountSnapshot,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignout = async () => {
    try {
      const { error } = await authClient.signOut();
      if (error) {
        toast.error("Unable to sign out. Please try again.");
        return;
      }
      toast.success("Signed out successfully.");
    } catch {
      toast.error("Unable to sign out. Please try again.");
      return;
    }
    redirect("/");
  };

  const toggleTheme = () => {
    const nextTheme = !isDark;
    window.localStorage.setItem("navbar-theme", nextTheme ? "dark" : "light");
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[28px] border px-4 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          isDark
            ? scrolled
              ? "border-white/10 bg-[#1C2018]/95 py-2 text-white shadow-xl shadow-black/30"
              : "border-white/10 bg-[#1C2018]/85 py-3 text-white shadow-lg shadow-black/20"
            : scrolled
              ? "border-black/10 bg-[#F9F9F2]/95 py-2 text-[#26351F] shadow-xl shadow-black/15"
              : "border-white/50 bg-[#F9F9F2]/80 py-3 text-[#26351F] shadow-lg shadow-black/5"
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
          <span
            className={`text-xl font-extrabold leading-5 tracking-tight ${isDark ? "text-[#D2E0B8]" : "text-[#42512C]"}`}
          >
            SocialHands
          </span>
        </Link>

        {/* Upcoming Events */}
        <Link
          href="/upcoming-events"
          className={`hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors outline-none focus-visible:ring-3 focus-visible:ring-[#647F52]/40 md:flex ${
            isDark
              ? "text-white/75 hover:bg-white/10 hover:text-white"
              : "text-[#42512C]/80 hover:bg-[#42512C]/10 hover:text-[#1C2012]"
          }`}
        >
          <CalendarDays aria-hidden="true" size={19} />
          Upcoming Events
        </Link>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="icon"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            className={`h-10 w-10 rounded-full shadow-sm transition-colors ${
              isDark
                ? "border-white/15 bg-white/10 text-amber-300 hover:bg-white/20 hover:text-amber-200"
                : "border-black/10 bg-white/70 text-[#42512C] hover:bg-white hover:text-[#1C2012]"
            }`}
          >
            {isDark ? (
              <Sun size={20} aria-hidden="true" />
            ) : (
              <Moon size={20} aria-hidden="true" />
            )}
          </Button>

          {!hasMounted ? (
            <div aria-hidden="true" className="h-10 w-10" />
          ) : user ? (
            <Popover>
              <PopoverTrigger
                nativeButton={false}
                title={user?.name}
                render={
                  <div
                    className={`group flex cursor-pointer items-center gap-3 rounded-full border p-1.5 pr-3 shadow-sm transition-all duration-200 ${
                      isDark
                        ? "border-white/15 bg-white/10 hover:border-white/25 hover:bg-white/15 hover:shadow-md"
                        : "border-black/20 bg-white/70 hover:border-gray-400/70 hover:bg-white hover:shadow-md"
                    }`}
                  >
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

                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5 ${
                        isDark
                          ? "text-white/70 group-hover:text-white"
                          : "text-[#42512C] group-hover:text-gray-600"
                      }`}
                    />
                  </div>
                }
              ></PopoverTrigger>
              <PopoverContent
                align="end"
                sideOffset={12}
                className={`w-[220px] overflow-hidden rounded-2xl p-0 shadow-xl ${
                  isDark
                    ? "border-white/10 bg-[#252A20] shadow-black/30"
                    : "border-gray-200 bg-white shadow-gray-900/10"
                }`}
              >
                {/* User Info */}
                <PopoverHeader
                  className={`border-b px-4 py-2 text-left ${isDark ? "border-white/10" : "border-gray-100"}`}
                >
                  <PopoverTitle
                    className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {user?.name}
                  </PopoverTitle>

                  <PopoverDescription
                    className={`mt-1 text-xs ${isDark ? "text-white/55" : "text-gray-500"}`}
                  >
                    {user?.email}
                  </PopoverDescription>
                </PopoverHeader>

                {/* Menu Items */}
                <div className="px-2">
                  <Link
                    href="/add-event"
                    className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      isDark
                        ? "text-white/80 hover:bg-white/10 hover:text-white"
                        : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    }`}
                  >
                    <PlusCircle className="h-[18px] w-[18px] text-teal-500" />
                    Create Event
                  </Link>

                  <Link
                    href="/manage-events"
                    className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      isDark
                        ? "text-white/80 hover:bg-white/10 hover:text-white"
                        : "text-gray-700 hover:bg-violet-50 hover:text-violet-600"
                    }`}
                  >
                    <Settings className="h-[18px] w-[18px] text-violet-500" />
                    Manage Events
                  </Link>

                  <Link
                    href="/joined-events"
                    className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      isDark
                        ? "text-white/80 hover:bg-white/10 hover:text-white"
                        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                    }`}
                  >
                    <CircleCheck className="h-[18px] w-[18px] text-emerald-500" />
                    Joined Events
                  </Link>
                </div>

                {/* Logout */}
                <div
                  className={`border-t p-2 ${isDark ? "border-white/10" : "border-gray-100"}`}
                >
                  <button
                    onClick={handleSignout}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      isDark
                        ? "text-red-300 hover:bg-red-400/10"
                        : "text-red-500 hover:bg-red-50"
                    }`}
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
