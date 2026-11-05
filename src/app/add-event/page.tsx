"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  Sparkles,
  Type,
  Tag,
  Calendar,
  MapPin,
  Image as ImageIcon,
  FileText,
  PlusCircle,
  ChevronDown,
} from "lucide-react";
import { getTokenFromClient } from "@/lib/getTokenfromClient";

const formProps = {
    title: "",
    eventType: "Donation",
    eventDate: "",
    location: "",
    image: "",
    description: "",
};

const getMinEventDate = () => {
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const month = String(minDate.getMonth() + 1).padStart(2, "0");
  const day = String(minDate.getDate()).padStart(2, "0");
  return `${minDate.getFullYear()}-${month}-${day}`;
};

const CreateEventPage = () => {
  const { data: session } = authClient.useSession();
  const userEmail = session?.user?.email ?? "";

  const [formData, setFormData] = useState(formProps);
  const minEventDate = getMinEventDate();

  const presets = [
    { name: "Donation", url: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600" },
    { name: "Cleanup", url: "https://plus.unsplash.com/premium_photo-1663092014878-68976d0b456e?w=600" },
    { name: "Plantation", url: "https://images.unsplash.com/photo-1777150895644-2ca253ee1c93?w=600" },
    { name: "Winter Relief", url: "https://plus.unsplash.com/premium_photo-1683135012485-412ba9531a3b?w=600" },
    { name: "Food Drive", url: "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?w=600" },
    { name: "Health Camp", url: "https://images.unsplash.com/photo-1659718282962-452648b6eba6?w=600" },
    { name: "Education", url: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applyPreset = (url: string) => {
    setFormData((prev) => ({ ...prev, image: url }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = await getTokenFromClient();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ...formData, creatorEmail: userEmail }),
      });

      if (!res.ok) {
        toast.error("Unable to publish the event. Please try again.");
        return;
      }

      await res.json();
      toast.success("Your event has been published.");
    } catch {
      toast.error("Unable to publish the event. Please try again.");
      return;
    }

    redirect("/upcoming-events");
  };

  return (
    <div className="mt-20 flex min-h-screen flex-col items-center justify-center bg-[#F7F6F1] px-3 py-8 font-sans antialiased text-[#26351F] dark:bg-[#071E07] dark:text-stone-100 min-[380px]:px-4 sm:py-12">
      {/* Back Navigation Trigger */}
      <div className="mb-4 flex w-full max-w-2xl justify-start sm:mb-5">
        <button className="group flex items-center gap-2 text-xs font-semibold text-[#64748B] transition-colors hover:text-[#0F172A] dark:text-stone-400 dark:hover:text-stone-100">
          <ArrowLeft className="h-3.5 w-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
          Back to Upcoming Events
        </button>
      </div>

      {/* Main shadcn-styled Form Card Container */}
      <div className="w-full max-w-2xl rounded-2xl border border-[#E5E9DF] bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#102110] min-[380px]:p-5 sm:p-10">
        {/* Top Feature Badge */}
        <div className="mb-5 inline-flex select-none items-center gap-1.5 rounded-full border border-[#647F52]/20 bg-[#647F52]/10 px-3 py-1 text-xs font-bold text-[#42512C] dark:border-lime-300/20 dark:bg-lime-300/10 dark:text-lime-200">
          <Sparkles className="h-3.5 w-3.5 text-[#647F52] dark:text-lime-300" />
          Social Service Drive
        </div>

        {/* Heading Header Group */}
        <div className="mb-8">
          <h1 className="mb-2 text-xl font-extrabold tracking-tight text-[#26351F] dark:text-stone-100 min-[380px]:text-2xl sm:text-3xl">
            Create a Community Event
          </h1>
          <p className="text-sm text-[#64748B] dark:text-stone-400">
            Organize a local relief effort, environmental cleanup, or community
            support drive.
          </p>
        </div>

        {/* Input Fields Content */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Form Segment: Event Title */}
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-stone-300">
              Event Title <span className="text-[#647F52] dark:text-lime-300">*</span>
            </label>
            <div className="relative">
              <Type className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8] dark:text-stone-500" />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="e.g. Winter Clothes Distribution – Mirpur 10, Dhaka"
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] py-3 pl-11 pr-4 text-sm text-[#26351F] placeholder:text-[#94A3B8] transition-all focus:border-[#647F52] focus:outline-none focus:ring-2 focus:ring-[#647F52]/20 dark:border-white/10 dark:bg-[#172617] dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-lime-300 dark:focus:ring-lime-300/20"
              />
            </div>
          </div>

          {/* Form Layout Grid Row: Type & Date Selector */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {/* Form Segment: Event Type */}
            <div className="space-y-2">
              <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-stone-300">
                Event Type <span className="text-[#647F52] dark:text-lime-300">*</span>
              </label>
              <div className="relative">
                <Tag className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8] dark:text-stone-500" />
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full cursor-pointer appearance-none rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] py-3 pl-11 pr-10 text-sm text-[#26351F] transition-all focus:border-[#647F52] focus:outline-none focus:ring-2 focus:ring-[#647F52]/20 dark:border-white/10 dark:bg-[#172617] dark:text-stone-100 dark:focus:border-lime-300 dark:focus:ring-lime-300/20"
                >
                  <option value="Donation">Donation</option>
                  <option value="Cleanup">Cleanup</option>
                  <option value="Plantation">Plantation</option>
                  <option value="Winter Relief">Winter Relief</option>
                  <option value="Food Drive">Food Drive</option>
                  <option value="Health Camp">Health Camp</option>
                  <option value="Education">Education</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-4 h-3.5 w-3.5 text-[#94A3B8] dark:text-stone-500" />
              </div>
            </div>

            {/* Form Segment: Event Date */}
            <div className="space-y-2">
              <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-stone-300">
                Event Date <span className="text-[#647F52] dark:text-lime-300">*</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8] dark:text-stone-500" />
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  min={minEventDate}
                  required
                  className="w-full cursor-pointer rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] py-3 pl-11 pr-4 text-sm text-[#26351F] transition-all focus:border-[#647F52] focus:outline-none focus:ring-2 focus:ring-[#647F52]/20 dark:border-white/10 dark:bg-[#172617] dark:text-stone-100 dark:focus:border-lime-300 dark:focus:ring-lime-300/20"
                />
              </div>
              <p className="mt-1 pl-1 text-[11px] tracking-wide text-[#64748B] dark:text-stone-400">
                Dates must be in the future
              </p>
            </div>
          </div>

          {/* Form Segment: Location Area */}
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-stone-300">
              Location / Venue <span className="text-[#647F52] dark:text-lime-300">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8] dark:text-stone-500" />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder="e.g. Mohammadpur Town Hall, Dhaka"
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] py-3 pl-11 pr-4 text-sm text-[#26351F] placeholder:text-[#94A3B8] transition-all focus:border-[#647F52] focus:outline-none focus:ring-2 focus:ring-[#647F52]/20 dark:border-white/10 dark:bg-[#172617] dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-lime-300 dark:focus:ring-lime-300/20"
              />
            </div>
          </div>

          {/* Form Segment: Image Attachments */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-stone-300">
              Thumbnail Image URL <span className="text-[#647F52] dark:text-lime-300">*</span>
            </label>
            <div className="relative">
              <ImageIcon className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8] dark:text-stone-500" />
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
                placeholder="https://unsplash.com..."
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] py-3 pl-11 pr-4 text-sm text-[#26351F] placeholder:text-[#94A3B8] transition-all focus:border-[#647F52] focus:outline-none focus:ring-2 focus:ring-[#647F52]/20 dark:border-white/10 dark:bg-[#172617] dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-lime-300 dark:focus:ring-lime-300/20"
              />
            </div>

            {/* Fast Presets Action Section */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs pt-1 pl-1">
              <span className="text-[#64748B] dark:text-stone-400">Quick photo presets:</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {presets.map((preset, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => applyPreset(preset.url)}
                    className="font-semibold text-[#42512C] transition-colors hover:text-[#647F52] hover:underline dark:text-lime-300 dark:hover:text-lime-200"
                  >
                    {preset.name}
                    {idx < presets.length - 1 && (
                      <span className="ml-1.5 inline-block text-[#CBD5E1] no-underline dark:text-stone-600">
                        |
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Segment: Large Text Area Description */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-stone-300">
              Event Description <span className="text-[#647F52] dark:text-lime-300">*</span>
            </label>
            <div className="relative">
              <FileText className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8] dark:text-stone-500" />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete..."
                className="min-h-[110px] w-full resize-y rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] py-3 pl-11 pr-4 text-sm text-[#26351F] placeholder:text-[#94A3B8] transition-all focus:border-[#647F52] focus:outline-none focus:ring-2 focus:ring-[#647F52]/20 dark:border-white/10 dark:bg-[#172617] dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-lime-300 dark:focus:ring-lime-300/20"
              />
            </div>
          </div>

          {/* User Account Verification Meta Section */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-4 text-xs dark:border-white/10 dark:bg-[#172617] sm:px-5 sm:text-sm">
            <span className="font-medium text-[#64748B] dark:text-stone-400">
              Organizer Email attached:
            </span>
            <span className="max-w-full break-all text-right font-bold tracking-wide text-[#26351F] dark:text-stone-100">
              {userEmail}
            </span>
          </div>

          {/* Submission Main Button */}
          <button
            type="submit"
            className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#42512C] px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#344222] active:scale-[0.995] dark:bg-lime-300 dark:text-[#172313] dark:hover:bg-lime-200 sm:py-4"
          >
            <PlusCircle className="h-4 w-4" />
            Publish Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEventPage;