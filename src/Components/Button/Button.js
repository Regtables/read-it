import React from 'react'
import './Button.css'

function Button({text, color, size, favorite, style}) {

  var height = size;
  var width = size*14

  const classType = favorite ? 'button-container favorite' : 'button-container';

  return (
    <div className = {classType}>
      <p>{text}</p>
    </div>
  )
}

export default Button
