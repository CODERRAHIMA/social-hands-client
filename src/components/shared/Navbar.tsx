"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useLayoutEffect,
  useState,
  useSyncExternalStore,
} from "react";
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
import toast from "react-hot-toast";

const subscribeToMount = () => () => {};
const getMountSnapshot = () => true;
const getServerMountSnapshot = () => false;

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [scrolled, setScrolled] = useState(false);
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

  // Re-apply the saved theme after React's development remount resets <html>.
  useLayoutEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark" || storedTheme === "light") {
        document.documentElement.setAttribute("data-theme", storedTheme);
      }
    } catch {
      // localStorage can be unavailable (private mode, blocked cookies, etc.).
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", nextTheme);

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // The visual theme still updates even if persistence is unavailable.
    }
  };

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

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 px-2 pt-2 min-[380px]:px-3 sm:px-6 sm:pt-5"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-[24px] border px-3 text-[#26351F] backdrop-blur-xl transition-all duration-300 min-[380px]:gap-3 sm:gap-4 sm:rounded-[28px] sm:px-6 ${
          scrolled
            ? "border-[#6E8649] bg-[#6E8649] py-2 shadow-xl shadow-black/15 dark:border-white/10 dark:bg-[#26351F] dark:shadow-black/30"
            : "border-[#6E8649] bg-[#6E8649] py-3 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-[#26351F] dark:shadow-black/30"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 rounded-full outline-none focus-visible:ring-3 focus-visible:ring-[#647F52]/40 sm:shrink-0 sm:gap-2.5"
        >
          <Image
            src="/shlogo.jpg"
            alt="SocialHands logo"
            width={40}
            height={40}
            className="h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10"
          />
          <span className="truncate text-base font-extrabold tracking-tight text-[#F7F6F1] dark:text-lime-200 min-[380px]:text-lg sm:text-xl">
            SocialHands
          </span>
        </Link>

        {/* Upcoming Events */}
        <Link
          href="/upcoming-events"
          className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#F7F6F1] transition-colors outline-none hover:bg-[#42512C]/10 hover:text-[#1C2012] focus-visible:ring-3 focus-visible:ring-[#647F52]/40 dark:text-stone-200 dark:hover:bg-white/10 dark:hover:text-white md:flex"
        >
          <CalendarDays aria-hidden="true" size={19} />
          Upcoming Events
        </Link>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="icon"
            type="button"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
            onClick={toggleTheme}
            className="h-11 w-11 rounded-full border-black/10 bg-white/70 text-[#42512C] shadow-sm hover:bg-white hover:text-[#1C2012] dark:border-white/15 dark:bg-white/10 dark:text-lime-200 dark:hover:bg-white/15 dark:hover:text-white sm:h-10 sm:w-10"
          >
            <Moon size={20} aria-hidden="true" className="dark:hidden" />
            <Sun size={20} aria-hidden="true" className="hidden dark:block" />
          </Button>
          {!hasMounted ? (
            <div aria-hidden="true" className="h-11 w-11 sm:h-10 sm:w-10" />
          ) : user ? (
            <Popover>
              <PopoverTrigger
                nativeButton={false}
                title={user?.name}
                render={
                  <div
                    className="group flex cursor-pointer items-center gap-3 rounded-full bg-white/70 p-1.5 pr-3 transition-all duration-200 hover:border-gray-400/70 hover:bg-white hover:shadow-md dark:bg-white/10 dark:hover:border-white/20 dark:hover:bg-white/15"
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
                      className="h-4 w-4 text-[#42512C] transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-gray-600 dark:text-lime-200 dark:group-hover:text-white"
                    />
                  </div>
                }
              ></PopoverTrigger>
              <PopoverContent
                align="end"
                sideOffset={12}
                className="w-[220px] overflow-hidden rounded-2xl border-gray-200 bg-white p-0 shadow-xl shadow-gray-900/10 dark:border-white/10 dark:bg-[#172617]"
              >
                {/* User Info */}
                <PopoverHeader
                  className="border-b border-gray-100 px-4 py-2 text-left dark:border-white/10"
                >
                  <PopoverTitle
                    className="text-sm font-bold text-gray-900 dark:text-white"
                  >
                    {user?.name}
                  </PopoverTitle>

                  <PopoverDescription
                    className="mt-1 text-xs text-gray-500 dark:text-white"
                  >
                    {user?.email}
                  </PopoverDescription>
                </PopoverHeader>

                {/* Menu Items */}
                <div className="px-2">
                  <Link
                    href="/add-event"
                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-600 dark:text-stone-200 dark:hover:bg-teal-900/30 dark:hover:text-teal-200"
                  >
                    <PlusCircle className="h-[18px] w-[18px] text-teal-500" />
                    Create Event
                  </Link>

                  <Link
                    href="/manage-events"
                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-violet-50 hover:text-violet-600 dark:text-stone-200 dark:hover:bg-violet-900/30 dark:hover:text-violet-200"
                  >
                    <Settings className="h-[18px] w-[18px] text-violet-500" />
                    Manage Events
                  </Link>

                  <Link
                    href="/joined-events"
                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-600 dark:text-stone-200 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-200"
                  >
                    <CircleCheck className="h-[18px] w-[18px] text-emerald-500" />
                    Joined Events
                  </Link>
                </div>

                {/* Logout */}
                <div
                  className="border-t border-gray-100 p-2 dark:border-white/10"
                >
                  <button
                    onClick={handleSignout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-950/30"
                  >
                    <LogOut className="h-[18px] w-[18px]" />
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Link href="/sign-in">
              <Button className="h-11 rounded-full bg-[#26351F] px-3 font-semibold text-white shadow-md shadow-green-900/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/15 sm:h-10 sm:px-5">
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
