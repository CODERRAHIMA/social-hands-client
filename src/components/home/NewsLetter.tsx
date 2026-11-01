
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
      className="px-5 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-[26px] border border-[#dce5ef] bg-gradient-to-br from-[#dff5f2] via-white to-[#e4f5f0] px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16">
          
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#009E91]">
            Stay Connected
          </p>

          <h2
            id="newsletter-heading"
            className="mx-auto max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-[#10172A] sm:text-4xl"
          >
            Subscribe to Local Cause Alerts
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Get notified when new winter drives, blanket distributions, or
            emergency cleanups are organized in your neighborhood.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
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
              className="h-12 min-w-0 flex-1 rounded-xl border border-[#dce5ef] bg-[#f8fafc] px-4 text-sm text-slate-700 shadow-sm outline-none placeholder:text-slate-400 focus:border-[#009E91] focus:ring-2 focus:ring-[#009E91]/15"
            />

            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#009E91] px-6 text-sm font-bold text-white shadow-md shadow-[#009E91]/20 transition-all hover:bg-[#008579] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009E91] focus-visible:ring-offset-2"
            >
              <Send className="h-4 w-4" />
              Subscribe
            </button>
          </form>

          <p
            aria-live="polite"
            className="mt-6 flex min-h-5 items-center justify-center gap-2 text-xs text-slate-500"
          >
            {subscribed ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-[#009E91]" />
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
