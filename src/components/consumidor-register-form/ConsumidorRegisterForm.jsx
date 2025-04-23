import React, { useEffect } from "react";
import "./ConsumidorRegisterForm.css";
import agrolinkLogo from "../../assets/logo-fundo-verde.svg";
import agrolinkLogoBranca from "../../assets/logo-fundo-branco.svg";
import { NavLink, useLocation } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"
import { useNavigate } from "react-router";
import { createUserConsumidor } from "../../services/auth.service";

export default function ConsumidorRegisterForm(){

    let navigate = useNavigate();
    const {state} = useLocation();
    let user = state
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        for(let item in data){
            user[item] = data[item] 
        }
        const res = await createUserConsumidor(user)
        if(res.code == 400){
          Swal.fire({
            title: res.title,
            text: res.message,
            icon: "error",
            confirmButtonText: "Voltar",
            heightAuto: false,
            timer: 2000,
          });
        } 
        if(res.code == 200){
          Swal.fire({
            title: 'Cadastrado!',
            text: res.message,
            icon: "success",
            confirmButtonText: "Voltar",
            heightAuto: false,
            timer: 2000,
          }).then((res) => {
            navigate("/home")
          });
        }
    };
    
    return (
      <div className="col p-4 d-flex flex-column justify-content-around align-items-center">
          <div className="title-form text-center">
            <img src={agrolinkLogoBranca} className="img-fluid d-lg-none" alt="" />
            <h1 className="p-0 m-0">Criar uma conta</h1>
            <p className="w-100 p-0 m-0">Consumidor</p>
          </div>
          <form
              className="d-flex flex-column h-100 justify-content-around"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  {...register("endereco", { required: true })}
                  placeholder="Endereço"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  {...register("complemento", { required: false })}
                  aria-describedby="emailHelp"
                  placeholder="Complemento"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  {...register("CEP", { required: true })}
                  placeholder="CEP"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  {...register("qtdPessoas", { required: true })}
                  placeholder="N° de pessoas na família"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  {...register("preferenciasAlimentares", { required: false })}
                  placeholder="Preferências Alimentares"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  {...register("restricoesAlimentares", { required: false })}
                  placeholder="Restrições alimentares ou necessidades especiais"
                />
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="termosUso" id="termosUso" {...register("termosUso", { required: true })}/>
                  <label className="form-check-label w-100 text-start" for="termosUso">
                    Aceitar os <a href="">Termos de uso</a>
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="privacidade" value="privacidade" {...register("privacidade", { required: true })}/>
                  <label className="form-check-label w-100 text-start" for="privacidade">
                    Aceitar a <a href="">Política de Privacidade</a>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-success">
                Próximo passo
              </button>
            </form>
            <NavLink to="/cadastro">Voltar</NavLink>
      </div>
  );
}