import React from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./styles.css";
interface MenuBarProps {
  voltar?: string; //deixa ela opcional
}

const MenuBar: React.FC<MenuBarProps> = props => {
  return (
    <header className="page-header">
      <Navbar fixed="top" className="buttons-container">
        {props.voltar && <Link to="/">Voltar</Link>}
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Link to="/">Sobre</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Contato</Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default MenuBar;
