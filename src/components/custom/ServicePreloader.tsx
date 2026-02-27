import { CarFront } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { galleryImageUrls, galleryMobileImageUrls } from "@/lib/gallery-images";

const MIN_VISIBLE_MS = 900;

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();

    const done = () => resolve();
    img.onload = done;
    img.onerror = done;
    img.src = src;

    if (img.complete) {
      resolve();
    }
  });

const ServicePreloader = () => {
  const [targetProgress, setTargetProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  const progressRef = useRef({ loaded: 0, total: 1 });

  useEffect(() => {
    let active = true;
    const startedAt = performance.now();
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    const gallerySources = isMobileViewport
      ? galleryMobileImageUrls
      : galleryImageUrls;

    const pageImageSources = Array.from(document.images)
      .map((img) => img.currentSrc || img.src)
      .filter(Boolean);

    const allSources = Array.from(
      new Set([...gallerySources, ...pageImageSources]),
    );

    const tasks: Promise<void>[] = [];

    const hasWindowLoadTask = document.readyState !== "complete";
    const hasFontsTask = typeof document !== "undefined" && "fonts" in document;

    const total =
      allSources.length + (hasWindowLoadTask ? 1 : 0) + (hasFontsTask ? 1 : 0);
    progressRef.current = { loaded: 0, total: Math.max(total, 1) };

    const step = () => {
      progressRef.current.loaded += 1;
      const next = Math.round(
        (progressRef.current.loaded / progressRef.current.total) * 100,
      );
      setTargetProgress(Math.min(next, 100));
    };

    allSources.forEach((src) => {
      tasks.push(preloadImage(src).then(step));
    });

    if (hasFontsTask) {
      tasks.push(
        (document as Document & { fonts: FontFaceSet }).fonts.ready.then(() =>
          step(),
        ),
      );
    }

    if (hasWindowLoadTask) {
      tasks.push(
        new Promise<void>((resolve) => {
          window.addEventListener(
            "load",
            () => {
              step();
              resolve();
            },
            { once: true },
          );
        }),
      );
    }

    if (!tasks.length) {
      setTargetProgress(100);
    }

    Promise.all(tasks).then(() => {
      if (!active) return;

      setTargetProgress(100);

      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

      window.setTimeout(() => {
        if (!active) return;
        setIsVisible(false);
        window.setTimeout(() => {
          if (!active) return;
          setIsMounted(false);
        }, 420);
      }, remaining);
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev >= targetProgress) return prev;
        const step = Math.max(1, Math.ceil((targetProgress - prev) / 7));
        return Math.min(targetProgress, prev + step);
      });
    }, 16);

    return () => window.clearInterval(timer);
  }, [targetProgress]);

  const stageText = useMemo(() => {
    if (displayProgress < 34) return "Dijagnostika sistema...";
    if (displayProgress < 67) return "Kalibracija letve...";
    if (displayProgress < 100) return "Finalni test reparacije...";
    return "Spremno.";
  }, [displayProgress]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-[#070707] transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-live="polite"
      aria-label="Ucitavanje stranice"
    >
      <div className="w-full max-w-sm px-6 sm:max-w-md sm:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a7a7a7]">
          REPARACIJE LETVI VOLANA
        </p>

        <div className="mt-3 flex items-center justify-center gap-2 text-[#f2f2f2]">
          <CarFront className="h-4 w-4" />
          <p className="font-display text-lg">
            Sajt se ocitava, molimo Vas pricekajte.
          </p>
        </div>

        <p className="mt-4 text-center text-sm text-[#c8c8c8]">{stageText}</p>

        <div className="relative mt-6 h-2 overflow-hidden rounded-full border border-white/20 bg-white/10">
          <div
            className="h-full rounded-full bg-[#f2f2f2] transition-[width] duration-150"
            style={{ width: `${displayProgress}%` }}
          />
          <CarFront
            className="absolute -top-4 h-3.5 w-3.5 text-[#f2f2f2] transition-[left] duration-150"
            style={{ left: `calc(${Math.min(displayProgress, 100)}% - 7px)` }}
          />
        </div>

        <p className="mt-3 text-right text-xs font-semibold tracking-[0.12em] text-[#f2f2f2]">
          {displayProgress}%
        </p>
      </div>
    </div>
  );
};

export default ServicePreloader;
