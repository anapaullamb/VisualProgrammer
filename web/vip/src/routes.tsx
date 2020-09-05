import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TelaInicial from "./pages/TelaInicial";
import TelaLogin from "./pages/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={TelaInicial} />
      <Route path="/cadastrar" exact component={TelaLogin} />
      <Route path="/logar" exact component={TelaCadastro} />
    </BrowserRouter>
  );
}

export default Routes;
