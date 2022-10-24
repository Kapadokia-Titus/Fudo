import '../css/style.css'
import React from "react";
import logo from "../img/logo.png"
import discover from "../img/salad.png"
import { Link } from 'react-router-dom';

export default function NavBar(){

    return(
      <header className="header">
      <Link to="/" className="logo"><img src={logo} height='40px'/></Link>
      <nav className="navbar">
          <Link to='/discover'> <button type="button" className="btn"><img src={discover} height='25px'/>   Discover</button></Link>
      </nav>

      <div className="input-group">
        <input type="search" className="form-control rounded" placeholder="I Want To Cook..." aria-label="Search" aria-describedby="search-addon" />
        <button type="button" className="btn btn-outline-primary">search</button>
      </div>
  </header>
    )
}