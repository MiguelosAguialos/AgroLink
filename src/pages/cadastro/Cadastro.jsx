import React, { useEffect } from "react";
import "./Cadastro.css";
import agrolinkLogo from "../../assets/logo-fundo-verde.svg";
import { NavLink } from "react-router";

export default function Cadastro() {
  return (
    <div className="h-100 w-100 row m-0 p-0">
      <div className="menu d-none d-lg-flex flex-column col-lg-3 justify-content-around p-4">
        <NavLink to="/">
          <img src={agrolinkLogo} alt="" />
        </NavLink> 
        <h1>Bem vindo!</h1>
        <p className="w-100">Com a AgroLink, você encontrará postos de alimentos próximos e se conectará com uma rede de apoio. 
Juntos, garantimos que ninguém fique sem ajuda!</p>
        <i className="bi bi-basket h1"></i>
      </div>
      <div className="col">

      </div>
    </div>
  );
}
