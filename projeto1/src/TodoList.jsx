import { useState } from "react";
import "./TodoList.css";
import icone from "./assets/lista.png";

function TodoList() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");


  function adicionaItem(e) {
    e.preventDefault();
    if (!novoItem) {
      return;
    }
    setLista([...lista, { text: novoItem, isCompleted: false }]);
    setNovoItem("");
    document.getElementById("inputEntrada").focus();
  }

  function clicou(index) {
    const listAux = [...lista];
    listAux[index].isCompleted = !listAux[index].isCompleted;
    setLista(listAux);
  }

  function deletar(index) {
    const listAux = [...lista];
    listAux.splice(index, 1);
    setLista(listAux);
  }

  function deletarTudo() {
    setLista([]);
  }

  return (
    <div>
      <h1 className="titulo">Todo List</h1>
      <form onSubmit={adicionaItem}>
        <input
          type="text"
          id="inputEntrada"
          placeholder="Adicione uma tarefa"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
        />
        <button type="submit" className="add">
          Add
        </button>
      </form>
      <div className="ListaTarefas">
        {lista.length < 1 ? (
          <img src={icone} alt="Lista vazia" className="img_vazio" />
        ) : (
          lista.map((item, index) => (
            <div
              key={index}
              className={`item ${item.isCompleted ? "completo" : ""}`}
            >
              <span onClick={() => clicou(index)}>{item.text}</span>
              <button className="del" onClick={() => deletar(index)}>
                Deletar
              </button>
            </div>
          ))
        )}
        {lista.length < 1 ? (
          <span></span>
        ) : (
          <button className="DeletarTodas" onClick={deletarTudo}>
            Deletar tudo
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoList;
