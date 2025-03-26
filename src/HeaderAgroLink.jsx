import React, { useState, useEffect, useRef } from "react";
import logoFundoVerde from "./assets/logo fundo verde.svg";
import userIcon from "./assets/user02.png";

/**
 * - Submenu abre/fecha ao clicar no usuário e fecha ao clicar fora.
 * - Mobile: nome do usuário some (d-none d-md-inline).
 * - Layout de 2 linhas:
 *   1) Logo + usuário (grandes)
 *   2) Menu fixo abaixo.
 */

function HeaderAgroLink() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);

  // Alternar o submenu ao clicar
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  // Fechar o submenu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header-green p-3">
      <div className="container-fluid">
        {/* Linha 1: Logo + Usuário */}
        <div className="row align-items-center justify-content-between top-header">
          {/* Logo (esquerda) */}
          <div className="col-auto d-flex align-items-center brand-col">
            <img src={logoFundoVerde} alt="AgroLink Logo" className="logo-big" />
          </div>

          {/* Área de usuário (direita) */}
          <div ref={userMenuRef} className="col-auto user-dropdown">
            <div className="user-area d-flex align-items-center" onClick={toggleUserMenu}>
              {/* Oculto no mobile => d-none d-md-inline */}
              <span className="user-name d-none d-md-inline fw-bold me-2 text-white">
                Bem-vindo(a), Yasmin
              </span>
              <img src={userIcon} alt="Usuário" className="user-icon" />
            </div>

            {/* Submenu exibido condicionalmente ao clicar */}
            {showUserMenu && (
              <div className="user-dropdown-menu">
                <a href="/minha-conta" className="dropdown-item">Gerenciar conta</a>
                <hr />
                <a href="/logout" className="dropdown-item">Sair da conta</a>
              </div>
            )}
          </div>
        </div>

        {/* Linha 2: Menu (botões) */}
        <div className="row mt-3 bottom-header">
          <div className="col d-flex justify-content-center gap-4 menu-bottom">
            <a href="#" className="menu-link">Home</a>
            <a href="#" className="menu-link">Postos de Alimentos</a>
            <a href="#" className="menu-link">Comunidade</a>
            <a href="#" className="menu-link">Sobre Nós</a>
            <a href="#" className="menu-link">Suporte</a>
            <a href="#" className="menu-link">Feedback</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderAgroLink;
