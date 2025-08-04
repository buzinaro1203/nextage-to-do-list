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

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    9;
    setTodos(newTodos);
  };
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <CreateTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
