"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IEvent } from "@/lib/eventType";
import {
  Pencil,
  Type,
  Tag,
  Calendar,
  MapPin,
  Image as ImageIcon,
  FileText,
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { getTokenFromClient } from "@/lib/getTokenfromClient";

const getMinEventDate = () => {
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const month = String(minDate.getMonth() + 1).padStart(2, "0");
  const day = String(minDate.getDate()).padStart(2, "0");
  return `${minDate.getFullYear()}-${month}-${day}`;
};

export function EditEventDialog({ event }: { event: IEvent }) {
  const [formData, setFormData] = useState({
    ...event,
    eventDate: event.eventDate.slice(0, 10),
  });
  const router = useRouter();
  const minEventDate = getMinEventDate();
  const labelClassName =
    "flex items-center gap-1.5 text-sm font-semibold text-[#344222] dark:text-stone-200";
  const fieldClassName =
    "w-full rounded-xl border border-[#E5E9DF] bg-[#FAFBF8] py-3 pl-11 pr-4 text-sm text-[#26351F] transition-colors placeholder:text-slate-400 hover:border-[#42512C]/30 focus:border-[#647F52] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#647F52]/10 dark:border-white/10 dark:bg-[#172617] dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-lime-300 dark:focus:bg-[#1b2b1a] dark:focus:ring-lime-300/10";
  const iconClassName = "absolute left-4 top-3.5 h-4 w-4 text-[#647F52] dark:text-lime-300";

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {_id, ...updatedEvent} = formData; // Exclude _id from the updated data

    const token = await getTokenFromClient();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upcoming-events/${event._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedEvent),
      });

      if (!res.ok) {
        toast.error("Unable to update the event. Please try again.");
        return;
      }

      await res.json();
      toast.success("Event updated successfully.");
      router.refresh();
    } catch {
      toast.error("Unable to update the event. Please try again.");
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="flex-1 sm:flex-none h-11 w-full justify-center rounded-xl border-[#42512C]/20 bg-white px-3 py-1 text-sm font-semibold text-[#42512C] shadow-sm transition-all hover:border-[#42512C]/30 hover:bg-[#42512C]/5 hover:text-[#344222] focus-visible:ring-[#647F52]/30 dark:border-white/15 dark:bg-white/5 dark:text-lime-200 dark:hover:border-lime-300/30 dark:hover:bg-lime-300/10 dark:hover:text-lime-100 dark:focus-visible:ring-lime-300/30 sm:w-auto sm:px-4 sm:py-0 lg:w-full"
          >
            <Pencil className="h-4 w-4" />
            Edit
          </Button>
        }
      />
      <DialogContent className="flex max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-6xl flex-col gap-0 overflow-x-hidden overflow-y-auto rounded-2xl border border-[#E5E9DF] bg-white p-0 shadow-2xl shadow-[#26351F]/15 dark:border-white/10 dark:bg-[#102110] dark:shadow-black/40 sm:max-w-3xl">
        <DialogHeader className="border-b border-[#E5E9DF] bg-[#F7F9F4] px-5 py-5 pr-12 dark:border-white/10 dark:bg-[#142414] sm:px-7">
          <DialogTitle className="text-xl font-bold tracking-tight text-[#26351F] dark:text-stone-100 sm:text-2xl">
            Update Event
          </DialogTitle>
          <DialogDescription className="mt-1 text-sm leading-6 text-slate-600 dark:text-stone-400">
            Modify the details for your social service initiative.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="w-full min-w-0 space-y-5 px-5 py-5 sm:px-7 sm:py-6">
            {/* Form Segment: Event Title */}
            <div className="space-y-2">
              <label className={labelClassName}>
                Event title <span className="text-[#647F52]">*</span>
              </label>
              <div className="relative">
                <Type className={iconClassName} />
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className={fieldClassName}
                />
              </div>
            </div>

            {/* Form Layout Grid Row: Type & Date Selector */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Form Segment: Event Type */}
              <div className="space-y-2">
                <label className={labelClassName}>
                  Event type <span className="text-[#647F52]">*</span>
                </label>
                <div className="relative">
                  <Tag className={iconClassName} />
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={`${fieldClassName} appearance-none pr-10`}
                  >
                    <option value="Donation">Donation</option>
                    <option value="Cleanup">Cleanup</option>
                    <option value="Plantation">Plantation</option>
                    <option value="Winter Relief">Winter Relief</option>
                    <option value="Food Drive">Food Drive</option>
                    <option value="Health Camp">Health Camp</option>
                    <option value="Education">Education</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-4 h-3.5 w-3.5 text-[#647F52]" />
                </div>
              </div>

              {/* Form Segment: Event Date */}
              <div className="space-y-2">
                <label className={labelClassName}>
                  Event date <span className="text-[#647F52]">*</span>
                </label>
                <div className="relative">
                  <Calendar className={iconClassName} />
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    min={minEventDate}
                    required
                    className={`${fieldClassName} cursor-pointer`}
                  />
                </div>
                <p className="mt-1 pl-1 text-xs text-slate-500 dark:text-stone-400">
                  Dates must be in the future
                </p>
              </div>
            </div>

            {/* Form Segment: Location Area */}
            <div className="space-y-2">
              <label className={labelClassName}>
                Location / venue <span className="text-[#647F52]">*</span>
              </label>
              <div className="relative">
                <MapPin className={iconClassName} />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className={fieldClassName}
                />
              </div>
            </div>

            {/* Form Segment: Image Attachments */}
            <div className="space-y-2">
              <label className={labelClassName}>
                Thumbnail image URL <span className="text-[#647F52]">*</span>
              </label>
              <div className="relative">
                <ImageIcon className={iconClassName} />
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                  className={fieldClassName}
                />
              </div>
            </div>

            {/* Form Segment: Large Text Area Description */}
            <div className="space-y-2">
              <label className={labelClassName}>
                Event description <span className="text-[#647F52]">*</span>
              </label>
              <div className="relative">
                <FileText className={`${iconClassName} top-4`} />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={`${fieldClassName} min-h-[110px] resize-y`}
                />
              </div>
            </div>

            {/* User Account Verification Meta Section */}
            <div className="flex flex-col gap-1.5 rounded-xl border border-[#E5E9DF] bg-[#F7F9F4] px-4 py-3 text-sm dark:border-white/10 dark:bg-[#172617] sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <span className="font-medium text-slate-600 dark:text-stone-400">
                Organizer Email attached:
              </span>
              <span className="font-semibold tracking-wide text-[#344222] dark:text-stone-100">
                {formData.creatorEmail}
              </span>
            </div>
          <DialogFooter className="sticky bottom-0 z-10 -mx-5 border-t border-[#E5E9DF] bg-white/95 px-5 py-4 backdrop-blur dark:border-white/10 dark:bg-[#102110]/95 sm:-mx-7 sm:px-7">
            <DialogClose
              render={
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 rounded-xl border-[#E5E9DF] px-4 font-semibold text-slate-600 hover:bg-[#F7F9F4] hover:text-[#344222] dark:border-white/10 dark:text-stone-300 dark:hover:bg-white/5 dark:hover:text-lime-200 sm:h-10 sm:px-5"
                >
                  Cancel
                </Button>
              }
            />
            <DialogClose
              render={
                <Button
                  type="submit"
                  className="h-11 rounded-xl bg-[#42512C] px-4 font-semibold text-white shadow-sm transition-colors hover:bg-[#344222] dark:bg-lime-300 dark:text-[#172313] dark:hover:bg-lime-200 sm:h-10 sm:px-5"
                >
                  Save changes
                </Button>
              }
            />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
