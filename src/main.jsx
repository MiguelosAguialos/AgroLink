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

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rota Principal */}
        <Route path="/" element={<Login />} />

        {/* Login */}
        <Route path="/home" element={<App />} />

        {/* Suporte e Feedback (Página com dois botões) */}
        <Route path="/suporte-e-feedback" element={<SuporteEFeedback />} />

        {/* Suporte (Formulário) */}
        <Route path="/suporte" element={<Suporte />} />

        {/* Feedback (Formulário + depoimentos) */}
        <Route path="/feedback" element={<Feedback />} />

        {/* 404: Página não encontrada */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
