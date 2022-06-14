import React from 'react'

function Button({ children }) {

  function isOperator(value) {
    return isNaN(value) && (value !== '.') && (value !== '=')
  };

  return (
    <div
      className={`button_container ${isOperator(children) ? 'operator' : null}`}
    >
      <button>{children}</button>
    </div>
  )
}

export default Button