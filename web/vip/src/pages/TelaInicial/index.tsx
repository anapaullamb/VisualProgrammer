import React from "react";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./styles.css";
import FlechaIcon from "../../assets/svg/arrow.svg";
import Header from "../../components/Header";
import Onda from "../../assets/svg/Ondas.svg";
import OndaAzul from "../../assets/svg/OndasAzul.svg";
function TelaInicial() {
  return (
    <div>
      <div className="main-container">
        <Header></Header>
        <section className="home">
          <div className="wave">
            <div className="wave-img">
              <img src={Onda}></img>
            </div>
          </div>
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
        </section>
        <section className="sobre">
          <div className="wave">
            <div className="wave-img">
              <img src={OndaAzul}></img>
            </div>
          </div>
          <p>t4este</p>
          <p>t4este</p>
          <p>t4este</p>
          <p>t4este</p>
          <p>t4este</p>
          <p>t4este</p>
        </section>
        <section className="contato">
          <div className="wave">
            <div className="wave-img">
              <img src={Onda}></img>
            </div>
          </div>
          <p>t4este</p>
          <p>t4este</p>
          <p>t4este</p>
          <p>t4este</p>
          <p>t4este</p>
          <p>t4este</p>
        </section>
      </div>
      <div className="container-sobre"></div>
    </div>
  );
}
export default TelaInicial;
