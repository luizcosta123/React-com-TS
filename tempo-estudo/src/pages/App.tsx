import React, { useState } from "react";
import Cronometro from "../components/cronometro/Cronometro";
import Formulario from "../components/formulario/Formulario";
import Lista from "../components/lista/Lista";
import style from './App.module.scss';

function App() {

  const [tarefas, setTarefas] = useState([{ // [estado, função que muda o estado]
    tarefa: "React",
    tempo: "02:00:00",
  },
  {
    tarefa: "JavaScript",
    tempo: "01:00:00",
  },
  {
    tarefa: "TypeScript",
    tempo: "05:00:00",
  }]);

  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
