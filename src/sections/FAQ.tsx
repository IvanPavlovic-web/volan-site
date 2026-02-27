import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Koliko traje reparacija letvi volana?",
    answer: "Najcesce 24 do 48 sati, u zavisnosti od stanja sklopa i dostupnosti dijelova.",
  },
  {
    question: "Da li dajete garanciju na reparaciju?",
    answer: "Da. Nakon reparacije dobijate jasne garancijske uslove i pregled uradjenih stavki.",
  },
  {
    question: "Da li radite i hidraulicne i elektricne sisteme?",
    answer: "Radimo oba tipa sistema upravljanja, ukljucujuci dijagnostiku i finalno testiranje.",
  },
  {
    question: "Kako mogu zakazati termin?",
    answer: "Termin mozete zakazati telefonom, uz brz povratni odgovor.",
  },
  {
    question: "Da li radite reparacije letvi volana i za okolinu Banja Luke?",
    answer: "Da. Radimo za Banja Luku i okolna mjesta, uz isti postupak dijagnostike i kontrole kvaliteta.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="border-b border-[#1f1f1f] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8f8f8f] sm:text-sm">FAQ</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-[#f2f2f2] sm:text-5xl">
          Najcesca pitanja prije reparacije.
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-[#9f9f9f] sm:text-base">
          Kratki odgovori na pitanja koja dobijamo prije dolaska vozila u radionicu.
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-[#242424] bg-[#141414] p-4 sm:p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-base font-semibold text-[#f2f2f2] sm:text-lg">
                {faq.question}
                <ChevronDown className="h-4 w-4 text-[#9f9f9f]" />
              </summary>
              <p className="pt-3 text-sm text-[#a5a5a5]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
