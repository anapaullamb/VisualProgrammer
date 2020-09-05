import React from "react";
import MenuBar from "../../components/MenuBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./styles.css";

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
          <Col>2 of 3</Col>
          <Col>2 of 3</Col>
        </Row>
      </Container>
      <p>Teste</p>
      <a href="/logar">logar</a>
      <br></br>
      <a href="/cadastrar">cadastrar</a>
    </div>
  );
}
export default TelaInicial;
