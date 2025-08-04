import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo.jsx";
import Todo from "./components/Todo.jsx";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar o projeto",
      category: "desafio",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Trabalhar no frontend",
      category: "desafio",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Trabalhar no backend",
      category: "desafio",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
      <CreateTodo />
    </div>
  );
}

export default App;
