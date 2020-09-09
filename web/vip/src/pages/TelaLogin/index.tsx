import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import "./styles.css";
function TelaLogin() {
  return (
    <div>
      <Header voltar="1"></Header>
      <div className="containerLogin">
        <div className="containerLogin-title">
          <h1>Login</h1>
          <p>Preencha corretamente seus dados!!</p>
        </div>
        <form className="containerLogin-form">
          <fieldset>
            <Input name="e-mail" label="Email" />
            <Input name="senha" label="Senha" />
          </fieldset>
          <button type="submit"> Entrar</button>
          <a href="/">Esqueci a senha</a>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default TelaLogin;
