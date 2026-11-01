"use client";

import React, { useState } from "react";
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

const formProps = {
    title: "",
    type: "Donation",
    date: "",
    location: "",
    thumbnailUrl: "",
    description: "",
};

export default function CreateEventPage() {
  const [formData, setFormData] = useState(formProps);

  const presets = [
    { name: "Winter Clothes", url: "https://unsplash.com" },
    { name: "Blanket Relief", url: "https://unsplash.com" },
    { name: "Cleanup", url: "https://unsplash.com" },
    { name: "Tree Plantation", url: "https://unsplash.com" },
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
    setFormData((prev) => ({ ...prev, thumbnailUrl: url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Event Data: ", formData);

    const res = await fetch("http://localhost:8000/add-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Server Response: ", data);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 flex flex-col items-center justify-center font-sans antialiased text-[#1E293B]">
      {/* Back Navigation Trigger */}
      <div className="w-full max-w-2xl mb-5 flex justify-start">
        <button className="flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors group">
          <ArrowLeft className="h-3.5 w-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
          Back to Upcoming Events
        </button>
      </div>

      {/* Main shadcn-styled Form Card Container */}
      <div className="w-full max-w-2xl bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 shadow-sm">
        {/* Top Feature Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#00A88E]/10 border border-[#00A88E]/20 text-[#008772] text-xs font-bold px-3 py-1 rounded-full mb-5 select-none">
          <Sparkles className="h-3.5 w-3.5 text-[#00A88E]" />
          Social Service Drive
        </div>

        {/* Heading Header Group */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] mb-2">
            Create a Community Event
          </h1>
          <p className="text-sm text-[#64748B]">
            Organize a local relief effort, environmental cleanup, or community
            support drive.
          </p>
        </div>

        {/* Input Fields Content */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="e.g. Winter Clothes Distribution – Mirpur 10, Dhaka"
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#00A88E]/20 focus:border-[#00A88E] bg-slate-50/50 transition-all"
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
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl pl-11 pr-10 py-3 text-sm text-[#0F172A] appearance-none focus:outline-none focus:ring-2 focus:ring-[#00A88E]/20 focus:border-[#00A88E] bg-slate-50/50 transition-all cursor-pointer"
                >
                  <option value="Donation">Donation</option>
                  <option value="Cleanup">Cleanup</option>
                  <option value="Plantation">Plantation</option>
                  <option value="Medical Camp">Medical Camp</option>
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
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#00A88E]/20 focus:border-[#00A88E] bg-slate-50/50 transition-all cursor-pointer"
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
                placeholder="e.g. Mohammadpur Town Hall, Dhaka"
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#00A88E]/20 focus:border-[#00A88E] bg-slate-50/50 transition-all"
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
                name="thumbnailUrl"
                value={formData.thumbnailUrl}
                onChange={handleInputChange}
                required
                placeholder="https://unsplash.com..."
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#00A88E]/20 focus:border-[#00A88E] bg-slate-50/50 transition-all"
              />
            </div>

            {/* Fast Presets Action Section */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs pt-1 pl-1">
              <span className="text-[#64748B]">Quick photo presets:</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {presets.map((preset, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => applyPreset(preset.url)}
                    className="text-[#008772] hover:text-[#00A88E] font-semibold transition-colors hover:underline"
                  >
                    {preset.name}
                    {idx < presets.length - 1 && (
                      <span className="text-[#CBD5E1] no-underline inline-block ml-1.5">
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
                placeholder="Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete..."
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#00A88E]/20 focus:border-[#00A88E] bg-slate-50/50 transition-all resize-y min-h-[110px]"
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

          {/* Submission Main Button */}
          <button
            type="submit"
            className="w-full bg-[#00A88E] hover:bg-[#008772] active:scale-[0.995] text-white font-bold text-sm py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <PlusCircle className="h-4 w-4" />
            Publish Event
          </button>
        </form>
      </div>
    </div>
  );
}
