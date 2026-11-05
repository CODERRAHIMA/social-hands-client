
"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="px-4 py-12 sm:px-5 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-[26px] border border-[#cbd5bd] bg-gradient-to-br from-[#e0e8d7] via-[#edf2e7] to-[#d3dfc9] px-4 py-10 text-center shadow-xl shadow-[#26351f]/5 dark:border-white/10 dark:from-[#182718] dark:via-[#102110] dark:to-[#1b2c19] dark:shadow-black/20 sm:px-10 sm:py-16 lg:px-16">
          
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#647F52] dark:text-lime-300">
            Stay Connected
          </p>

          <h2
            id="newsletter-heading"
            className="mx-auto max-w-xl text-2xl font-extrabold leading-tight tracking-tight text-[#26351f] dark:text-white sm:text-4xl"
          >
            Subscribe to Local Cause Alerts
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-stone-300 sm:text-base">
            Get notified when new winter drives, blanket distributions, or
            emergency cleanups are organized in your neighborhood.
          </p>

          <form
  onSubmit={handleSubmit}
  className="mx-auto mt-6 flex w-full max-w-md flex-row gap-2 sm:gap-3"
>
  <label htmlFor="newsletter-email" className="sr-only">
    Email address
  </label>

  <input
    id="newsletter-email"
    name="email"
    type="email"
    required
    autoComplete="email"
    placeholder="Enter your email address"
    value={email}
    onChange={(event) => {
      setEmail(event.target.value);
      setSubscribed(false);
    }}
    className="h-10 w-full min-w-0 flex-1 rounded-xl border border-[#dce5ef] bg-white/80 px-3 text-xs text-slate-700 shadow-sm outline-none placeholder:text-slate-400 focus:border-[#647F52] focus:ring-2 focus:ring-[#647F52]/20 dark:border-white/10 dark:bg-black/20 dark:text-stone-100 dark:placeholder:text-stone-400 dark:focus:border-lime-300 dark:focus:ring-lime-300/20 sm:h-12 sm:px-4 sm:text-sm"
  />

  <button
    type="submit"
    className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#42512C] px-3 text-xs font-bold text-white shadow-md shadow-[#42512C]/20 transition-all hover:bg-[#344222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#647F52] focus-visible:ring-offset-2 dark:bg-lime-300 dark:text-[#172313] dark:shadow-lime-300/10 dark:hover:bg-lime-200 dark:focus-visible:ring-lime-300 dark:focus-visible:ring-offset-[#102110] sm:h-12 sm:gap-2 sm:px-6 sm:text-sm"
  >
    <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
    Subscribe
  </button>
</form>

          <p
            aria-live="polite"
            className="mt-6 flex min-h-5 items-center justify-center gap-2 text-xs text-slate-600 dark:text-stone-400"
          >
            {subscribed ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-[#647F52] dark:text-lime-300" />
                You're on the list — see you next month.
              </>
            ) : (
              "No spam guaranteed. Unsubscribe at any time."
            )}
          </p>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
