import { Clock3, MapPin, Phone, X } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresa",
    content: "Ulica Franca Suberte br. 42, Banja Luka 78000",
    link: "https://maps.google.com/?q=Ulica+Franca+%C5%A0uberte+br.+42+Banja+Luka",
    linkText: "Kliknite ovdje za direkcije",
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+387 66 515 815 • +387 65 470 503",
  },
  {
    icon: Clock3,
    title: "Radno vrijeme",
    content: "Pon - Pet: 08:00 - 18:00",
    subContent: "Subota: 08:00 - 14:00",
  },
];

const Contact = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const phoneOptions = [
    { label: "+387 66 515 815", href: "tel:+38766515815" },
    { label: "+387 65 470 503", href: "tel:+38765470503" },
  ];

  return (
    <section id="contact" className="border-b border-[#1f1f1f] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8f8f8f] sm:text-sm">
          Kontakt
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-[#f2f2f2] sm:text-5xl">
          Kako do nas i kontakt informacije.
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-[#9f9f9f] sm:text-base">
          Pozovite nas ili nas posjetite na adresi Ulica Franca Suberte br. 42,
          Banja Luka. Repariramo letve volana i sisteme upravljanja za vozila iz
          Banje Luke i okoline, uz odgovor na upite u roku od 24h.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            {contactInfo.map((info) => (
              <article
                key={info.title}
                className="rounded-lg border border-[#242424] bg-[#141414] p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#1e1e1e] text-[#d0d0d0]">
                    <info.icon className="h-4 w-4" />
                  </span>
                  <div className="w-full">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#848484]">
                      {info.title}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#f2f2f2]">
                      {info.content}
                    </p>
                    {"subContent" in info && info.subContent ? (
                      <p className="text-sm text-[#9f9f9f]">
                        {info.subContent}
                      </p>
                    ) : null}
                    {"link" in info && info.link ? (
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-2 inline-block text-sm font-medium text-[#c6c6c6]"
                      >
                        {info.linkText}
                      </a>
                    ) : null}
                    {info.title === "Telefon" ? (
                      <button
                        type="button"
                        onClick={() => setIsCallModalOpen(true)}
                        className="mt-3 w-full rounded-md border border-[#2b2b2b] bg-[#1b1b1b] px-4 py-2 text-sm font-semibold text-[#f2f2f2] transition hover:border-[#3a3a3a] hover:bg-[#202020] sm:w-auto"
                      >
                        Pozovi
                      </button>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="h-[320px] overflow-hidden rounded-lg border border-[#242424] bg-[#141414] sm:h-[420px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps?q=Ulica%20Franca%20%C5%A0uberte%20br.%2042%20Banja%20Luka&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Reparacije letvi volana Banja Luka lokacija"
            />
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default Contact;
