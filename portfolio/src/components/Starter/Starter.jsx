import './Starter.css'
import { useState, useRef, useEffect } from 'react';

function Starter() {
    const hiRef = useRef(null);
  
    useEffect(() => {
      const hiElement = hiRef.current;
      
      hiElement.addEventListener('animationend', () => {
        hiElement.remove();
      });
    }, []);

    return(
        <>
        <div className="info">
            <h1 className="hi" ref={hiRef}>Hi</h1>
            <h1 className='my-name'>I'M KRISHNESHVAR</h1>
        </div>
        </>
    )
}

export default Starter
