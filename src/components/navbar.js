import React from "react";
import logo from "../img/logo.png"
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

export default function NavBar(){

    return(
        <Navbar>
        <Navbar.Brand href="#"><img src={logo} height={25}/></Navbar.Brand>
        <Nav>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>Services</Nav.Item>
          <Nav.Item>Menu</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
      </Navbar>
    )
}