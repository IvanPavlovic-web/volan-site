import { Clock3, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresa",
    content: "Krajiskih brigada 79, Banja Luka 78000",
    link: "https://maps.google.com/?q=Krajiskih+brigada+79+Banja+Luka",
    linkText: "Kliknite ovdje za direkcije",
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+387 65 123 456",
    link: "tel:+38765123456",
    linkText: "Pozovite nas klikom na ovaj tekst",
  },
  {
    icon: Clock3,
    title: "Radno vrijeme",
    content: "Pon - Pet: 08:00 - 18:00",
    subContent: "Subota: 08:00 - 14:00",
  },
];

const Contact = () => {
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
          Pozovite nas ili nas posjetite na adresi Krajiških brigada 79, Banja
          Luka (tranzit, preko puta Konzuma, Jumbo i Emporium centra).
          Repariramo letve volana i sisteme upravljanja za vozila iz Banje Luke
          i okoline, uz odgovor na upite u roku od 24h.
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
                  <div>
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
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="h-[320px] overflow-hidden rounded-lg border border-[#242424] bg-[#141414] sm:h-[420px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps?q=Krajiskih%20brigada%2079%20Banja%20Luka&output=embed"
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
    </section>
  );
};

export default Contact;
