export default function Home() {
  return (
    <main className="home-page" id="conteudo">
      <img
        className="home-page__art"
        src="/imagens/ilustracao-viagem.png"
        alt="Ilustração de uma viajante ao lado do globo terrestre com marcadores de destinos"
        width="650" height="410"
      />
      <h1>O seu próximo <span>destino</span> pode estar aqui...</h1>
      <p className="home-page__subtitle">
        Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!
      </p>
      <p className="home-page__description">
        No <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e<br className="desktop-break" />
        {' '}internacionais que incluem: passagens aéreas, hotéis, café da manhã,<br className="desktop-break" />
        {' '}e até seguro viagem com <strong>preços arrasadores!</strong>
      </p>
      <p className="home-page__note">
        Se você ainda não tem um destino definido, confira nossa seção de ofertas.
      </p>
    </main>
  );
}
