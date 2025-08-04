import React, {useState, useEffect} from 'react'
import { Card } from './Card'


const Interactive = () => {
  
    const featuresRight = [
        {
            id: 1,
            title: "Metas de ahorro",
            description: "Fijá tus objetivos y fechas para ahorrar, y finz te ayuda a hacerlos realidad.",
            icon: "/assets/metasDeAhorro.png",
        },
        {
            id: 2,
            title: "Calendario de pagos",
            description: "Visualizá tus próximos pagos y sus vencimientos en un solo lugar.",
            icon: "/assets/calendarioDePagos.png",
        },
        {
            id: 3,
            title: "Datos por categoría",
            description: "Organiza tus ingresos y gastos en categorías que puedes ajustar según tu estilo de vida.",
            icon: "/assets/datosPorCategoria.png",
        }
    ]

     const featuresLeft = [
        {
            id: 4,
            title: "Armá tu presupuesto",
            description: "Ajustá tus límites de gasto por categorías para un mejor control.",
            icon: "/assets/armaTuPresupuesto.png",
        },
        {
            id: 5,
            title: "Análisis de tus gastos",
            description: "Te ofrece un análisis de tus patrones de gasto, ayudándote a decidir cómo podrías ahorrar.",
            icon: "/assets/analisisDeTusGastos.png",
        },
        {
            id: 6,
            title: "Gráficos simples",
            description: "Generá gráficos fáciles de entender para saber cómo estás gastando",
            icon: "/assets/graficosSimples.png",
        }
    ]

    const [selectedFeature, setSelectedFeature] = useState(1)

      function getARandomFeature () {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setSelectedFeature(randomNumber)
      }

      useEffect(() => {
          const interval = setInterval(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            setSelectedFeature(randomNumber)
          }, 3000)

          return () => clearInterval(interval) // limpiamos al desmontar
        }, [])
        

      function userClicksFeature (id){
        console.log(id);
        clearInterval(window.randomFeatureInterval)
        setSelectedFeature(id);
      }


  return (
    <div className='interactive'>
      <div className='interactive__cards interactive__cards--right'>
        {featuresRight.map(feature => <Card key={feature.id} title={feature.title} description={feature.description} icon={feature.icon} onClick={()=> userClicksFeature(feature.id)}   selected={selectedFeature === feature.id}
 />)}
      </div>

      <div className='interactive__image-container'>
        <img className='interactive__image' src={`/assets/celular${selectedFeature}.png`} alt="celular" />
      </div>

      <div className='interactive__cards interactive__cards--left'>
        {featuresLeft.map(feature => <Card key={feature.id} title={feature.title} description={feature.description} icon={feature.icon} onClick={()=> userClicksFeature(feature.id)} selected={selectedFeature === feature.id}
/>)}
      </div>
    </div>
    
  )
}

export {Interactive}
