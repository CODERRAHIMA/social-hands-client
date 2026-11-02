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

interface Event {
  _id: string;
  title: string;
  eventType: string;
  eventDate: string;
  location: string;
  image: string;
  description: string;
}

export function EditEventDialog({ event }: { event: Event }) {
  const [formData, setFormData] = useState(event);
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {_id, ...updatedEvent} = formData; // Exclude _id from the updated data

    const res = await fetch(`http://localhost:8000/upcoming-events/${event._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent), // Send only the updated fields
    });

    const data = await res.json();
    router.refresh(); // Refresh the page to reflect the updated event
  };
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" className="flex-1 sm:flex-none">
            <Pencil size={16} />
            Edit
          </Button>
        }
      />
      <DialogContent className="flex max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] min-w-xl max-w-2xl flex-col gap-0 overflow-x-hidden overflow-y-auto border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50 p-0 shadow-2xl">
        <DialogHeader className="border-b border-emerald-100 bg-emerald-50/70 py-5 pl-6 pr-12">
          <DialogTitle className="text-xl font-bold text-slate-900">
            Update Event
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            Modify the details for your social service initiative.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="w-full min-w-0 space-y-5 px-6 py-6">
            {/* Form Segment: Event Title */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1">
                Event Title <span className="text-[#00A88E]">*</span>
              </label>
              <div className="relative">
                <Type className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8]" />
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white/80 py-3 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            {/* Form Layout Grid Row: Type & Date Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Form Segment: Event Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1">
                  Event Type <span className="text-[#00A88E]">*</span>
                </label>
                <div className="relative">
                  <Tag className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8]" />
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white/80 py-3 pl-11 pr-10 text-sm text-slate-900 transition-all focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  >
                    <option value="Donation">Donation</option>
                    <option value="Cleanup">Cleanup</option>
                    <option value="Plantation">Plantation</option>
                    <option value="Winter Relief">Winter Relief</option>
                    <option value="Food Drive">Food Drive</option>
                    <option value="Health Camp">Health Camp</option>
                    <option value="Education">Education</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 h-3.5 w-3.5 text-[#94A3B8] pointer-events-none" />
                </div>
              </div>

              {/* Form Segment: Event Date */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1">
                  Event Date <span className="text-[#00A88E]">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8]" />
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                    className="w-full cursor-pointer rounded-xl border border-slate-200 bg-white/80 py-3 pl-11 pr-4 text-sm text-slate-900 transition-all focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <p className="text-[11px] text-[#64748B] tracking-wide mt-1 pl-1">
                  Dates must be in the future (today or later)
                </p>
              </div>
            </div>

            {/* Form Segment: Location Area */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1">
                Location / Venue <span className="text-[#00A88E]">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8]" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white/80 py-3 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            {/* Form Segment: Image Attachments */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                Thumbnail Image URL <span className="text-[#00A88E]">*</span>
              </label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8]" />
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white/80 py-3 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            {/* Form Segment: Large Text Area Description */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                Event Description <span className="text-[#00A88E]">*</span>
              </label>
              <div className="relative">
                <FileText className="absolute left-4 top-3.5 h-4 w-4 text-[#94A3B8]" />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="min-h-[110px] w-full resize-y rounded-xl border border-slate-200 bg-white/80 py-3 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            {/* User Account Verification Meta Section */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#64748B] font-medium">
                Organizer Email attached:
              </span>
              <span className="text-[#0F172A] font-bold tracking-wide">
                example@gmail.com
              </span>
            </div>
          <DialogFooter className="sticky bottom-0 z-10 -mx-6 border-t border-emerald-100 bg-white/95 px-6 py-4 backdrop-blur">
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              }
            />
            <DialogClose
              render={
                <Button type="submit">Save changes</Button>
              }
            />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
