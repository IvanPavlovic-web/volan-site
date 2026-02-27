import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Pocetna", href: "#hero" },
  { label: "Usluge", href: "#services" },
  { label: "Galerija", href: "#gallery" },
  { label: "Recenzije", href: "#trust" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
  { label: "Lokacija", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}Images/logo/cotton-logo.png`;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b border-[#242424] bg-[#101010]/95 backdrop-blur">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-2 whitespace-nowrap font-display text-[11px] font-semibold tracking-[0.06em] text-[#f2f2f2] sm:text-sm md:text-base"
          >
            <img
              src={logoSrc}
              alt="Logo reparacije letvi volana"
              className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20 sm:h-12 sm:w-12"
              loading="eager"
              decoding="async"
            />
            <span>REPARACIJE LETVI VOLANA</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-[#b9b9b9] hover:text-[#f2f2f2]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+38765123456"
              className="inline-flex items-center gap-2 rounded-lg bg-[#b91c1c] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#991b1b]"
            >
              <Phone className="h-4 w-4" />
              Pozivite nas
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+38765123456"
              className="inline-flex items-center gap-1 rounded-lg bg-[#b91c1c] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#991b1b] sm:text-sm"
            >
              <Phone className="h-4 w-4" />
              Pozovi
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-lg border border-[#333333] p-2 text-[#d9d9d9]"
              aria-label="Meni"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-black/70 lg:hidden">
          <div className="absolute inset-x-3 top-20 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-xl border border-[#2b2b2b] bg-[#121212] p-4 sm:inset-x-4">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#c6c6c6]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4">
              <a
                href="tel:+38765123456"
                className="block rounded-md bg-[#b91c1c] px-3 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[#991b1b]"
              >
                Pozovite nas
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
