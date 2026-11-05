import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";

type Story = {
  src: string;
  alt: string;
  title: string;
  author: string;
  /** Grid span classes for the tablet layout. */
  base: string;
  /** Grid span classes used above phone widths. */
  lg: string;
};

const stories: Story[] = [
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    alt: "Volunteers working together in a community garden",
    title: "Rebuilding the riverside garden",
    author: "Maya · volunteer since 2021",
    base: "sm:col-span-2 sm:row-span-2",
    lg: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
    alt: "Volunteer packing meals for families",
    title: "Sunday meals for 200 families",
    author: "Daniel · food drive lead",
    base: "sm:row-span-2",
    lg: "sm:row-span-2",
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
    lg: "sm:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    alt: "Neighbours sorting donated clothing",
    title: "Warm coats, warmer hearts",
    author: "Nadia · community care",
    base: "sm:row-span-2",
    lg: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    alt: "Group of volunteers celebrating after planting trees",
    title: "Planting 340 saplings",
    author: "Ravi · park steward",
    base: "",
    lg: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80",
    alt: "Volunteers sharing stories with older residents",
    title: "Seniors and their stories",
    author: "Grace · companion visits",
    base: "sm:row-span-2",
    lg: "sm:row-span-2",
  },
];

const StoriesGallery = () => {
  return (
    <section id="stories" className="py-16 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#647F52] dark:text-lime-300 sm:mb-4 sm:text-sm sm:tracking-[0.24em]">
              Stories
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#26351F] dark:text-stone-100 sm:text-4xl lg:text-5xl">
              Moments from the community
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-stone-400 sm:mt-5 sm:text-base sm:leading-7">
              A gallery of the hands that showed up, the work that got done, and
              the people who made it happen.
            </p>
          </div>
        </div>

        <ul className="mt-8 grid auto-rows-[220px] grid-flow-dense grid-cols-1 gap-3 sm:mt-12 sm:auto-rows-[160px] sm:grid-cols-2 sm:gap-4 lg:auto-rows-[170px] lg:grid-cols-3">
          {stories.map(({ src, alt, title, author, base, lg }) => (
            <li
              key={src}
              className={`group relative overflow-hidden rounded-3xl bg-[#26351f] ${base} ${lg}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 2rem)"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#172313]/85 via-[#172313]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-5">
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold text-white sm:text-base">
                    {title}
                  </p>
                  <p className="truncate text-[11px] text-white/70 sm:text-xs">{author}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StoriesGallery;
