import React, {useState} from 'react'; 
import upArrow from "./assets/up-arrow.svg"
  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <div className="scroll-btn-container">
        <button className="scroll-btn" onClick={scrollToTop} style={{visibility: visible ? 'visible' : 'hidden', opacity: visible ? "0.8" : "0"}}> 
            <img className="up-arrow" src={upArrow} ></img> 
        </button> 
    </div>
  ); 
} 
  
export default ScrollButton; 