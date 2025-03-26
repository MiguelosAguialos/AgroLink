import React from "react";
import "./Login.css";
import agrolinkLogo from "../../assets/logo-fundo-branco.svg";

export default function Login() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {/* Mobile */}
      <section className="main--mobile d-lg-none container-fluid d-flex flex-column align-items-center">
        <img src={agrolinkLogo} className="img-fluid" alt="logo" />
        <h1 className="m-2">AGROLINK PORTAL</h1>
        <form className="mt-4 d-flex flex-column">
          <div className="form-group">
            <label className="pb-1">Email</label>
            <input type="email" className="form-control" placeholder="Digite seu email!" />
            <small className="form-text text-muted">Nunca iremos compartilhar este email com ninguém!</small>
          </div>
          <div className="form-group mt-4">
            <label className="pb-1">Senha</label>
            <input type="password" className="form-control" placeholder="Digite sua senha!" />
          </div>
          <button type="submit" className="btn btn-success mt-4 mb-4">Entrar</button>
        </form>
      </section>

      {/* Desktop */}
      <section className="main--desktop d-none d-lg-flex flex-column">
        <div className="main--content bg-light border rounded row p-0">
          <div className="left-side col-4 d-flex flex-column align-items-center"></div>
          <div className="right-side col d-flex flex-column align-items-center justify-content-center">
            <img src={agrolinkLogo} className="img-fluid" alt="logo" />
            <h1 className="m-2">AGROLINK PORTAL</h1>
            <form className="mt-4 d-flex flex-column">
              <div className="form-group">
                <label className="pb-1">Email</label>
                <input type="email" className="form-control" placeholder="Digite seu email!" />
                <small className="form-text text-muted">Nunca iremos compartilhar este email com ninguém!</small>
              </div>
              <div className="form-group mt-4">
                <label className="pb-1">Senha</label>
                <input type="password" className="form-control" placeholder="Digite sua senha!" />
              </div>
              <button type="submit" className="btn btn-success mt-4 mb-4">Entrar</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
