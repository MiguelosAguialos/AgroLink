import React, { useEffect } from "react";
import "./Cadastro.css";
import agrolinkLogo from "../../assets/logo-fundo-verde.svg";
import agrolinkLogoBranca from "../../assets/logo-fundo-branco.svg";
import { NavLink } from "react-router";
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
      <div className="col p-4 d-flex flex-column justify-content-around align-items-center">
          <div className="title-form text-center">
            <img src={agrolinkLogoBranca} className="img-fluid d-lg-none" alt="" />
            <h1 className="p-0 m-0">Criar uma conta</h1>
            <p className="w-100 p-0 m-0">Dados comuns</p>
          </div>
          <form
              className="d-flex flex-column h-100 justify-content-around"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  {...register("nome", { required: true })}
                  placeholder="Nome completo"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  {...register("email", { required: true })}
                  aria-describedby="emailHelp"
                  placeholder="E-mail"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  {...register("celular", { required: true })}
                  placeholder="Número de celular (xx)xxxxx-xxxx"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  {...register("password", { required: true })}
                  placeholder="Senha"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  {...register("confirm-password", { required: true })}
                  placeholder="Confirmar senha"
                />
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                {/* Desktop */}
                <div className="form-check d-none d-lg-block w-25">
                  <input className="form-check-input" type="radio" name="type" id="consumidor" value="consumidor" {...register("type", { required: true })}/>
                  <label className="form-check-label" for="consumidor">
                    Consumidor
                  </label>
                </div>
                <div className="form-check d-none d-lg-block w-25">
                  <input className="form-check-input" type="radio" name="type" value="voluntário" id="voluntario" {...register("type", { required: true })}/>
                  <label className="form-check-label" for="voluntario">
                    Voluntário
                  </label>
                </div>
                {/* Mobile */}
                <div className="form-check w-50 d-lg-none">
                  <input className="form-check-input" type="radio" name="type" id="consumidor" value="consumidor" {...register("type", { required: true })}/>
                  <label className="form-check-label" for="consumidor">
                    Consumidor
                  </label>
                </div>
                <div className="form-check w-50 d-lg-none">
                  <input className="form-check-input" type="radio" name="type" id="voluntario" value="voluntário" {...register("type", { required: true })}/>
                  <label className="form-check-label" for="voluntario">
                    Voluntário
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-success">
                Próximo passo
              </button>
            </form>
            <NavLink to="/">Voltar</NavLink>
      </div>
    </div>
  );
}
