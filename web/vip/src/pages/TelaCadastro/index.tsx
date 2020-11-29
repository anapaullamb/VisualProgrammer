import React, { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import "./styles.css";

function TelaCadastro() {
  const history = useHistory();
  function criarUsuario(e: FormEvent) {
    e.preventDefault();
    history.push("/perfil");
  }
  return (
    <div>
      <Header voltar="1"></Header>
      <div className="containerCadastro">
        <div className="containerCadastro-title">
          <h1>Cadastrar</h1>
          <p>Preencha corretamente seus dados!!</p>
        </div>
        <form className="container-form" onSubmit={criarUsuario}>
          <fieldset>
            <Input name="name" label="Nome Completo" />
            <Input name="e-mail" label="Email" />
            <Input name="senha" label="Senha" />
          </fieldset>
          <button type="submit"> Salvar cadastro</button>
        </form>
        <Footer />
      </div>
    </div>
  );
}
export default TelaCadastro;
