import React from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import FlechaIcon from "../../assets/svg/arrow.svg";
import "./styles.css";
interface MenuBarProps {
  voltar?: string; //deixa ela opcional
}

const Header: React.FC<MenuBarProps> = props => {
  return (
    <header className="page-header">
      <Navbar fixed="top" className="buttons-menubar">
        {props.children}
        {props.voltar && (
          <Link to="/">
            <img src={FlechaIcon} alt="Flecha Icon"></img>
          </Link>
        )}
        <Navbar.Collapse className="justify-content-end">
          <Link to="/">Sobre nós</Link>
          <Link to="/">Contato</Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
