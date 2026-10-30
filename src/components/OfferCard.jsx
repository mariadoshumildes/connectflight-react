import { Link } from 'react-router-dom';

export default function OfferCard({ oferta }) {
  return (
    <article className="offer-card">
      <div className="offer-card__icon" aria-hidden="true">{oferta.icone}</div>
      <div className="offer-card__content">
        <span className="offer-card__tag">{oferta.tag}</span>
        <h2>{oferta.titulo}</h2>
        <p>{oferta.descricao}</p>
        <ul>
          {oferta.destaques.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Link className="button button--light" to={`/contato?assunto=${encodeURIComponent(oferta.titulo)}`}>
          Tenho interesse <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
