import React, { useState } from "react";
import "./FaleConosco.css";

const FaleConosco = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por ${formData.nome}!`);
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div className="fale-conosco-container">
      <h2>Fale Conosco</h2>
      <p>Entre em contato através do formulário abaixo.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensagem"
          placeholder="Digite sua mensagem..."
          value={formData.mensagem}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FaleConosco;
