import { useState } from "react";
import ExpandedTodo from "./EditTodo.jsx";

import Modal from "./Modal/Modal.jsx";

const Todo = ({ todo, removeTodo, completeTodo, updateTodo }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const [year, month, day] = dateString.split("-");
    const localDate = new Date(year, month - 1, day);
    return localDate.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  const [taskToDelete, setTaskToDelete] = useState(null);
  const confirmDelete = (id) => {
    setTaskToDelete(id); // abre modal
  };

  const handleConfirmDelete = () => {
    removeTodo(taskToDelete); // chama a função do pai
    setTaskToDelete(null); // fecha modal
  };

  const handleCancelDelete = () => {
    setTaskToDelete(null); // fecha modal
  };

  return (
    <div className={`todo ${todo.completed ? "todocompleted" : ""}`}>
      <div className="content">
        <h4 className="title">{todo.title}</h4>
        <p className="category">Categoria: {todo.categoryName}</p>
        <p className="description">{todo.description}</p>
        {todo.completed && (
          <p>Tarefa finalizada em: {formatDate(todo.completedAt)}</p>
        )}
        {!todo.completed && (
          <>
            <p className="due_date">Prazo: {formatDate(todo.dueDate)}</p>
            {todo.updatedAt != null && (
              <p className="updated_at">
                Atualizado em: {formatDate(todo.updatedAt)}
              </p>
            )}
          </>
        )}
      </div>

      <div>
        <button onClick={toggleExpanded} className="edit"></button>
        <button
          onClick={() => completeTodo(todo)}
          className="complete"
        ></button>

        <button
          onClick={() => confirmDelete(todo.id)}
          className="remove"
        ></button>
      </div>
      {taskToDelete && (
        <div className="modal-remove" onClick={handleCancelDelete}>
          <div
            className="modal-content-remove"
            onClick={(e) => e.stopPropagation()}
          >
            <p>
              Tem certeza que deseja <span>excluir</span> a tarefa?
            </p>
            <button className="confirm-button" onClick={handleConfirmDelete}>
              Sim
            </button>
            <button className="cancel-button" onClick={handleCancelDelete}>
              Não
            </button>
          </div>
        </div>
      )}
      {isExpanded && (
        <Modal onClose={toggleExpanded}>
          <ExpandedTodo
            todo={todo}
            onClose={toggleExpanded}
            onUpdate={(updatedTodo) => {
              // Call the update function here
              updateTodo(updatedTodo);
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export default Todo;
