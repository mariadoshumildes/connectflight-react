import { Link } from 'react-router-dom';

export default function DestinationCard({ destino }) {
  return (
    <article className="destination-card">
      <div className={`destination-card__image destination-card__image--${destino.id}`}>
        <img src={destino.imagem} alt={`Ilustração de ${destino.nome}`} loading="lazy" />
        <span className="destination-card__category">{destino.categoria === 'nacional' ? 'Brasil' : 'Internacional'}</span>
      </div>
      <div className="destination-card__body">
        <span className="destination-card__region">{destino.regiao}</span>
        <h2>{destino.nome}</h2>
        <p>{destino.descricao}</p>
        <Link to={`/contato?assunto=${encodeURIComponent(`Informações sobre ${destino.nome}`)}`} className="text-link">
          Quero conhecer <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
