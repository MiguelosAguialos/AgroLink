import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import userIcon from "../../assets/user.png";
import userIcon2 from "../../assets/user02.png";

function Feedback() {
  // Depoimentos de exemplo
  const depoimentos = [
    {
      id: 1,
      userImg: userIcon,
      userName: "Carlos Souza, Curitiba - PR",
      text: "“Como voluntário, o AgroLink me ajudou a organizar melhor as doações...”",
    },
    {
      id: 2,
      userImg: userIcon2,
      userName: "Maria Silva, São Paulo - SP",
      text: "“A AgroLink me ajuda a encontrar alimentos frescos...”",
    },
  ];

  return (
    <div className="container mt-5">
      <h1>Formulário de Feedback</h1>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" placeholder="Digite seu nome" />
        </div>
        
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input type="email" className="form-control" placeholder="Digite seu e-mail" />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input type="text" className="form-control" placeholder="Digite seu telefone" />
        </div>

        <div className="mb-3">
          <label className="form-label">Comentário</label>
          <textarea className="form-control" rows="4" placeholder="Deixe seu feedback..."></textarea>
        </div>

        <button type="submit" className="btn btn-success">Enviar</button>
      </form>

      {/* Carrossel de depoimentos */}
      <div className="my-5">
        <h2 className="text-center mb-4">Depoimentos</h2>
        <Carousel controls={false} interval={3000} indicators>
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
                    <footer className="blockquote-footer">{dep.userName}</footer>
                  </blockquote>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Feedback;
