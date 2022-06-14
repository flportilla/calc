import React from 'react'
import '../styles/Button.css'

function Button({ children }) {

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
    >
      {children}
    </div>
  )
}

export default Button