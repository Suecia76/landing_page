import React, { useState } from "react";
import { Nav } from "../components/Nav";
const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "¿Esto es con plata real?",
      answer:
        "No. Esta app es para ayudarte a organizar y visualizar tus ingresos, pero no maneja dinero real ni realiza transacciones.",
    },
    {
      id: 2,
      question: "¿Qué tipos de ingresos puedo registrar?",
      answer:
        "Cualquiera: sueldos, ventas, trabajos freelance, reintegros… todo lo que quieras tener registrado para llevar un control.",
    },
    {
      id: 3,
      question: "¿Puedo cargar ingresos que todavía no cobré?",
      answer:
        "Sí. Podés marcarlos como “pendientes” y cambiarlos a “pagados” cuando te los depositen.",
    },
    {
      id: 4,
      question: "¿Se pueden registrar ingresos en cuotas?",
      answer:
        "Sí. Si cobrás en partes, podés indicar cuántas cuotas son y ver su estado.",
    },
    {
      id: 5,
      question: "¿Tengo que crear una cuenta?",
      answer:
        "Sí, es necesaria para guardar tus ingresos y acceder a ellos desde cualquier dispositivo.",
    },
    {
      id: 6,
      question: "¿Mis datos están seguros?",
      answer:
        "Sí. Toda tu información se guarda de forma segura y solo vos podés verla.",
    },
    {
      id: 7,
      question: "¿La app tiene estadísticas o gráficos?",
      answer:
        "Sí. Vas a ver resúmenes visuales de cuánto ganás, con gráficos que te ayudan a entender tu evolución.",
    },
    {
      id: 8,
      question: "¿Puedo corregir un ingreso si me equivoqué?",
      answer:
        "Sí. Podés editar o eliminar cualquier ingreso cuando lo necesites.",
    },
    {
      id: 9,
      question: "¿Puedo clasificarlos por categoría?",
      answer:
        "Sí. Podés usar categorías como “Sueldo”, “Ventas”, “Freelance”, etc., para organizarte mejor.",
    },
    {
      id: 10,
      question: "¿Funciona en el celular?",
      answer:
        "Sí, y de hecho está pensada para celular. En computadora también se puede usar, pero se va a ver como si fuera la versión mobile (por ahora).",
    },
  ];

  return (
    <>
      <Nav />
      <section className="faqs">
        <div className="hero">
          <img src="/assets/logo-verde.png" alt="Logo de finz" />
          <h1 className="faqs__title">Preguntas Frecuentes</h1>
        </div>

        <div className="faqs__container">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq__item ${
                openIndex === index ? "faq__item--open" : ""
              }`}
            >
              <button className="faq__question" onClick={() => toggle(index)}>
                {faq.question}
                <span className="faq__icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="faq__answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Questions;
