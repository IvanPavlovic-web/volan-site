import { useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { serviceImageUrls } from "@/lib/service-images";

type ServiceCard = {
  title: string;
  description: string;
};

const services: ServiceCard[] = [
  {
    title: "Reparacija letve volana",
    description: "Kompletna obnova mehanickih i hidraulicnih dijelova.",
  },
  {
    title: "Preventivne reparacije",
    description: "Pregled i odrzavanje prije vecih kvarova.",
  },
  {
    title: "Rekonstrukcija sa garancijom",
    description: "Dubinska rekonstrukcija dotrajalih sklopova.",
  },
  {
    title: "Hidraulicni i EPS sistemi",
    description: "Reparacije hidraulicnih i elektricnih sistema upravljanja.",
  },
];

const panelOverlays = [
  "linear-gradient(160deg, rgba(8,8,8,0.78) 0%, rgba(13,13,13,0.9) 75%)",
  "linear-gradient(160deg, rgba(18,18,18,0.76) 0%, rgba(13,13,13,0.9) 75%)",
  "linear-gradient(160deg, rgba(24,24,24,0.74) 0%, rgba(13,13,13,0.9) 75%)",
  "linear-gradient(160deg, rgba(10,10,10,0.8) 0%, rgba(13,13,13,0.92) 75%)",
];

type ServicePanelProps = {
  slide: ServiceCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
  imageUrl?: string;
  overlay: string;
};

const ServicePanel = ({
  slide,
  index,
  total,
  progress,
  imageUrl,
  overlay,
}: ServicePanelProps) => {
  const segmentStart = index / total;
  const segmentEnd = (index + 1) / total;
  const contentX = useTransform(
    progress,
    [segmentStart, segmentEnd],
    [180, -180],
  );

  return (
    <li className="relative h-full w-screen shrink-0 overflow-hidden bg-[#0d0d0d]">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Reparacije letvi volana Banja Luka - usluga ${index + 1}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : null}

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0" style={{ background: overlay }} />

      <div className="relative z-10 grid h-full w-full place-items-center">
        <motion.div
          style={{ x: contentX }}
          className="flex w-full max-w-[92vw] flex-col items-center gap-3 text-center"
        >
          <h3 className="max-w-[16ch] break-words font-display text-2xl font-semibold leading-tight text-[#f2f2f2] sm:max-w-[20ch] sm:text-4xl md:text-6xl">
            {slide.title}
          </h3>
          <p className="max-w-[34ch] break-words text-xs leading-relaxed text-[#e2e2e2] sm:text-base md:text-lg">
            {slide.description}
          </p>
        </motion.div>
      </div>
    </li>
  );
};

const Services = () => {
  const stackRef = useRef<HTMLDivElement>(null);
  const slides = useMemo<ServiceCard[]>(() => services, []);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${Math.max(slides.length - 1, 0) * 100}vw`],
  );

  return (
    <section id="services" className="border-b border-[#1f1f1f] bg-[#0d0d0d]">
      <div className="grid h-screen w-full place-items-center border-b border-[#1f1f1f]">
        <div className="flex w-full max-w-[92vw] flex-col items-center gap-3 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8f8f8f] sm:text-sm">
            Usluge
          </p>
          <h2 className="max-w-[18ch] break-words font-display text-2xl font-semibold leading-tight text-[#f2f2f2] sm:max-w-none sm:text-5xl">
            Reparacije letvi volana u Banja Luci.
          </h2>
          <p className="max-w-[36ch] break-words text-xs text-[#9f9f9f] sm:max-w-4xl sm:text-base">
            Svaki posao vodimo kroz jasan proces sa fokusom na sigurnost i
            dugotrajnost rjesenja sistema upravljanja.
          </p>
        </div>
      </div>

      <div
        ref={stackRef}
        className="relative"
        style={{ height: `${Math.max(slides.length, 1) * 100}svh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden border-y border-[#1f1f1f]">
          <motion.ul style={{ x }} className="flex h-full">
            {slides.map((slide, index) => {
              const imageUrl = serviceImageUrls.length
                ? serviceImageUrls[index % serviceImageUrls.length]
                : undefined;

              return (
                <ServicePanel
                  key={`${slide.title}-${index}`}
                  slide={slide}
                  index={index}
                  total={slides.length}
                  progress={scrollYProgress}
                  imageUrl={imageUrl}
                  overlay={panelOverlays[index % panelOverlays.length]}
                />
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
