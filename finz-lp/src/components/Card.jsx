import React from 'react'

const Card = ({title, description, icon, onClick, selected= false}) => {
  return (
    <div className={`card ${selected ? "card--selected" : ""}`} onClick={onClick} >
      <div>
        <img className='card__icon' src={icon} alt={title} />
      </div>

      <div className='card__info'>
        <h3 className='card__title'>{title}</h3>
        <p className='card__text'>{description}</p>
      </div>
    </div>
  )
}

export  {Card}
