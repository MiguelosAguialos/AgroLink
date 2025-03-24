import { useState } from "react";
import agrolinkLogoFundoVerde from "./assets/logo fundo verde.svg";
import agrolinkLogoFundoBranco from "./assets/logo fundo branco.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <nav class="navbar navbar-expand-lg p-2 ps-4 sticky-top d-flex align-items-center">
        <a href="" class="navbar-brand">
          <img
            src={agrolinkLogoFundoVerde}
            class="logo--header d-none d-lg-block img-fluid rounded"
            alt="logo header"
          />
          <img
            src={agrolinkLogoFundoBranco}
            class="logo--header d-block d-lg-none img-fluid rounded"
            alt="logo header"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Portal
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Comunidade
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Sobre Nós
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Suporte e Feedback
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main class="container-fluid">
        <p>teste</p>
      </main>
      <footer class="fsticky-bottom">footer</footer>
    </body>
  );
}

export default App;
