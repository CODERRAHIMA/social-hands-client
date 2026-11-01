import { BadgeCheck, CalendarClock, Compass, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Discover Local Causes",
    description:
      "Browse curated volunteer opportunities near you and filter by the causes you care about most.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Organizers",
    description:
      "Every event is posted by vetted community organizations, so you always know who you are helping.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Commitment",
    description:
      "Give an hour or a whole season. Join one event or many — your time, on your own terms.",
  },
  {
    icon: HeartHandshake,
    title: "Track Your Impact",
    description:
      "Follow the hours you have contributed and the lives you have touched along the way.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-[#F7F6F1] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#647F52]">
            Why SocialHands
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#26351f] sm:text-4xl lg:text-5xl">
            Everything you need to make a difference
          </h2>
          <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
            From finding the right cause to seeing the change you create, we keep
            the whole journey simple.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-5 rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#647F52]/10 text-[#42512C] transition group-hover:bg-[#647F52] group-hover:text-white">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold tracking-tight text-[#26351f]">
                {title}
              </h3>
              <p className="text-sm leading-6 text-black/60">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
