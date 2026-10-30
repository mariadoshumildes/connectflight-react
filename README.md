# ConnectFlight — Atividade Avaliativa de React

Projeto de página inicial em **React + Vite**, desenvolvido com base no protótipo do Figma disponibilizado no PDF da atividade de **Programação para WEB II**.

## O que o projeto contém

- **Início**: reprodução da composição do Figma, com ilustração, textos e rodapé ondulado.
- **Destinos**: tela adicional com quatro destinos ilustrativos e filtros funcionais (todos, nacionais, internacionais).
- **Ofertas**: tela adicional com três sugestões ilustrativas de roteiros de viagem.
- **Contato**: tela adicional com formulário de demonstração validado no navegador.
- **Navegação**: links Destinos, Ofertas e Contato no rodapé; cada link abre uma página React.
- **Responsividade**: adaptação para celular, tablet e computador, utilizando Flexbox e CSS Grid.
- **Componentização**: componentes reaproveitáveis para layout, rodapé, cards e títulos.

> Observação: o formulário de contato funciona como demonstração de estado, eventos e validação no React. Ele **não envia mensagens**, pois a atividade não solicita backend. Destinos e ofertas são exemplos, sem preços, reservas ou pacotes comerciais reais.

## Pré-requisitos

- Node.js recente compatível com Vite (Node 20.19+ ou 22.12+).
- VS Code (recomendado).

## Como executar no VS Code

1. Extraia o ZIP e abra a pasta `connectflight-react` no VS Code.
2. No terminal PowerShell, execute:

   ```powershell
   npm.cmd install
   npm.cmd run dev
   ```

3. Abra o endereço exibido no terminal (geralmente `http://localhost:5173/`).
4. Clique em **Destinos**, **Ofertas** e **Contato** para verificar as páginas.

> `npm.cmd` é utilizado porque algumas configurações do PowerShell do Windows bloqueiam o arquivo `npm.ps1`.

## Verificar a compilação

```powershell
npm.cmd run build
```

O resultado gerado ficará na pasta `dist/` (que não deve ser enviada ao GitHub).

## Estrutura de arquivos

```text
connectflight-react/
├── public/
│   ├── favicon.svg
│   └── imagens/               # Ilustração do protótipo e paisagens SVG
├── src/
│   ├── components/
│   │   ├── DestinationCard.jsx
│   │   ├── Footer.jsx
│   │   ├── OfferCard.jsx
│   │   ├── PageIntro.jsx
│   │   └── SiteLayout.jsx
│   ├── data/
│   │   └── destinos.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Destinos.jsx
│   │   ├── Ofertas.jsx
│   │   ├── Contato.jsx
│   │   └── NotFound.jsx
│   ├── styles/global.css
│   ├── App.jsx
│   └── main.jsx
├── docs/referencia-figma.png # Imagem de referência extraída do PDF da atividade
├── index.html
├── vite.config.js
└── package.json
```

## Como publicar no GitHub

1. Crie um repositório público vazio, por exemplo `connectflight-react`.
2. Abra o terminal na pasta do projeto e execute:

   ```powershell
   git init
   git add .
   git commit -m "Atividade React ConnectFlight com páginas e componentes"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/connectflight-react.git
   git push -u origin main
   ```

3. Substitua `SEU_USUARIO` pelo seu nome de usuário no GitHub.
4. Copie o link do repositório para a entrega da atividade.

## Como conferir os critérios da atividade

- [x] Projeto em React com Vite.
- [x] Página inicial construída seguindo o protótipo disponibilizado.
- [x] Componentes React reutilizáveis.
- [x] Três telas adicionais (Destinos, Ofertas e Contato).
- [x] Links do rodapé navegam até as telas.
- [x] CSS com Grid/Flexbox e media queries.
- [ ] Executar `npm.cmd install`, `npm.cmd run dev` e `npm.cmd run build` no computador.
- [ ] Testar os links e o formulário no navegador.
- [ ] Publicar e verificar o repositório público no GitHub.

## Referência do protótipo

Figma informado no enunciado: https://www.figma.com/file/U9czFYiF7DVGINZWMeMUGx/Aula-01---React?type=design&node-id=0-1&mode=design

A imagem da ilustração da tela inicial foi recortada da captura de tela presente **no PDF da atividade fornecido pela docente**. As ilustrações das páginas adicionais são desenhos SVG criados para esta implementação.
