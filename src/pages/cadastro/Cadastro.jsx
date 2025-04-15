import React, { useEffect } from "react";
import "./Cadastro.css";
import agrolinkLogo from "../../assets/logo-fundo-verde.svg";
import agrolinkLogoBranca from "../../assets/logo-fundo-branco.svg";
import { NavLink, Outlet } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"

export default function Cadastro() {

const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    if(data['confirm-password'].trim() != data['password'].trim()){
      Swal.fire({
        title: "Erro",
        text: "As senhas não correspondem!",
        icon: "error",
        confirmButtonText: "Voltar",
        heightAuto: false,
        timer: 2000,
      });
    } else {
      console.log(data)
    }
  };

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
      <Outlet />
    </div>
  );
}
