import React from "react";
import { Button } from "./Button";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <a className="nav__link" href="/">
          <img
            className="nav__logo"
            src="/assets/logo-verde.png"
            alt="Logo Finz"
          />
        </a>

        <div className="nav__actions">
          <a className="nav__link" href="/faqs">
            FAQs
          </a>
          <Button
            size="medium"
            label="Descargar"
            onClick={() =>
              window.open("https://front-vngw.vercel.app/instalar", "_blank")
            }
          />
        </div>
      </div>
    </nav>
  );
};

export { Nav };
