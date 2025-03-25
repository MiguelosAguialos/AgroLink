import { useState } from "react";
import agrolinkLogoFundoVerde from "./assets/logo fundo verde.svg";
import agrolinkLogoFundoBranco from "./assets/logo fundo branco.svg";
import firstImage from "./assets/First Image.png";
import conexao from "./assets/conexao.svg";
import facilidadeDeAcesso from "./assets/facilidade de acesso.svg";
import comunidadeAtiva from "./assets/comunidade ativa.svg";
import transparencia from "./assets/transparencia.svg";
import "./App.css";
import HomeCard from "./components/home-card/HomeCard";
import ContactCard from "./components/contact-card/ContactCard";

function App() {
  const cardsData = [
    {
      image: facilidadeDeAcesso,
      title: "Facilidade de acesso",
      description:
        "Encontre postos de alimentos próximos de você com apenas alguns cliques.",
    },
    {
      image: comunidadeAtiva,
      title: "Comunidade Ativa",
      description:
        "Encontre postos de alimentos próximos de você com apenas alguns cliques.",
    },
    {
      image: transparencia,
      title: "Transparência",
      description:
        "Encontre postos de alimentos próximos de você com apenas alguns cliques.",
    },
    {
      image: conexao,
      title: "Conexão",
      description:
        "Encontre postos de alimentos próximos de você com apenas alguns cliques.",
    },
  ];

  const contactData = [
    {
      image: "bi bi-geo-alt",
      title: "Transparência",
      description:
        "Encontre postos de alimentos próximos de você com apenas alguns cliques.",
    },
    {
      image: "bi bi-telephone",
      title: "Transparência",
      description:
        "Encontre postos de alimentos próximos de você com apenas alguns cliques.",
    },
    {
      image: "bi bi-envelope",
      title: "Transparência",
      description:
        "Encontre postos de alimentos próximos de você com apenas alguns cliques.",
    }
  ]

  return (
    <body>
      <nav class="navbar navbar-expand-lg p-2 ps-4 pt-3 pb-3 d-flex align-items-center">
        <a href="" class="navbar-brand d-flex align-items-center">
          <img
            src={agrolinkLogoFundoVerde}
            class="logo--header d-none d-lg-block img-fluid rounded"
            alt="logo header"
          />
          <img
            src={agrolinkLogoFundoBranco}
            class="logo--header d-block d-lg-none img-fluid rounded"
            alt="logo header"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="">
                HOME
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                Portal
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Doador
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Consumidor
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#comunidade">
                Comunidade
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Sobre Nós
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#fale-conosco">
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main class="container-fluid m-0 p-0">
        {/* Seção para mobile */}
        <section class="main--top--mobile d-flex text-center flex-column align-items-center d-lg-none">
          <img src={firstImage} class="img-fluid" alt="" />
          <h1>Juntos contra a fome!</h1>
          <p>Levando você até o seu alimento!</p>
          <button class="btn">Acesse o portal!</button>
          <div
            id="comunidade"
            class="main--cards--mobile container-fluid d-flex flex-column align-items-center"
          >
            {cardsData.map((card) => (
              <HomeCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div
            class="fale-conosco-mobile d-flex align-items-center flex-column p-2"
            id="fale-conosco"
          >
            <h1>Fale Conosco!</h1>
            <p>
              Você pode entrar em contato por meio dos canais mostrados abaixo
              ou mandar uma mensagem preenchendo o formulário!
            </p>
            <div class="card-contato d-flex flex-column text-start p-4 rounded">
              <h1>Contato</h1>
              <p>Entre em contato com a nossa equipe por meio dos seguintes canais disponíveis:</p>
              {contactData.map((card) => (
              <ContactCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
            </div>
          </div>
        </section>
        {/* Seção para desktop */}
        <section class="main--top pt-4 d-none d-lg-flex flex-column align-items-center text-center">
          <h1>Juntos contra a fome!</h1>
          <p>Levando você até o seu alimento!</p>
          <img src={firstImage} class="img-fluid" alt="" />
          <div class="d-flex justify-content-center">
            <button class="btn mt-5">Acesse o portal!</button>
          </div>
        </section>
        <section id="comunidade" class="container-fluid d-none d-lg-flex row">
          <div class="col text-center">
            {cardsData.map((card, index) =>
              index + 1 <= cardsData.length / 2 ? (
                <HomeCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ) : null
            )}
          </div>
          <div class="col text-center">
            {cardsData.map((card, index) =>
              index + 1 > cardsData.length / 2 ? (
                <HomeCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ) : null
            )}
          </div>
        </section>
        <section id="fale-conosco">
          <p>fale conosco</p>
        </section>
      </main>
    </body>
  );
}

export default App;
