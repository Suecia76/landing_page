import React from "react";
import { Button } from "./Button";

const CallToAction = () => {
  return (
    <div className="cta">
      <div className="cta__info">
        <h2 className="title-h2 title-h2--light">
          Llevá tus finanzas al{" "}
          <span className="title-h2 title-h2--light-hl">siguiente nivel</span>
        </h2>

        <div className="cta__qr-container">
          <img className="cta__qr" src="/assets/qr.png" alt="QR" />
        </div>

        <Button
          label="Descargar App"
          onClick={() =>
            window.open("https://front-vngw.vercel.app/instalar", "_blank")
          }
        />
      </div>
    </div>
  );
};

export { CallToAction };
