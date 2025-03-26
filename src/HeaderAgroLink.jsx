import React from "react";
import { Link } from "react-router-dom";
import logoFundoVerde from "./assets/logo-fundo-verde.svg";
import userIcon from "./assets/user02.png";

function HeaderAgroLink() {
  return (
    <header className="header-green p-3">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between top-header">
          {/* Logo */}
          <div className="col-auto d-flex align-items-center brand-col">
            <Link to="/">
              <img src={logoFundoVerde} alt="AgroLink Logo" className="logo-big" />
            </Link>
          </div>

          {/* Área do Usuário + Botão de Entrar */}
          <div className="col-auto d-flex align-items-center">
            <Link to="/login" className="btn btn-outline-light me-3">Entrar</Link>
            <img src={userIcon} alt="Usuário" className="user-icon" />
          </div>
        </div>

        {/* Menu inferior */}
        <div className="row mt-3 bottom-header">
          <div className="col d-flex justify-content-center gap-4 menu-bottom">
            <Link to="/" className="menu-link">Home</Link>
            <Link to="#" className="menu-link">Postos de Alimentos</Link>
            <Link to="#" className="menu-link">Comunidade</Link>
            <Link to="#" className="menu-link">Sobre Nós</Link>
            <Link to="/suporte-e-feedback" className="menu-link">Suporte e Feedback</Link>


          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderAgroLink;
