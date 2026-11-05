import Image from "next/image";
import Link from "next/link";
import { Calendar, Sparkles, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#42512C]/10 bg-[#F7F6F1] text-[#26351f] dark:border-white/10 dark:bg-[#071E07] dark:text-stone-100">
      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-10 sm:pt-14 lg:px-12">
        
        {/* Main Grid Content formatted like the image */}
        <div className="grid gap-8 border-b border-[#42512C]/10 pb-8 dark:border-white/10 sm:grid-cols-2 sm:gap-8 sm:pb-10 lg:grid-cols-[1.4fr_1fr_1.1fr_1.1fr] lg:gap-10 lg:pb-12">
          
          {/* Column 1: Original Brand Identity */}
          <div className="flex flex-col items-start">
            <Link href="/#home" className="inline-flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#647F52]">
              <Image src="/shlogo.jpg" alt="" width={44} height={44} className="h-9 w-9 rounded-full object-cover sm:h-11 sm:w-11" />
              <span className="text-lg font-extrabold tracking-tight text-[#26351F] dark:text-stone-100 sm:text-xl">
                SocialHands
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#26351f]/75 dark:text-stone-300">
              Bringing neighbors and local causes together to create a kinder, stronger community—one helping hand at a time.
            </p>
            <div className="mt-6 inline-flex items-center gap-1.5 text-xs text-[#26351f]/65 dark:text-stone-400">
              <MapPin className="h-3.5 w-3.5 text-[#647F52] dark:text-lime-300" />
              <span>Dhaka, Bangladesh • Nationwide Impact</span>
            </div>
          </div>

          {/* Column 2: Explore Platform structure matching the layout */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#647F52] dark:text-lime-300">
              Explore Platform
            </h2>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <Link href="/upcoming-events" className="inline-flex items-center gap-2 text-[#26351f]/75 transition-colors hover:text-[#42512C] dark:text-stone-300 dark:hover:text-lime-300">
                  <Calendar className="h-3.5 w-3.5 text-[#647F52] dark:text-lime-300" />
                  <span>Upcoming Events</span>
                </Link>
              </li>
              <li>
                <Link href="/add-event" className="inline-flex items-center gap-2 text-[#26351f]/75 transition-colors hover:text-[#42512C] dark:text-stone-300 dark:hover:text-lime-300">
                  <Sparkles className="h-3.5 w-3.5 text-[#647F52] dark:text-lime-300" />
                  <span>Create an Event</span>
                </Link>
              </li>
              <li>
                <Link href="/manage-events" className="text-[#26351f]/75 transition-colors hover:text-[#42512C] pl-[22px] block dark:text-stone-300 dark:hover:text-lime-300">
                  Manage My Events
                </Link>
              </li>
              <li>
                <Link href="/joined-events" className="text-[#26351f]/75 transition-colors hover:text-[#42512C] pl-[22px] block dark:text-stone-300 dark:hover:text-lime-300">
                  My Joined Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Active Causes List */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#647F52] dark:text-lime-300">
              Active Causes
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-[#26351f]/75 dark:text-stone-300">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>Winter Clothes & Blanket Relief</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>City Clean-up & Waste Segregation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span>Urban Tree Plantation Drives</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>Underprivileged Meal Sharing</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>Free Medical & Health Camps</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Community Spirit text & Badge */}
          <div className="flex flex-col items-start">
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#647F52] dark:text-lime-300">
              Community Spirit
            </h2>
            <p className="mt-5 text-sm leading-6 text-[#26351f]/75 dark:text-stone-300">
              Every small action counts. Connect with local volunteers, turn compassion into direct community aid, and be the change your city needs.
            </p>
            <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[#647F52]/10 px-3 py-1 text-xs font-medium text-[#42512C] dark:bg-lime-300/10 dark:text-lime-200">
              <Globe className="h-3.5 w-3.5 text-[#647F52] dark:text-lime-300" />
              100% Volunteer Driven
            </div>
          </div>

        </div>

        {/* Bottom Bar: Updated Text layout */}
        <div className="flex flex-col gap-3 pt-6 text-xs text-[#26351f]/55 dark:text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 SocialHands. Built with care for community service and social development.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> for a better tomorrow
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
