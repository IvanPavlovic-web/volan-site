import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

type Review = {
  name: string;
  date: string;
  body: string;
  badge: string;
};

const reviews: Review[] = [
  {
    name: "Igor K.",
    date: "12.03.2023.",
    body: "Nema boljih i brzih reparacija. Sve preporuke.",
    badge: "IK",
  },
  {
    name: "Ivan Pavlovic",
    date: "28.09.2023.",
    body: "Odlicno odradjeno, volan sada miran i precizan.",
    badge: "IP",
  },
  {
    name: "Nenad Milovanovic",
    date: "19.07.2024.",
    body: "Najbrza reparacije letve volana, bez cekanja.",
    badge: "NM",
  },
  {
    name: "Stefan Savic",
    date: "03.11.2025.",
    body: "Sve preporuke. Tacan rok i korektna usluga.",
    badge: "SS",
  },
  {
    name: "Radovan Lukic",
    date: "26.01.2025.",
    body: "Uradjeno kako treba, auto ide pravo i stabilno.",
    badge: "RL",
  },
  {
    name: "Nikolina Bekic",
    date: "10.02.2026.",
    body: "Cista petica.",
    badge: "NB",
  },
  {
    name: "Amar Badnjevic",
    date: "05.02.2026.",
    body: "Odlicno.",
    badge: "AB",
  },
  {
    name: "Marko Kremenovic",
    date: "19.02.2025.",
    body: "Sve preporuke",
    badge: "MK",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ badge, name, date, body }: Review) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-default overflow-hidden rounded-xl border border-[#2b2b2b] sm:w-72",
        "bg-[#141414] p-4 text-[#e6e6e6]",
      )}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0)_60%)]" />

      <div className="relative z-10 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3a3a3a] bg-[#1b1b1b] text-xs font-semibold text-[#f2f2f2]">
          {badge}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-[#f2f2f2]">
            {name}
          </figcaption>
          <p className="text-xs text-[#9e9e9e]">{date}</p>
        </div>
      </div>

      <blockquote className="relative z-10 mt-3 text-sm leading-relaxed text-[#c8c8c8]">
        "{body}"
      </blockquote>
    </figure>
  );
};

const Trust = () => {
  return (
    <section
      id="trust"
      className="relative overflow-hidden border-b border-[#1f1f1f] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8f8f8f] sm:text-sm">
          Recenzije
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-[#f2f2f2] sm:text-5xl">
          Iskustva vozaca koji su nam dali povjerenje.
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-[#9f9f9f] sm:text-base">
          Komentari su preuzeti iz stvarnih upita i reparacija realizovanih u
          periodu 2023-2026.
        </p>

        <div className="relative mt-10">
          <Marquee pauseOnHover className="[--duration:24s]">
            {firstRow.map((review) => (
              <ReviewCard key={`${review.name}-${review.date}`} {...review} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:24s]">
            {secondRow.map((review) => (
              <ReviewCard key={`${review.name}-${review.date}`} {...review} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0d0d0d] to-transparent sm:w-1/5" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0d0d0d] to-transparent sm:w-1/5" />
        </div>
      </div>
    </section>
  );
};

export default Trust;
