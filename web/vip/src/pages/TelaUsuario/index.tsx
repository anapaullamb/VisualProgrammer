import React from "react";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Input from "../../components/Input";
import "./styles.css";
import Header from "../../components/Header";
import OndaAzul from "../../assets/svg/OndasAzul.svg";
function TelaInicial() {
  return (
    <div>
      <Header>
        <Link to="/" style={{ paddingLeft: "15px" }}>
          Visual Programmer
        </Link>
      </Header>
      <div className="perfil-container">
        <section className="perfil">
          <div className="onda">
            <div className="onda-img">
              <img src={OndaAzul}></img>
            </div>
          </div>
          <div className="cont-card">
            <div className="title">
              <h1>Ana Paula</h1>
            </div>
            <div className="card-user">
              <img src="https://pbs.twimg.com/profile_images/1306631286963011586/fn8xH3aO_400x400.jpg"></img>
              <h1>Ana Paula</h1>
              <p>anapaullamb@gmail.com</p>
            </div>
            <div className="card-info">
              <p>Minhas Informações</p>
              <form className="form-password">
                <fieldset>
                  <Input name="name" label="Nome Completo" />
                  <Input name="e-mail" label="Email" />
                </fieldset>
                <button type="submit"> Salvar cadastro</button>
              </form>
            </div>
            <div className="card-password">
              <p>Minhas Password</p>
              <form className="form-password">
                <fieldset>
                  <Input name="name" label="Nome Completo" />
                  <Input name="e-mail" label="Email" />
                </fieldset>
                <button type="submit"> Salvar cadastro</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default TelaInicial;
