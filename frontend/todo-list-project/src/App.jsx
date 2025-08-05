import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo.jsx";
import Filter from "./components/Filter.jsx";
import Search from "./components/Search.jsx";
import Todo from "./components/Todo.jsx";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar o projeto",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Trabalhar no frontend",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Trabalhar no backend",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Asc");
  const [filter, setFilter] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");

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
      <Search search={search} setSearch={setSearch} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            filterCategory === "All" ? true : todo.category === filterCategory
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
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
