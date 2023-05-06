import React, {useState} from 'react';
import "../stylesheets/ScrollButton.css";
import pickleRick from "../assets/pickleRick.png";
  
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
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button className='scrollButton' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
    </button>
  );
}
  
export default ScrollButton;