import React from 'react'
import '../styles/Button.css'

function Button({ children, handleClick }) {

  function isOperator(value) {
    return isNaN(value) && (value !== '.') && (value !== '=')
  };

  return (
    <div
      className={
        `button_container ${isOperator(children) ?
          'operator' :
          ''}`
          .trimEnd()}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  )
}

export default Button