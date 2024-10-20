import './Button.css';
// import { useState } from 'react';

// function Button({text, onClick}) {



//   return (
    
//       <button className='button' onClick={onClick}>{text}</button>
      
    
//   )
// }

// export default Button


const Button = ({ children, onClick, type = 'button', className = '', disabled = false}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${className}`} 
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button