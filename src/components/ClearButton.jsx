import React from 'react'
import '../styles/ClearButton.css'

function ClearButton({ children, handleClick }) {
  return (
    <div
      className='clear_button'
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default ClearButton