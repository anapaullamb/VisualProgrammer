import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TelaInicial from "./pages/TelaInicial";
import TelaLogin from "./pages/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro";
import TelaUsuario from "./pages/TelaUsuario";
import TelaVip from "./pages/TelaVip";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={TelaInicial} />
      <Route path="/cadastrar" exact component={TelaCadastro} />
      <Route path="/logar" exact component={TelaLogin} />
      <Route path="/perfil" exact component={TelaUsuario} />
      <Route path="/vip" exact component={TelaVip} />
    </BrowserRouter>
  );
}

export default Routes;
