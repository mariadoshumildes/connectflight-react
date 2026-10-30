import { Link } from 'react-router-dom';

export default function PageIntro({ eyebrow, title, description }) {
  return (
    <header className="inner-header">
      <Link className="back-home" to="/" aria-label="Voltar para a página inicial">
        <span aria-hidden="true">←</span> Voltar ao início
      </Link>
      <div className="inner-header__badge">✦ {eyebrow}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}
