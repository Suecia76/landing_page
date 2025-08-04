import React from "react";

const Bento = () => {
  return (
    <div className="bento">
      <div className="bento__row">
        <div className="bento__col">
          <div className="bento__item bento__item--spaced bento__item--black">
            <img
              className="bento__img"
              src="/assets/graficoDeLinea.png"
              alt="gráficos de línea que fluctúan"
            />
          </div>

          <div className="bento__item bento__item--full bento__item--indigo">
            <img
              src="/assets/recordatorios.png"
              alt="recordatorios que la app brinda"
            />
          </div>
        </div>

        <div className="bento__col">
          <div className="bento__item bento__item--dark-blue">
            <img src="/assets/celular.png" alt="imagen de la home de la app" />
          </div>
          <div className="bento__item bento__item--black">
            <img
              src="/assets/graficosDeBarras.png"
              alt="gráficos de barras fluctuando"
            />
          </div>
        </div>

        <div className="bento__col">
          <div className="bento__item bento__item--top-spaced bento__item--black">
            <img
              src="/assets/graficosDeBarras2.png"
              alt="otros gráficos de barras"
            />
          </div>
          <div className="bento__item bento__item--blue bento__item--full bento__item--centered">
            <h3 className="bento__title">
              ¡Tomá el control de{" "}
              <span className="bento__title--highlight">tus finanzas!</span>
            </h3>
            <p className="bento__text">
              Con <span className="bento__text--bold">finz</span>, organizar tus
              ingresos, controlar tus gastos y alcanzar tus metas de ahorro es
              fácil y accesible.
            </p>

            <button
              className="bento__button"
              onClick={() =>
                window.open("https://front-vngw.vercel.app/instalar", "_blank")
              }
            >
              Descargar App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Bento };
