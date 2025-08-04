import React from 'react'

const Button = ({color = "green", label, size = "large", ...otherProps}) => {
  return (
    <button className={`btn btn--${size} btn--filled btn--filled-${color} `} {...otherProps}>
      {label}
    </button>
  )
}

export {Button}
