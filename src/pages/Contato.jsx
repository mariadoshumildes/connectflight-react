import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';

export default function Contato() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({ nome: '', email: '', assunto: params.get('assunto') || '', mensagem: '' });
  const [confirmado, setConfirmado] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((anterior) => ({ ...anterior, [name]: value }));
    if (confirmado) setConfirmado(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Demonstração frontend: valida os campos e mostra confirmação local.
    // Nenhum dado é transmitido a um servidor ou serviço de e-mail.
    if (event.currentTarget.reportValidity()) {
      setConfirmado(true);
      setForm({ nome: '', email: '', assunto: '', mensagem: '' });
    }
  }

  return (
    <main className="inner-page" id="conteudo">
      <PageIntro
        eyebrow="Vamos conversar"
        title={<>Sua viagem começa com um <span>olá!</span></>}
        description="Tem uma ideia de viagem ou quer saber mais sobre um destino? Preencha o formulário de demonstração abaixo."
      />
      <section className="contact-layout" aria-label="Formulário de contato">
        <div className="contact-info">
          <span className="section-heading__eyebrow">Conte com a gente</span>
          <h2>Qual é a viagem dos seus sonhos?</h2>
          <p>Conte o que você gostaria de conhecer. Criamos esta página para demonstrar como um formulário React pode utilizar estado, eventos e validação de campos.</p>
          <div className="contact-info__tip">
            <span aria-hidden="true">✧</span>
            <div><strong>Projeto demonstrativo</strong><p>Os dados preenchidos não são enviados. Nenhum serviço de atendimento está conectado.</p></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="nome">Seu nome <span aria-hidden="true">*</span></label>
            <input id="nome" name="nome" value={form.nome} onChange={handleChange} minLength={2} maxLength={100} autoComplete="name" placeholder="Como podemos chamar você?" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Seu e-mail <span aria-hidden="true">*</span></label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} maxLength={150} autoComplete="email" placeholder="seuemail@exemplo.com" required />
          </div>
          <div className="form-row">
            <label htmlFor="assunto">Assunto <span aria-hidden="true">*</span></label>
            <input id="assunto" name="assunto" value={form.assunto} onChange={handleChange} minLength={3} maxLength={120} placeholder="Sobre o que gostaria de conversar?" required />
          </div>
          <div className="form-row">
            <label htmlFor="mensagem">Mensagem <span aria-hidden="true">*</span></label>
            <textarea id="mensagem" name="mensagem" value={form.mensagem} onChange={handleChange} rows={5} minLength={10} maxLength={2000} placeholder="Conte um pouco sobre sua ideia de viagem..." required />
          </div>
          <button className="button button--primary" type="submit">Concluir demonstração <span aria-hidden="true">↗</span></button>
          {confirmado && (
            <p className="form-confirmation" role="status">✓ Formulário validado com sucesso! Esta é uma demonstração: os dados não foram enviados.</p>
          )}
        </form>
      </section>
    </main>
  );
}
