import React, { useEffect } from "react";
import "./CommonRegisterForm.css";
import agrolinkLogo from "../../assets/logo-fundo-verde.svg";
import agrolinkLogoBranca from "../../assets/logo-fundo-branco.svg";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"
import { useNavigate } from "react-router";

export default function CommonRegisterForm() {

    let navigate = useNavigate();
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
        if(data.type == 'consumidor'){
            navigate("/cadastro/consumidor", {state: data})
        }
        if(data.type == 'voluntario'){
            navigate("/cadastro/voluntario", {state: data})
        }
    }
    };

  return (
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
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="type" id="consumidor" value="consumidor" {...register("type", { required: true })}/>
                  <label className="form-check-label w-100 text-start" for="consumidor">
                    Consumidor
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="type" value="voluntario" id="voluntario" {...register("type", { required: true })}/>
                  <label className="form-check-label w-100 text-start" for="voluntario">
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
  );
}
