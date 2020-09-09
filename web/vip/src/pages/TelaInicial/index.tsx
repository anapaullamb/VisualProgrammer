import React from "react";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./styles.css";
import FlechaIcon from "../../assets/svg/arrow.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function TelaInicial() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="container-title">
          <Row>
            <Col className="bordaLateral">
              <Row>
                <h1>
                  Visual<br></br>Programmer
                </h1>
              </Row>
              <Row>
                <p>Programar nunca foi tão facil</p>
              </Row>
            </Col>
          </Row>
          <div className="buttons-container">
            <div className="cadastrar">
              <Link to="/cadastrar">
                Cadastre-se
                <img src={FlechaIcon} alt="Flecha Icon"></img>
              </Link>
            </div>
            <div className="logar">
              <Link to="/logar">Já tenho uma conta</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default TelaInicial;
