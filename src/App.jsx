import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

// Imagens
import agrolinkLogoFundoBranco from "./assets/logo fundo branco.svg";
import firstImage from "./assets/First Image.png";
import slide01 from "./assets/slide01.png";
import slide02 from "./assets/slide02.png";
import slide03 from "./assets/slide03.png";
import slide04 from "./assets/slide04.png";
import userIcon from "./assets/user.png";
import userIcon2 from "./assets/user02.png";

import conexao from "./assets/conexao.svg";
import facilidadeDeAcesso from "./assets/facilidade de acesso.svg";
import comunidadeAtiva from "./assets/comunidade ativa.svg";
import transparencia from "./assets/transparencia.svg";

import "./App.css";
import HeaderAgroLink from "./HeaderAgroLink";

import HomeCard from "./components/home-card/HomeCard";
import ContactCard from "./components/contact-card/ContactCard";
import FaleConosco from "./pages/fale_conosco/FaleConosco";

function App() {
  // Exemplo de dados para cards (mobile)
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

  // Exemplo de dados (contato mobile)
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
    },
  ];

  // Exemplo de depoimentos (desktop)
  const depoimentos = [
    {
      id: 1,
      userImg: userIcon,
      userName: "Carlos Souza, Curitiba - PR",
      text: "“Como voluntário, o AgroLink me ajudou a organizar melhor as doações e a me conectar com outras pessoas que querem fazer a diferença.”",
    },
    {
      id: 2,
      userImg: userIcon,
      userName: "Maria Silva, São Paulo - SP",
      text: "“A AgroLink me ajuda a encontrar alimentos frescos e de qualidade na minha região, evitando desperdícios e fortalecendo a comunidade local.”",
    },
    {
      id: 3,
      userImg: userIcon2,
      userName: "Ana Costa, Belo Horizonte - MG",
      text: "“A funcionalidade de chat em tempo real é incrível! Já aprendi várias receitas novas e fiz amigos na comunidade. O AgroLink realmente promove a união e o apoio mútuo.”",
    },
    {
      id: 4,
      userImg: userIcon2,
      userName: "Yasmin Ferreira, Rio de Janeiro - RJ",
      text: "“AgroLink facilitou muito o acesso aos postos de alimentos. A plataforma é fácil de usar e as notificações me ajudam a não perder oportunidades de doação.”",
    },
  ];

  return (
    <body>
      {/* HEADER CUSTOM */}
      <HeaderAgroLink />

      {/* MAIN WRAPPER (onde começa o layout mobile/desktop) */}
      <main className="container-fluid m-0 p-0 main-wrapper">
        {/* =================== MOBILE =================== */}
        <section className="main--top--mobile d-flex text-center flex-column align-items-center d-lg-none">
          {/* Logo para mobile (opcional) */}
          <img
            src={agrolinkLogoFundoBranco}
            className="logo--header d-block d-lg-none img-fluid rounded"
            alt="logo mobile"
          />

          <img src={firstImage} className="img-fluid" alt="banner mobile" />
          <h1>Juntos contra a fome!</h1>
          <p>Levando você até o seu alimento!</p>
          <button className="btn">Acesse o portal!</button>

          {/* Cards de comunidade (só mobile) */}
          <div
            id="comunidade"
            className="main--cards--mobile container-fluid d-flex flex-column align-items-center"
          >
            {cardsData.map((card, index) => (
              <HomeCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          {/* Fale Conosco (só mobile) */}
          <div
            className="fale-conosco-mobile d-flex align-items-center flex-column p-2"
            id="fale-conosco"
          >
            <h1>Fale Conosco!</h1>
            <p>
              Você pode entrar em contato por meio dos canais mostrados abaixo
              ou mandar uma mensagem preenchendo o formulário!
            </p>
            <div className="card-contato d-flex flex-column text-start p-4 rounded">
              <h1>Contato</h1>
              <p>
                Entre em contato com a nossa equipe por meio dos seguintes
                canais disponíveis:
              </p>
              {contactData.map((item, idx) => (
                <ContactCard
                  key={idx}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =================== DESKTOP =================== */}
        {/* Carrossel Banners Desktop */}
        <section className="d-none d-lg-block my-5">
          <Container>
            <Carousel interval={3000} indicators controls={false}>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img src={slide01} className="img-fluid" alt="Banner 1" />
                  </Col>
                  <Col md={6}>
                    <h2>Notificações e Atualizações</h2>
                    <p>Um novo posto de alimentos foi inaugurado...</p>
                    <Button className="mb-3">Configurar notificações</Button>
                    <p>Participe do nosso evento de arrecadação...</p>
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={{ span: 6, order: "last" }}>
                    <img src={slide02} className="img-fluid" alt="Banner 2" />
                  </Col>
                  <Col md={{ span: 6, order: "first" }}>
                    <h2>Relatórios e Feedback</h2>
                    <p>Os relatórios e feedback são essenciais...</p>
                    <Button className="mb-3">Gerar relatório</Button>
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img src={slide03} className="img-fluid" alt="Banner 3" />
                  </Col>
                  <Col md={6}>
                    <h2>Notificações e Atualizações</h2>
                    <Button className="mb-3">Configurar notificações</Button>
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={{ span: 6, order: "last" }}>
                    <img src={slide04} className="img-fluid" alt="Banner 4" />
                  </Col>
                  <Col md={{ span: 6, order: "first" }}>
                    <h2>Relatórios e Feedback</h2>
                    <Button className="mb-3">Gerar relatório</Button>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Container>
        </section>

        {/* Carrossel Depoimentos Desktop */}
        <section className="d-none d-lg-block my-5">
          <Container>
            <h2 className="text-center mb-4">Depoimentos</h2>
            <Carousel interval={3000} indicators controls={false}>
              {depoimentos.map((dep) => (
                <Carousel.Item key={dep.id}>
                  <Row className="align-items-center justify-content-center">
                    <Col md={2} className="text-center">
                      <img
                        src={dep.userImg}
                        className="img-fluid"
                        alt="Usuário"
                        style={{ maxWidth: "80px" }}
                      />
                    </Col>
                    <Col md={8}>
                      <blockquote className="blockquote">
                        <p>{dep.text}</p>
                        <footer className="blockquote-footer">
                          {dep.userName}
                        </footer>
                      </blockquote>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </section>

        {/* Seção Fale Conosco (exibida em ambos) */}
        <section id="fale-conosco">
          <FaleConosco />
        </section>
      </main>
    </body>
  );
}

export default App;
