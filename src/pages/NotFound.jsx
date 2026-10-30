import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="not-found" id="conteudo">
      <span className="not-found__number">404</span>
      <h1>Ops! Esse destino não está no mapa.</h1>
      <p>A página que você tentou acessar não foi encontrada.</p>
      <Link className="button button--primary" to="/">Voltar para o início ↗</Link>
    </main>
  );
}
