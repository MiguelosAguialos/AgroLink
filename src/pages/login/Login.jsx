import "./Login.css";
import { Link } from "react-router";
import agrolinkLogo from "../../assets/logo.jpg";

export default function Login() {
  return (
    <body class="bg-light">
      <div id="screen" class="row text-center p-0 m-0">
        <div class="col-3 h-100 bg-success p-3">
          <img
            id="logo-header"
            class="img-fluid rounded"
            src={agrolinkLogo}
            alt=""
          />
          <h1 class="mt-5">Bem vindo!</h1>
        </div>
        <div class="col">col2</div>
      </div>
    </body>
  );
}
