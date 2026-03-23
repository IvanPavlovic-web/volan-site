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
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}Images/logo/cotton-logo.png`;
  const phoneOptions = [
    { label: "+387 66 515 815", href: "tel:+38766515815" },
    { label: "+387 65 470 503", href: "tel:+38765470503" },
  ];

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
            <button
              type="button"
              onClick={() => setIsCallModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-[#b91c1c] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#991b1b]"
            >
              <Phone className="h-4 w-4" />
              Pozovi
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsCallModalOpen(true)}
              className="inline-flex items-center gap-1 rounded-lg bg-[#b91c1c] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#991b1b] sm:text-sm"
            >
              <Phone className="h-4 w-4" />
              Pozovi
            </button>
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
              <button
                type="button"
                onClick={() => {
                  setIsCallModalOpen(true);
                  setIsOpen(false);
                }}
                className="block w-full rounded-md bg-[#b91c1c] px-3 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[#991b1b]"
              >
                Pozovi
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isCallModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 px-4 py-6 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Izaberite broj za poziv"
          onClick={() => setIsCallModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-[#2a2a2a] bg-[#111111] p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#7f7f7f]">
                  Poziv
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[#f2f2f2]">
                  Izaberite broj
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCallModalOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2b2b2b] text-[#cfcfcf] transition hover:border-[#3a3a3a] hover:text-white"
                aria-label="Zatvori"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 grid gap-3">
              {phoneOptions.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="flex items-center justify-between rounded-xl border border-[#242424] bg-[#181818] px-4 py-3 text-sm font-semibold text-[#f2f2f2] transition hover:border-[#3a3a3a] hover:bg-[#202020]"
                >
                  <span>{phone.label}</span>
                  <span className="text-xs font-medium text-[#a5a5a5]">
                    Pozovi
                  </span>
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsCallModalOpen(false)}
              className="mt-4 w-full rounded-md border border-[#2b2b2b] bg-transparent px-4 py-2 text-sm font-semibold text-[#cfcfcf] transition hover:border-[#3a3a3a] hover:text-white"
            >
              Zatvori
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;

