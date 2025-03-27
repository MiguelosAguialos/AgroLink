import React, { useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "./feedback.css"; 

import HeaderAgroLink from "../../HeaderAgroLink";

import userIcon from "../../assets/user.png";
import userIcon2 from "../../assets/user02.png";

function Feedback() {
  // Estados para cada campo
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  // Estados para mensagens de erro
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorComment, setErrorComment] = useState("");

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

  // Função de validação
  const validateFields = () => {
    let isValid = true;

    // Validação do nome (mínimo 2 palavras)
    if (!name.trim()) {
      setErrorName("O nome não pode ser vazio.");
      isValid = false;
    } else {
      const words = name.trim().split(/\s+/);
      if (words.length < 2) {
        setErrorName("Informe pelo menos nome e sobrenome.");
        isValid = false;
      } else {
        setErrorName("");
      }
    }

    // Validação do e-mail (regex simples)
    if (!email.trim()) {
      setErrorEmail("O e-mail não pode ser vazio.");
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorEmail("Informe um e-mail válido.");
        isValid = false;
      } else {
        setErrorEmail("");
      }
    }

    // Validação do telefone (ao menos 8 dígitos numéricos)
    if (!phone.trim()) {
      setErrorPhone("O telefone não pode ser vazio.");
      isValid = false;
    } else {
      const numbersOnly = phone.replace(/\D/g, "");
      if (numbersOnly.length < 8) {
        setErrorPhone("Informe um número de telefone válido.");
        isValid = false;
      } else {
        setErrorPhone("");
      }
    }

    // Validação do comentário (entre 30 e 500 caracteres)
    if (!comment.trim()) {
      setErrorComment("O comentário não pode ser vazio.");
      isValid = false;
    } else {
      const length = comment.trim().length;
      if (length < 30) {
        setErrorComment("O comentário deve ter no mínimo 30 caracteres.");
        isValid = false;
      } else if (length > 500) {
        setErrorComment("O comentário não pode ultrapassar 500 caracteres.");
        isValid = false;
      } else {
        setErrorComment("");
      }
    }

    return isValid;
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateFields();
    if (isFormValid) {
      alert("Feedback enviado com sucesso!");
      // Limpar campos após envio
      setName("");
      setEmail("");
      setPhone("");
      setComment("");
    }
  };

  return (
    <>
      {/* Header */}
      <HeaderAgroLink />

      <div className="container-suporte"> 
        <h1>Formulário de Feedback</h1>
        <form onSubmit={handleSubmit}>
          {/* Nome */}
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className={`form-control ${errorName ? "is-invalid" : ""}`}
              placeholder="Digite seu nome e sobrenome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errorName && <small className="text-danger">{errorName}</small>}
          </div>

          {/* E-mail */}
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              className={`form-control ${errorEmail ? "is-invalid" : ""}`}
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorEmail && <small className="text-danger">{errorEmail}</small>}
          </div>

          {/* Telefone */}
          <div className="mb-3">
            <label className="form-label">Telefone</label>
            <input
              type="text"
              className={`form-control ${errorPhone ? "is-invalid" : ""}`}
              placeholder="Digite seu telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errorPhone && <small className="text-danger">{errorPhone}</small>}
          </div>

          {/* Comentário */}
          <div className="mb-3">
            <label className="form-label">Comentário</label>
            <textarea
              className={`form-control ${errorComment ? "is-invalid" : ""}`}
              rows="4"
              placeholder="Deixe seu feedback..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            {errorComment && (
              <small className="text-danger">{errorComment}</small>
            )}
          </div>

          <button type="submit" className="btn btn-success">
            Enviar
          </button>
        </form>
      </div>

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
    </>
  );
}

export default Feedback;
