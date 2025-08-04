import React from "react";
import {
  Nav,
  Hero,
  Button,
  Bento,
  Interactive,
  CallToAction,
  Footer,
} from "../components";

const Home = () => {
  return (
    <>
      <Nav />

      <Hero />

      <main>
        <section className="info-section container">
          <div className="info-section__info">
            <div>
              <h2 className="title-h2">
                Gestionar tu dinero
                <span className="title-h2--hl"> nunca fue tan sencillo</span>
              </h2>
              <p className="info-section__text">
                <span className="info-section__text--hl">finz </span>es la app
                que simplifica tus finanzas, brindándote control sobre tus
                gastos, metas de ahorro y alertas personalizadas.{" "}
              </p>
            </div>

            <div className="info-section__btn">
              <Button color="blue" label="Empezar a ahorrar" />
            </div>
          </div>

          <div className="info-section__image-container">
            <img
              className="info-section__image"
              src="/assets/celular1.png"
              alt=""
            />
          </div>
        </section>

        <section className="bento-section container">
          <h2 className="title-h2">
            finz <span className="title-h2--hl">te acompaña</span>
          </h2>

          <Bento />
        </section>

        <div className="info-section--bg">
          <section className="info-section ">
            <div className="info-section__image-container info-section__image-container--dark">
              <img
                className="info-section__image--small"
                src="/assets/notificaciones.png"
                alt="Notificaciones"
              />
            </div>

            <div className="info-section__info">
              <h2 className="title-h2">
                finz <span className="title-h2--hl">te avisa</span>
              </h2>

              <ul className="features">
                <li className="features__item">
                  cuando llegás al límite
                  <p className="features__description">
                    {" "}
                    Así podés ajustar tus gastos antes de pasarte.
                  </p>
                </li>

                <li className="features__item">
                  cómo vas con tus metas de ahorro
                  <p className="features__description">
                    {" "}
                    Una forma de celebrar cada avance financiero.
                  </p>
                </li>

                <li className="features__item">
                  cuando tenés que pagar
                  <p className="features__description">
                    {" "}
                    Para que no se te pase ninguna fecha importante.
                  </p>
                </li>

                <li className="features__item">
                  si te pasás con las cuotas
                  <p className="features__description">
                    {" "}
                    Para que no pierdas el control de tus gastos.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <section className="section-interactive container">
          <h2 className="title-h2">¿Cómo funciona?</h2>

          <Interactive />
        </section>

        <section className="container">
          <CallToAction />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
