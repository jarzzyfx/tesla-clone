import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/svg/tesla.svg'
import Sidebar from '../builders/Sidebar';
import NavComponent from '../builders/NavComponent';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen)


    const addNavStylings = () =>{
        const scrollPos = window.scrollY;
        const navbar = document.querySelector('.header');
        const navHeight = navbar.clientHeight;
        const navContainer = document.querySelector('.header_container');

        scrollPos > navHeight ? navContainer.classList.add('active') : navContainer.classList.remove('active')
    }

    window.addEventListener('scroll', addNavStylings)


    
  

  return (

      
      <div className="header">
        <Sidebar handleclick={handleClick} isopen={isOpen} barlinks={[
           {
            linkname: "find us",
            link: "find-us"
           }, 
           {
            linkname: "suppot",
            link: "support"
           },
           {
            linkname: "loacte tesla in our area",
            link: "locate"
           }
        ]}/>
       <div className="header_container">
            <div className="header_left">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        <div className="header_middle">
           <NavComponent modelLink={{title: 'Model S', link: "#"}}/>
            <NavComponent modelLink={{title: 'Model 3', link: "#"}}/>
            <NavComponent modelLink={{title:  'Model X', link: "#"}}/>
            <NavComponent modelLink={{title: 'Model Y', link :"#"}}/>
            <NavComponent modelLink={{title: 'Model S', link: "#"}}/>
            <NavComponent modelLink={{title: 'Solar Roof', link: "#"}}/>
            <NavComponent modelLink={{title: 'Solar Panels', link: "#"}}/>
        </div>
        <div className="header_right">
            <div  className="ds">
                <NavComponent  modelLink={{title: 'Shop', link: '#'}}/>
            <NavComponent  modelLink={{title: 'Account', link:'#'}}/>
            </div>
            
            <button type="button" onClick={handleClick} className="menubtn">menu</button>
            {/* <NavComponent onClick={handleClick} modelLink={{title: 'Menu'}}/> */}
        </div>
       </div>
    </div>
  )
}

export default Navbar