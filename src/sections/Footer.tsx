import { ArrowUp, Clock3, MapPin, Phone } from "lucide-react";
import Squares from "@/components/custom/Squares";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0f0f0f] py-10 sm:py-12">
      <div className="absolute inset-0 z-0">
        <Squares
          direction="down"
          speed={0.5}
          squareSize={40}
          borderColor="#2b2b2b"
          hoverFillColor="#1a1a1a"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-base font-semibold text-[#f2f2f2] sm:text-lg">
              REPARACIJE LETVI VOLANA
            </p>
            <p className="mt-2 text-sm text-[#9f9f9f]">
              Specijalizovane reparacije letvi volana u Banja Luci, sa fokusom
              na sigurnost, preciznost upravljanja i dugotrajnost rjesenja.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
              Linkovi
            </p>
            <div className="mt-3 space-y-2 text-sm text-[#c1c1c1]">
              <a href="#workflow" className="block">
                Proces rada
              </a>
              <a href="#services" className="block">
                Usluge
              </a>
              <a href="#trust" className="block">
                Recenzije
              </a>
              <a href="#contact" className="block">
                Kontakt
              </a>
              <a href="/privatnost" className="block">
                Politika privatnosti
              </a>
              <a href="/uslovi-koristenja" className="block">
                Uslovi koristenja
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
              Kontakt
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#c1c1c1]">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#9f9f9f]" />
                <a
                  href="https://maps.google.com/?q=Krajiskih+brigada+79+Banja+Luka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Krajiskih brigada 79, Banja Luka
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#9f9f9f]" />
                <a href="tel:+38765123456">+387 65 123 456</a>
              </li>
              <li className="flex items-center gap-2 leading-relaxed">
                <Clock3 className="h-4 w-4 text-[#9f9f9f]" />
                Pon - Pet: 08:00 - 18:00 | Subota: 08:00 - 14:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#242424] pt-6 text-sm text-[#848484]">
          {currentYear} Reparacije Letvi Volana. Sva prava zadrzana.
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-40 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#303030] bg-[#171717] text-[#d8d8d8] sm:bottom-6 sm:right-6 sm:h-10 sm:w-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
};

export default Footer;
