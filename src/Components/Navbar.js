import React from 'react'
import logo from '../images/logo.svg'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

const Navbar = () => {
  return (
      <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
{/* 
        <ul className="nav-links" id="nav-links">
          {pageLinks.map(link => {
            return (
              <li key={link.id}> 
              <a href={link.href} className="nav-link"> 
                 {link.text} </a>
              </li>
            );
          })}        
        </ul> */}

        <ul className="nav-icons">
           {socialLinks.map(link => {
           
            return (
               <SocialLink key={link.id} {...link} itemClass="nav-icon"/>
            );
          })}     

          {/* <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-squarespace"></i
            ></a>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
