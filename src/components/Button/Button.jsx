import './Button.css';
import { useState } from 'react';

function Button() {

  const [text, setText] = useState('All countries');


  const clicked = () => {
    
    console.log('Click');
    setText('Hide all countries');
    console.log(text);

  
  }


  return (
    
      <button onClick={clicked} className='button'>{text}</button>
      
    
  )
}

export default Button