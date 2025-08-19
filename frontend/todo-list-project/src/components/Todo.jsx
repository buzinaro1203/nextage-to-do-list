import { useState } from "react";
import ExpandedTodo from "./EditTodo.jsx";

import Modal from "./Modal/Modal.jsx";

const Todo = ({ todo, removeTodo, completeTodo, updateTodo }) => {
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    const localDate = new Date(year, month - 1, day);
    const formatedDate = localDate.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formatedDate;
  }
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`todo ${todo.isCompleted ? "todocompleted" : ""}`}>
      <div className="content">
        <h4 className="title">{todo.title}</h4>
        <p className="category">{todo.categoryName}</p>
        <p className="description">{todo.description}</p>
        <p className="due_date">Data de vencimento {formatDate(todo.dueDate)} </p>
        {
          todo.updatedAt != null && (
            <p className="updated_at">
              Atualizado em: {formatDate(todo.updatedAt)}
            </p>
          )}
      </div>

      <div>
        <button onClick={toggleExpanded} className="edit"></button>
        <button
          onClick={() => completeTodo(todo.id)}
          className="complete"
        ></button>

        <button onClick={() => removeTodo(todo.id)} className="remove"></button>
      </div>
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
