import { type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

type LegalLayoutProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: ReactNode;
};

const LegalLayout = ({ title, subtitle, lastUpdated, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] pb-16">
      <header className="border-b border-[#242424] bg-[#101010]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-[#303030] px-3 py-2 text-sm font-medium text-[#d0d0d0]"
          >
            <ArrowLeft className="h-4 w-4" />
            Nazad na pocetnu
          </a>

          <div className="flex items-center gap-2 text-sm">
            <a href="/privatnost" className="rounded-md border border-[#303030] px-3 py-2 text-[#c3c3c3]">
              Privatnost
            </a>
            <a href="/uslovi-koristenja" className="rounded-md border border-[#303030] px-3 py-2 text-[#c3c3c3]">
              Uslovi
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto mt-8 max-w-4xl px-4 sm:mt-10 sm:px-6">
        <section className="rounded-lg border border-[#242424] bg-[#141414] p-7 md:p-10">
          <h1 className="font-display text-3xl font-semibold text-[#f2f2f2] sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mt-4 text-base text-[#a5a5a5] sm:text-lg">{subtitle}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.12em] text-[#7d7d7d]">Zadnje azuriranje: {lastUpdated}</p>

          <article className="legal-content mt-8 text-base">{children}</article>
        </section>
      </main>
    </div>
  );
};

export default LegalLayout;
