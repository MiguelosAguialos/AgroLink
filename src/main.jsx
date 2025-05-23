import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";
import NotFoundPage from "./pages/not_found_page/NotFoundPage.jsx";
import Login from "./pages/login/Login.jsx";
import SuporteEFeedback from "./pages/suporte_e_feedback/suporte_e_feedback.jsx";
import Suporte from "./pages/suporte_e_feedback/suporte.jsx";
import Feedback from "./pages/suporte_e_feedback/feedback.jsx";
import UserProfile from "./pages/perfil_usuario/UserProfile.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Cadastro */}
        <Route path="/cadastro" element={<Cadastro />}>
          <Route index element={<CommonRegisterForm />}></Route>
          <Route path="voluntario" element={<VoluntarioRegisterForm />}></Route>
          <Route path="consumidor" element={<ConsumidorRegisterForm />}></Route>
        </Route>

        {/* Home */}
        <Route path="/home" element={<App />} />

        {/* Suporte e Feedback (Página com dois botões) */}
        <Route path="/suporte-e-feedback" element={<SuporteEFeedback />} />

        {/* Suporte (Formulário) */}
        <Route path="/suporte" element={<Suporte />} />

        {/* Feedback (Formulário + depoimentos) */}
        <Route path="/feedback" element={<Feedback />} />

        {/* 404: Página não encontrada */}
        <Route path="*" element={<NotFoundPage />} />

        {/* User Profile */}
        <Route path="/perfil_usuario" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
