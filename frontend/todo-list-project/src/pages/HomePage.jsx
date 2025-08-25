import { useEffect, useState } from "react";
import "../App.css";
import Modal from "../components/Modal/Modal.jsx";
import Filter from "../components/searchAndFilter/Filter.jsx";
import Search from "../components/searchAndFilter/Search.jsx";
import CreateTodo from "../components/todo/CreateTodo.jsx";
import Todo from "../components/todo/Todo.jsx";

import {
  alterTodo,
  completeTodo,
  createApi,
  createTodo,
  deleteTodo,
  fetchTodos,
} from "../api/api.js";
function App() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const api = email && password ? createApi(email, password) : null;
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Asc");
  const [filter, setFilter] = useState("Incompleted");
  const [filterCategory, setFilterCategory] = useState("All");

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const loadTodos = async () => {
      try {
        fetchTodos(api).then(setTodos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    loadTodos();
  }, []); // adiciona api como dependência

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateTodo = async (todo) => {
    try {
      const updatedTodo = await alterTodo(api, todo.id, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const addTodo = async (todoData) => {
    try {
      const savedTodo = await createTodo(api, todoData); // chama a API
      setTodos([...todos, savedTodo]); // adiciona o resultado do backend no estado
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };
  const handleComplete = async (todo) => {
    try {
      const updatedTodo = await completeTodo(api, todo.id, todo); // chama API
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? updatedTodo : t)));
    } catch (error) {
      console.error("Erro ao completar todo: ", error);
    }
  };
  const removeTodo = async (id) => {
    try {
      await deleteTodo(api, id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Erro ao deletar todo:", error);
    }
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
          .filter((todo) => {
            if (!todo) return false;
            return filter === "All"
              ? true
              : filter === "Completed"
                ? todo.completed
                : todo.completed === false;
          })
          .filter((todo) =>
            filterCategory === "All"
              ? true
              : todo.categoryName === filterCategory
          )
          .filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.title.localeCompare(b.title)
              : sort === "Desc"
                ? b.title.localeCompare(a.title)
                : sort === "CreatedDate"
                  ? new Date(a.createdAt) - new Date(b.createdAt)
                  : new Date(a.dueDate) - new Date(b.dueDate)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={handleComplete}
              updateTodo={updateTodo}
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
