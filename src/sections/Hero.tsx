import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import Beams from "@/components/custom/Beams";
import { Marquee } from "@/components/ui/marquee";

const stats = [
  { target: 12, suffix: "+", label: "godina iskustva" },
  {
    target: 250,
    suffix: "+",
    label: "repariranih letvi",
    thousandSeparator: true,
  },
  { target: 24, suffix: "h", label: "odgovor na upit" },
];

const heroTickerItems = [
  "Reparacije letvi volana",
  "Reparacija letvi volana",
  "Kalibracija",
  "Testiranje",
  "Garancija",
];

const formatWithDots = (value: number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

type CountUpNumberProps = {
  target: number;
  suffix?: string;
  duration?: number;
  thousandSeparator?: boolean;
};

const CountUpNumber = ({
  target,
  suffix = "",
  duration = 1400,
  thousandSeparator = false,
}: CountUpNumberProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [duration, target]);

  const displayValue = thousandSeparator
    ? formatWithDots(value)
    : value.toString();
  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden border-b border-[#1f1f1f]"
    >
      <div className="absolute inset-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 grid h-screen w-full place-items-center">
        <div className="flex w-full max-w-[92vw] flex-col items-center gap-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#a5a5a5] sm:text-sm">
            Reparacije letvi volana u Banja Luci
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight text-[#f2f2f2] sm:text-5xl lg:text-6xl">
            Reparacije
            <span className="block text-[#c8c8c8]">letvi volana.</span>
          </h1>

          <p className="max-w-4xl text-base leading-relaxed text-[#b0b0b0] sm:text-lg">
            Profesionalna reparacija letvi volana i sistema upravljanja u Banja
            Luci i šire, uz završnu kontrolu i preporuke za sigurnu vožnju.
          </p>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_11%,black_89%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_11%,black_89%,transparent)]">
            <Marquee
              className="w-full [--duration:24s] [--gap:1.5rem]"
              repeat={5}
            >
              {heroTickerItems.map((item) => (
                <p
                  key={item}
                  className="whitespace-nowrap font-display text-lg font-semibold tracking-[0.08em] text-[#d7d7d7] sm:text-2xl md:text-3xl"
                >
                  {item}
                  <span className="ml-3 text-[#8e8e8e]">.</span>
                </p>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/95 to-transparent sm:w-1/5" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/95 to-transparent sm:w-1/5" />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+38765123456"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f2f2f2] px-6 py-3 text-sm font-semibold text-[#121212] sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Pozovite nas
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#3a3a3a] px-6 py-3 text-sm font-semibold text-[#d3d3d3] sm:w-auto"
            >
              Kontakt i lokacija
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="hidden w-full max-w-6xl gap-3 md:grid md:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/20 bg-white/[0.08] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-4"
              >
                <p className="font-display text-2xl font-semibold text-[#f2f2f2] sm:text-3xl">
                  <CountUpNumber
                    target={item.target}
                    suffix={item.suffix}
                    thousandSeparator={item.thousandSeparator}
                  />
                </p>
                <p className="mt-1 text-[11px] leading-snug text-[#a0a0a0] sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
