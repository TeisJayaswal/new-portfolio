import React from 'react';
import { Link } from 'react-router-dom';
import Home from "../images/home.png"
import Contact from "../images/contact.png"
import Profile from "../images/profile.png"
import ComputerTJ from "../images/tj-computer.png"

export default function NavBar() {
  return (
    <nav>
      <ul>
        <img className="nav-image" alt="computer" src={ComputerTJ} />
        <h2>Teis Jayaswal</h2>
        <li><img alt="home" src={Home}/><Link to="/">HOME</Link></li>

        <li><img alt="home" src={Profile}/><Link to="/about">PORTFOLIO</Link></li>

        <li><img alt="home" src={Contact}/><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}
