import LegalLayout from "./LegalLayout";

const PrivacyPage = () => {
  return (
    <LegalLayout
      title="Politika privatnosti"
      subtitle="Objasnjavamo koje podatke prikupljamo, kako ih koristimo i kako stitimo informacije koje nam ostavite."
      lastUpdated="16. februar 2026."
    >
      <h2>1. Koje podatke prikupljamo</h2>
      <p>
        Kada nas kontaktirate putem telefona ili forme, mozemo prikupiti ime, broj telefona, podatke o
        vozilu i opis problema koji prijavljujete.
      </p>

      <h2>2. Svrha obrade podataka</h2>
      <p>
        Podatke koristimo iskljucivo za komunikaciju sa klijentima, zakazivanje termina, pripremu
        ponude reparacije, realizaciju usluge i eventualnu podrsku nakon reparacije.
      </p>

      <h2>3. Pravna osnova</h2>
      <p>
        Obrada se zasniva na vasoj saglasnosti, izvrsavanju ugovorenih usluga ili legitimnom interesu
        da odgovorimo na upit i organizujemo intervenciju reparacije.
      </p>

      <h2>4. Dijeljenje podataka</h2>
      <p>
        Vase podatke ne prodajemo trecim stranama. Podaci se mogu dijeliti samo sa partnerima koji su
        neophodni za izvrsenje reparacije (npr. dobavljaci dijelova), i to u minimalnom obimu.
      </p>

      <h2>5. Cuvanje podataka</h2>
      <p>
        Podatke cuvamo samo onoliko koliko je potrebno da izvrsimo uslugu, ispunimo zakonske obaveze i
        obezbijedimo osnovnu korisnicku podrsku.
      </p>

      <h2>6. Vasa prava</h2>
      <ul>
        <li>Pravo pristupa podacima koje cuvamo o vama.</li>
        <li>Pravo ispravke netacnih ili zastarjelih podataka.</li>
        <li>Pravo brisanja podataka kada ne postoji zakonski osnov za dalje cuvanje.</li>
        <li>Pravo ogranicenja obrade i prigovora na obradu.</li>
      </ul>

      <h2>7. Sigurnost podataka</h2>
      <p>
        Primjenjujemo organizacione i tehnicke mjere zastite kako bismo umanjili rizik neovlastenog
        pristupa, gubitka ili zloupotrebe podataka.
      </p>

      <h2>8. Kontakt za privatnost</h2>
      <p>
        Za sva pitanja u vezi privatnosti i obrade podataka mozete nas kontaktirati putem telefona
        <strong> +387 65 123 456</strong>.
      </p>
    </LegalLayout>
  );
};

export default PrivacyPage;
