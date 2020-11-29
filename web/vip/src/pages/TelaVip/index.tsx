import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Sortable from "sortablejs";
import { MultiDrag, Swap, OnSpill, AutoScroll } from "sortablejs";

import Header from "../../components/Header";
import imgArray from "../../assets/imgs/array.png";
import imgIf from "../../assets/imgs/if.png";
import imgElseif from "../../assets/imgs/elseif.png";
import imgElse from "../../assets/imgs/else.png";
import imgFor from "../../assets/imgs/for.png";
import imgWhile from "../../assets/imgs/while.png";
import imgPrintf from "../../assets/imgs/printf.png";
import imgScanf from "../../assets/imgs/scanf.png";
import imgVariavel from "../../assets/imgs/variavel.png";
import imgRemover from "../../assets/imgs/remover.png";
import imgRemoveAll from "../../assets/imgs/removeAll.png";
import imgArquivo from "../../assets/imgs/arquivo.png";
function TelaVip() {
  var el = document.getElementById("items");
  var sortable = Sortable.create(el);

  return (
    <div>
      <Header>
        <Link to="/" style={{ paddingLeft: "15px" }}>
          Visual Programmer
        </Link>
      </Header>
      <div className="vip-container">
        <section className="perfil">
          <div className="cont-vip">
            <div className="box-menu">
              <img src={imgArquivo}></img>
              <img src={imgRemover}></img>
              <img src={imgRemoveAll}></img>
              <ul id="items">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            </div>
            <div className="titleC">
              <p>Meu Código</p>
            </div>
            <div className="titleCD">
              <p>Código Convertido</p>
            </div>
            <div className="titleS">
              <p>Simbolos Disponiveis</p>
            </div>
            <div className="box-simbolos">
              <img src={imgVariavel}></img>
              <img src={imgArray}></img>
              <img src={imgPrintf}></img>
              <img src={imgScanf}></img>
              <img src={imgIf}></img>
              <img src={imgElseif}></img>
              <img src={imgElse}></img>
              <img src={imgFor}></img>
              <img src={imgWhile}></img>
            </div>
            <div className="box-comandos">
              <img src={imgVariavel}></img>
              <img src={imgPrintf}></img>
              <img src={imgScanf}></img>
              <img src={imgPrintf}></img>
            </div>
            <div className="box-codigo">
              <p>#include &lt;stdio.h&gt;</p>
              <p>int main()</p>
              <p>(</p>
              <p style={{ paddingLeft: "20px" }}> int var;</p>
              <p style={{ paddingLeft: "20px" }}> printf("Digite um numero: ");</p>
              <p style={{ paddingLeft: "20px" }}> scanf("%i", &var); </p>
              <p style={{ paddingLeft: "20px" }}> printf("Valor digitado: %i",var); </p>
              <p style={{ paddingLeft: "20px" }}> return 0;</p>
              <p>}</p>
            </div>
            <div className="box-terminal"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default TelaVip;
