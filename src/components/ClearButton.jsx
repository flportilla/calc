import React from 'react'
import '../styles/ClearButton.css'

function ClearButton({ children }) {
  return (
    <div
      className='clear_button'
    >
      {children}
    </div>
  )
}

export default ClearButton