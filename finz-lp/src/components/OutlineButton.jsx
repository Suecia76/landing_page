import React from 'react'

const OutlineButton = ({label, color = "green" , size = "large", ...moreProps}) => {
  return (
    <button className={`btn btn--${size} btn--outline btn--outline-${color}`} {...moreProps}>
      {label}
    </button>
  )
}

export {OutlineButton}
