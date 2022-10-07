import React, { useState } from "react";
import Item from "./item/Item";
import style from "./Lista.module.scss";

function Lista() {

  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00" }]);
      }}>Estudos do dia</h2>

      <ul>
        {tarefas.map((item, index) => (
          <Item
          key={index}
          {...item} // Utiliza todos os atributos do objeto "item" como props para o componente "Item"
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
