import React, { useEffect, useState } from 'react'
import "../web/Style.css"
import img from "../asset/net1.png"
import img1 from "../asset/avatar.png"
function Nav() {
    const[show,handleShow] = useState(false)
    useEffect(()=>{
      const handleScroll = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
        return () =>{
            window.removeEventListener("scroll",handleScroll);

        };
    },[]);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src={img} alt="Netflix Logo"  className='nav__logo' />
      <img src={img1} alt="Netflix Logo"  className='nav__avatar'/>
    </div>
  )
}

export default Nav
