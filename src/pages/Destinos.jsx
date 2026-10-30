import { useSearchParams } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';
import DestinationCard from '../components/DestinationCard.jsx';
import { destinos } from '../data/destinos.js';

const filtros = [
  { valor: 'todos', texto: 'Todos os destinos' },
  { valor: 'nacional', texto: 'Nacionais' },
  { valor: 'internacional', texto: 'Internacionais' },
];

export default function Destinos() {
  const [params, setParams] = useSearchParams();
  const filtro = ['nacional', 'internacional'].includes(params.get('tipo')) ? params.get('tipo') : 'todos';
  const lista = destinos.filter((item) => filtro === 'todos' || item.categoria === filtro);

  return (
    <main className="inner-page" id="conteudo">
      <PageIntro
        eyebrow="Explore o mundo"
        title={<>Seu próximo <span>destino</span> começa aqui.</>}
        description="De cidades cheias de história a dias de descanso: encontre a inspiração ideal para a sua viagem."
      />
      <section className="content-section" aria-label="Destinos para explorar">
        <div className="section-heading">
          <div>
            <span className="section-heading__eyebrow">Lugares para descobrir</span>
            <h2>Escolha o que combina com você</h2>
          </div>
          <span className="results-count">{lista.length} {lista.length === 1 ? 'destino' : 'destinos'}</span>
        </div>
        <div className="filter-list" role="group" aria-label="Filtrar destinos por região">
          {filtros.map(({ valor, texto }) => (
            <button
              key={valor} type="button"
              className={`filter-button ${filtro === valor ? 'filter-button--active' : ''}`}
              aria-pressed={filtro === valor}
              onClick={() => setParams(valor === 'todos' ? {} : { tipo: valor })}
            >
              {texto}
            </button>
          ))}
        </div>
        <div className="destination-grid">
          {lista.map((destino) => <DestinationCard key={destino.id} destino={destino} />)}
        </div>
      </section>
      <p className="illustrative-notice">Destinos apresentados apenas como exemplos para fins acadêmicos.</p>
    </main>
  );
}
