import PageIntro from '../components/PageIntro.jsx';
import OfferCard from '../components/OfferCard.jsx';
import { ofertas } from '../data/destinos.js';

export default function Ofertas() {
  return (
    <main className="inner-page" id="conteudo">
      <PageIntro
        eyebrow="Ideias para viajar"
        title={<>Sua próxima aventura tem <span>muitas possibilidades.</span></>}
        description="Descubra tipos de viagens que combinam com seu estilo e escolha sua próxima experiência."
      />
      <section className="content-section" aria-label="Inspirações de viagem">
        <div className="section-heading">
          <div>
            <span className="section-heading__eyebrow">Inspiração de férias</span>
            <h2>Escolha sua experiência favorita</h2>
          </div>
        </div>
        <div className="offer-grid">
          {ofertas.map((oferta) => <OfferCard key={oferta.id} oferta={oferta} />)}
        </div>
      </section>
      <p className="illustrative-notice">Conteúdo ilustrativo. Esta página não anuncia pacotes comerciais, disponibilidade ou preços reais.</p>
    </main>
  );
}
