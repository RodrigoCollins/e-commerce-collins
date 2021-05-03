import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png';
import './Navbar.css'
import {Link} from 'react-router-dom'
import CartWidget from "./CartWidget"





export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
 
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);


  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
          
                <li>
                 <Link to='/about'>About</Link>
                </li>
                <li>
                 <Link to='/'>Shop</Link>
                </li>
                <li>
                 <Link to='/faq'>FAQ</Link>
                </li>
                <li>
                 <Link to='/cart'><CartWidget/></Link>
                </li>

              
            
           
          </ul>
        
            
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;