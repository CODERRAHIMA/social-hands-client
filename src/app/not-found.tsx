import { ArrowRight, CalendarDays, Compass } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-28 mt-22">
      <section className="w-full max-w-xl px-2 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#42512C]/10 bg-[#42512C]/5 text-[#647F52] dark:border-white/10 dark:bg-lime-300/10 dark:text-lime-300">
          <Compass aria-hidden="true" className="h-7 w-7" />
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#647F52] dark:text-lime-300">
          Error 404
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#26351F] dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-stone-300 sm:text-base sm:leading-7">
          This page may have moved or the link might be incorrect. Let&apos;s
          help you find your way back.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/upcoming-events"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#42512C] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#344222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#647F52] dark:bg-lime-300 dark:text-[#172313] dark:hover:bg-lime-200 dark:focus-visible:outline-lime-300 sm:w-auto sm:px-5"
          >
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
            Explore events
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[#42512C]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#42512C] transition-colors hover:bg-[#42512C]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#647F52] dark:border-white/15 dark:bg-white/5 dark:text-stone-200 dark:hover:bg-white/10 dark:focus-visible:outline-lime-300 sm:w-auto sm:px-5"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}