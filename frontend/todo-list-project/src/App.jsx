import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo.jsx";
import Filter from "./components/Filter.jsx";
import Modal from "./components/Modal/Modal.jsx";
import Search from "./components/Search.jsx";
import Todo from "./components/Todo.jsx";

import { createTodo, deleteTodo, fetchTodos, alterTodo } from "./services/api.js";
function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Asc");
  const [filter, setFilter] = useState("Incompleted");
  const [filterCategory, setFilterCategory] = useState("All");

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    // Criamos uma função async dentro do useEffect
    const loadTodos = async () => {
      try {
        setTodos(await fetchTodos());
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    loadTodos();// chamamos a função async
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateTodo = async (todo) => {
    try {
      const updatedTodo = await alterTodo(todo.id, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }


  const addTodo = async (todoData) => {
    try {
      const savedTodo = await createTodo(todoData); // chama a API
      setTodos([...todos, savedTodo]); // adiciona o resultado do backend no estado
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };
  const removeTodo = async (id) => {
    try {
      await deleteTodo(id);
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
          .filter((todo) =>
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
