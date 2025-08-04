import React from "react";
import { Button } from "./Button";
import { OutlineButton } from "./OutlineButton";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero__container">
        <div className="snippet">
          <p>finz lo hace posible</p>
        </div>

        <div className="hero__text">
          <h1 className="title">
            Simplificá tus finanzas,{" "}
            <span className="title__highlight">alcanzá tus metas</span>
          </h1>

          <p className="text">
            Olvidarte de pagos, perder el control de tus gastos, o no saber
            cuánto llevás ahorrado ya no es un problema. finz te acompaña en
            cada paso de tus finanzas
          </p>
        </div>

        <div className="hero__buttons">
          <Button
            label="Descargar App"
            onClick={() =>
              window.open("https://front-vngw.vercel.app/instalar", "_blank")
            }
          />
          <OutlineButton label="Conocer más" />
        </div>
      </div>
    </section>
  );
};

export { Hero };
