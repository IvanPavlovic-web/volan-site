import { Car, ClipboardCheck, Search, Wrench } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Search,
    title: "Dijagnostika",
    description: "Mjerenje zazora, curenja i opterecenja prije rastavljanja.",
    details: ["Kontrola lufta volana", "Provjera curenja", "Ocjena stanja sklopa"],
    bg: "linear-gradient(145deg, #141416 0%, #08080a 100%)",
    border: "rgba(212, 212, 216, 0.35)",
  },
  {
    id: "02",
    icon: Wrench,
    title: "Demontaza i obnova",
    description: "Zamjena kriticnih dijelova i vracanje geometrije sklopa.",
    details: ["Obrada kucista", "Zamjena zaptivki", "Mehanicka korekcija"],
    bg: "linear-gradient(145deg, #191919 0%, #0d0d0d 100%)",
    border: "rgba(161, 161, 170, 0.34)",
  },
  {
    id: "03",
    icon: ClipboardCheck,
    title: "Kalibracija i test",
    description: "Kontrola pod opterecenjem i finalna validacija rada.",
    details: ["Test na stolu", "Provjera vracanja", "Stabilnost pod opterecenjem"],
    bg: "linear-gradient(145deg, #121316 0%, #07080a 100%)",
    border: "rgba(148, 163, 184, 0.3)",
  },
  {
    id: "04",
    icon: Car,
    title: "Predaja vozila",
    description: "Predaja uz preporuke za odrzavanje i dalju sigurnu voznju.",
    details: ["Finalna kontrola", "Objasnjenje uradjenog", "Preporuke za odrzavanje"],
    bg: "linear-gradient(145deg, #181614 0%, #0a0908 100%)",
    border: "rgba(196, 181, 166, 0.32)",
  },
];

const Workflow = () => {
  return (
    <section id="workflow" className="border-b border-[#1f1f1f] bg-[#0d0d0d]">
      <article className="sticky top-0 grid h-screen w-full place-items-center bg-[#0d0d0d]">
        <div className="flex w-full max-w-[92vw] flex-col items-center gap-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8f8f8f] sm:text-sm">Proces rada</p>
          <h2 className="font-display text-4xl font-semibold text-[#f2f2f2] sm:text-6xl">
            Proces
            <br />
            rada.
          </h2>
          <p className="max-w-4xl text-sm text-[#9f9f9f] sm:text-base">
            Transparentne reparacije od prijema do finalne kontrole, sa jasnim koracima i provjerom svakog detalja.
          </p>
        </div>
      </article>

      {steps.map((step) => (
        <article key={step.id} className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0" style={{ background: step.bg }} />
          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 grid h-full w-full place-items-center text-[#f4f4f5]">
            <div className="flex w-full max-w-[92vw] flex-col items-center gap-4 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d4d4d8] sm:text-xs">
                Korak {step.id}
              </p>

              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border bg-black/20 sm:h-12 sm:w-12"
                style={{ borderColor: step.border }}
              >
                <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>

              <h3 className="font-display text-3xl font-semibold sm:text-5xl">{step.title}</h3>
              <p className="max-w-4xl text-sm leading-relaxed text-[#e4e4e7] sm:text-lg">{step.description}</p>

              <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-[#e4e4e7] sm:text-sm">
                {step.details.map((detail) => (
                  <li key={detail} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a1a1aa]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Workflow;
