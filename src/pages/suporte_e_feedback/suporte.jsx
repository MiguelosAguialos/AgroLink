import React, { useState } from "react";

function Suporte() {

    
  // Estados para cada campo
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Estados para mensagens de erro
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Função de validação para cada campo
  const validateFields = () => {
    let isValid = true;

    // Validação do nome
    if (!name.trim()) {
      setErrorName("O nome não pode ser vazio.");
      isValid = false;
    } else {
      // Verifica se tem pelo menos 2 palavras
      const words = name.trim().split(/\s+/);
      if (words.length < 2) {
        setErrorName("Informe pelo menos nome e sobrenome.");
        isValid = false;
      } else {
        setErrorName("");
      }
    }

    // Validação do email
    if (!email.trim()) {
      setErrorEmail("O e-mail não pode ser vazio.");
      isValid = false;
    } else {
      // Expressão regular simples para checar formato de email
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorEmail("Informe um e-mail válido.");
        isValid = false;
      } else {
        setErrorEmail("");
      }
    }

    // Validação do telefone
    if (!phone.trim()) {
      setErrorPhone("O telefone não pode ser vazio.");
      isValid = false;
    } else {
      // Aqui você pode usar um regex ou lógica mais específica
      // Exemplo simples: checar se tem ao menos 8 dígitos
      const numbersOnly = phone.replace(/\\D/g, ""); // remove tudo que não é dígito
      if (numbersOnly.length < 8) {
        setErrorPhone("Informe um número de telefone válido.");
        isValid = false;
      } else {
        setErrorPhone("");
      }
    }

    // Validação da mensagem
    if (!message.trim()) {
      setErrorMessage("A mensagem não pode ser vazia.");
      isValid = false;
    } else {
      // Tamanho mínimo 30, máximo 500
      if (message.trim().length < 30) {
        setErrorMessage("A mensagem deve ter no mínimo 30 caracteres.");
        isValid = false;
      } else if (message.trim().length > 500) {
        setErrorMessage("A mensagem não pode ultrapassar 500 caracteres.");
        isValid = false;
      } else {
        setErrorMessage("");
      }
    }

    return isValid;
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Executa validação
    const isFormValid = validateFields();

    if (isFormValid) {
      // Se tudo estiver válido, podemos enviar ou processar os dados
      alert("Suporte solicitado com sucesso!");
      // Limpar os campos
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    


    <div className="container mt-5">
      <h1>Formulário de Solicitação de Suporte</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
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

        {/* Descrição do Problema */}
        <div className="mb-3">
          <label className="form-label">Descrição do Problema</label>
          <textarea
            className={`form-control ${errorMessage ? "is-invalid" : ""}`}
            rows="4"
            placeholder="Descreva o problema..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errorMessage && <small className="text-danger">{errorMessage}</small>}
        </div>

        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Suporte;
