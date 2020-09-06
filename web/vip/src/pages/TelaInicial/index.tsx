import React from "react";
import MenuBar from "../../components/MenuBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./styles.css";
import onda1 from "../../assets/svg/onda1.svg";

function TelaInicial() {
  return (
    <div>
      <MenuBar></MenuBar>
      <Container>
        <Row>
          <Col className="bordaLateral">
            <Row>
              <h1 className="title">
                Visual<br></br>Programmer
              </h1>
            </Row>
            <Row>
              <p className="subtitle">Programar nunca foi tão facil</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/logar">Logar</Link>
          </Col>
          <Col>
            <Link to="/cadastrar">Cadastrar</Link>
          </Col>
        </Row>
      </Container>
      <div className="footer">
        <svg
          className="waves"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 622 385"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-13.3239 116.355C-18.2394 72.6019 -18.7688 30.4553 -17.2423 0L-13.3239 116.355C-4.00534 199.299 21.0761 288.015 77.7958 313.794C186.095 363.017 278.923 354.813 362.91 371.221C431.941 384.707 511.424 441.144 576.814 456.261C614.059 456.783 631.197 457.774 617.082 459.411C604.487 460.872 590.982 459.537 576.814 456.261C464.767 454.69 170.744 457.359 -1.77095 459.411L-13.3239 116.355Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="146.312"
              y1="344.559"
              x2="19.1327"
              y2="450.157"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6F77A6" />
              <stop offset="1" stop-color="#3B568C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
export default TelaInicial;
