import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import NotFoundPage from "./pages/not_found_page/NotFoundPage.jsx";

const root = document.getElementById("root");

ReactDom.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
