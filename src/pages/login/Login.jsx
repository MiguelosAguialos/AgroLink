import "./Login.css";
import agrolinkLogo from "../../assets/logo fundo branco.svg";

export default function Login() {
  return (
    <body class="d-flex flex-column  justify-content-center align-items-center">
      {/* Mobile screen */}
      <section class="main--mobile d-lg-none container-fluid d-flex flex-column align-items-center">
        <img src={agrolinkLogo} class="img-fluid" alt="logo" />
        <h1 class="m-2">AGROLINK PORTAL</h1>
        <form class="mt-4 d-flex flex-column" action="">
          <div class="form-group">
            <label class="pb-1" for="email-field">Email</label>
            <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Digite seu email!" />
            <small id="emailHelp" class="form-text text-muted">Nunca iremos compartilhar este email com ninguém!</small>
          </div>
          <div class="form-group mt-4">
            <label class="pb-1" for="password-field">Senha</label>
            <input type="password" class="form-control" id="password-input" placeholder="Digite sua senha!" />
          </div>
          <button type="submit" class="btn btn-success mt-4 mb-4">Entrar</button>
        </form>
      </section>
      {/* Desktop screen */}
      <section class="main--desktop d-none d-lg-flex flex-column">
        <div class="main--content bg-light border rounded row p-0">
          <div class="left-side rounded col-4 d-flex flex-column align-items-center">
          </div>
          <div class="right-side col d-flex flex-column align-items-center justify-content-center">
            <img src={agrolinkLogo} class="img-fluid" alt="logo" />
            <h1 class="m-2">AGROLINK PORTAL</h1>
            <form class="mt-4 d-flex flex-column" action="">
              <div class="form-group">
                <label class="pb-1" for="email-field">Email</label>
                <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Digite seu email!" />
                <small id="emailHelp" class="form-text text-muted">Nunca iremos compartilhar este email com ninguém!</small>
              </div>
              <div class="form-group mt-4">
                <label class="pb-1" for="password-field">Senha</label>
                <input type="password" class="form-control" id="password-input" placeholder="Digite sua senha!" />
              </div>
              <button type="submit" class="btn btn-success mt-4 mb-4">Entrar</button>
            </form>
          </div>
        </div>
      </section>
    </body>
  );
}
