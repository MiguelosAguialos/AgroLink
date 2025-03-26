import React from "react";
import HeaderAgroLink from "../../HeaderAgroLink"; // Ajuste o caminho conforme a estrutura do seu projeto
import "./suporte_e_feedback.css";

function SuporteEFeedback() {
  return (
    <>
      <HeaderAgroLink />

      {/* CONTEÚDO CENTRALIZADO */}
      <div className="suporte-e-feedback-wrapper">
        <div className="suporte-e-feedback-container">
          <h1 className="main-title">AGROLINK</h1>
          <p className="subtitle">Juntos, podemos fazer a diferença!</p>

          {/* 2 colunas: Suporte / Feedback */}
          <div className="options-row row justify-content-center">
            <div className="col-md-4 text-center box-col">
              <h3 className="mb-3">Precisa de ajuda?</h3>
              <p>
                Clique aqui para acessar nossa página de suporte e obter ajuda 
                com qualquer problema ou dúvida que você tenha.
              </p>
              <a href="/suporte" className="btn btn-support mt-3">
                Suporte
              </a>
            </div>

            <div className="col-md-4 text-center box-col">
              <h3 className="mb-3">Quer deixar um Feedback?</h3>
              <p>
                Clique aqui para acessar nossa página de feedback e compartilhar 
                suas opiniões e sugestões sobre a plataforma.
              </p>
              <a href="/feedback" className="btn btn-feedback mt-3">
                Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuporteEFeedback;
