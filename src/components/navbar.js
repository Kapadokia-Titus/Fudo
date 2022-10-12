import '../css/style.css'
import React from "react";
import logo from "../img/logo.png"

export default function NavBar(){

    return(
      <header class="header">
      <a href="#" class="logo"><img src={logo} height='40px'/></a>
      <nav class="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#popular">Popular</a>
          <a href="#menu">Menu</a>
          <a href="#order">Order</a>
          <a href="#blogs">Blogs</a>
      </nav>

      <div class="input-group">
        <input type="search" class="form-control rounded" placeholder="I Want To Cook..." aria-label="Search" aria-describedby="search-addon" />
        <button type="button" class="btn btn-outline-primary">search</button>
      </div>
  </header>
    )
}