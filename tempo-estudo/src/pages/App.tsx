import React from "react";
import Formulario from "../components/formulario/Formulario";
import Lista from "../components/lista/Lista";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />

      <Lista />
    </div>
  );
}

export default App;
