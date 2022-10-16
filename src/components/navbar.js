import '../css/style.css'
import React from "react";
import logo from "../img/logo.png"
import { Link } from 'react-router-dom';

export default function NavBar(){

    return(
      <header className="header">
      <a href="#" className="logo"><img src={logo} height='40px'/></a>
      <nav className="navbar">
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/recipe'>Recipe</Link>
          <Link to='/popular'>Popular</Link>
          <Link to='/order'>Order</Link>
      </nav>

      <div className="input-group">
        <input type="search" className="form-control rounded" placeholder="I Want To Cook..." aria-label="Search" aria-describedby="search-addon" />
        <button type="button" className="btn btn-outline-primary">search</button>
      </div>
  </header>
    )
}