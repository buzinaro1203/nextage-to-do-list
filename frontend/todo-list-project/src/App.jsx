import { useState, useEffect } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo.jsx";
import Filter from "./components/Filter.jsx";
import Modal from "./components/Modal/Modal.jsx";
import Search from "./components/Search.jsx";
import Todo from "./components/Todo.jsx";
import api from "./services/api.js";
function App() {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Asc");
  const [filter, setFilter] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");




  const fetchTodos = async () => {
    try {
      const response = await api.get("/api/todos", {
        auth:
        {
          username: "admin",
          password: "admin",
        },
      });

      console.log("Todos fetched:", response.data);
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };


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
        {todos.filter((todo) =>
          filter === "All"
            ? true
            : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
        )
          // .filter((todo) =>
          //   filterCategory === "All" ? true : todo.category === filterCategory
          // )
          .filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.title.localeCompare(b.text)
              : b.title.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
        <div className="create-todo-container">
          <button className="modal-button" onClick={openModal}></button>
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <CreateTodo addTodo={addTodo} onClose={closeModal} />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
