import LegalLayout from "./LegalLayout";

const TermsPage = () => {
  return (
    <LegalLayout
      title="Uslovi koristenja"
      subtitle="Uslovi definisu pravila koristenja sajta i osnovne okvire saradnje za reparacijske usluge."
      lastUpdated="16. februar 2026."
    >
      <h2>1. Prihvatanje uslova</h2>
      <p>
        Koristenjem ovog sajta potvrdujete da ste procitali i prihvatili ove uslove. Ako se ne slazete
        sa uslovima, molimo da ne koristite sajt.
      </p>

      <h2>2. Informativni karakter sadrzaja</h2>
      <p>
        Sadrzaj sajta sluzi za opste informisanje o uslugama reparacije letvi volana i ne predstavlja
        konacnu tehnicku dijagnozu bez pregleda vozila.
      </p>

      <h2>3. Zakazivanje i realizacija usluge</h2>
      <p>
        Termin reparacije se dogovara direktnom komunikacijom. Konacna cijena i obim radova zavise od
        stvarnog stanja vozila utvrdjenog tokom dijagnostike.
      </p>

      <h2>4. Garancija i odgovornost</h2>
      <p>
        Garancijski uslovi se definisu na radnom nalogu nakon izvrsene reparacije. Radionica ne snosi
        odgovornost za kvarove nastale zbog prethodnih neadekvatnih intervencija ili nepostivanja
        preporuka nakon reparacije.
      </p>

      <h2>5. Ogranicenje odgovornosti za sajt</h2>
      <p>
        Trudimo se da informacije budu tacne i azurne, ali ne garantujemo da je svaki podatak u svakom
        trenutku potpun ili bez greske. Zadrzavamo pravo izmjene sadrzaja bez prethodne najave.
      </p>

      <h2>6. Intelektualna svojina</h2>
      <p>
        Sav tekstualni i vizuelni sadrzaj na sajtu je vlasnistvo radionice ili koristen uz odgovarajuce
        pravo upotrebe. Zabranjeno je neovlasteno kopiranje i distribucija.
      </p>

      <h2>7. Linkovi trecih strana</h2>
      <p>
        Sajt moze sadrzati linkove ka vanjskim uslugama (npr. mapa lokacije). Ne odgovaramo za sadrzaj
        i pravila privatnosti tih stranica.
      </p>

      <h2>8. Primjenjivo pravo</h2>
      <p>
        Na sve sporove u vezi koristenja sajta i usluga primjenjuje se vazeci pravni okvir Bosne i
        Hercegovine, ako posebnim ugovorom nije drugacije definisano.
      </p>

      <h2>9. Kontakt</h2>
      <p>
        Za sva pitanja u vezi uslova koristenja kontaktirajte nas putem telefona
        <strong> +387 65 123 456</strong>.
      </p>
    </LegalLayout>
  );
};

export default TermsPage;
