import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";

type Story = {
  src: string;
  alt: string;
  title: string;
  author: string;
  /** Grid span classes for the mobile/tablet (2 column) layout. */
  base: string;
  /** Grid span classes for the desktop (3 column) layout. */
  lg: string;
};

const stories: Story[] = [
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    alt: "Volunteers working together in a community garden",
    title: "Rebuilding the riverside garden",
    author: "Maya · volunteer since 2021",
    base: "col-span-2 row-span-2",
    lg: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
    alt: "Volunteer packing meals for families",
    title: "Sunday meals for 200 families",
    author: "Daniel · food drive lead",
    base: "row-span-2",
    lg: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    alt: "Students learning together at a tutoring session",
    title: "First day at the tutoring hub",
    author: "Aisha · tutor",
    base: "",
    lg: "",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    alt: "Volunteer cleanup crew posing on the beach",
    title: "Cleanup crew at Sunset Beach",
    author: "84 volunteers · one morning",
    base: "",
    lg: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    alt: "Neighbours sorting donated clothing",
    title: "Warm coats, warmer hearts",
    author: "Nadia · community care",
    base: "row-span-2",
    lg: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    alt: "Group of volunteers celebrating after planting trees",
    title: "Planting 340 saplings",
    author: "Ravi · park steward",
    base: "",
    lg: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    alt: "Volunteers sharing stories with older residents",
    title: "Seniors and their stories",
    author: "Grace · companion visits",
    base: "row-span-2",
    lg: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    alt: "Community members celebrating a completed project",
    title: "The class of 2025 graduates",
    author: "42 students · one season",
    base: "",
    lg: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1497375638960-ca368c7231e4",
    alt: "Two volunteers reaching out a helping hand",
    title: "One more hand",
    author: "Sam · new volunteer",
    base: "col-span-2",
    lg: "",
  },
];

const StoriesGallery = () => {
  return (
    <section id="stories" className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#647F52]">
              Stories
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#26351f] sm:text-4xl lg:text-5xl">
              Moments from the community
            </h2>
            <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
              A gallery of the hands that showed up, the work that got done, and
              the people who made it happen.
            </p>
          </div>

          <a
            href="/stories"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-[#42512C]/20 px-5 py-2.5 text-sm font-semibold text-[#42512C] transition-colors hover:bg-[#42512C] hover:text-white lg:self-auto"
          >
            Share your story
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <ul className="mt-12 grid auto-rows-[140px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[160px] sm:gap-4 lg:auto-rows-[170px] lg:grid-cols-3">
          {stories.map(({ src, alt, title, author, base, lg }) => (
            <li
              key={src}
              className={`group relative overflow-hidden rounded-3xl bg-[#26351f] ${base} ${lg}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#172313]/85 via-[#172313]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-white sm:text-base">
                    {title}
                  </p>
                  <p className="truncate text-xs text-white/70">{author}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Heart aria-hidden="true" className="h-4 w-4" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StoriesGallery;
