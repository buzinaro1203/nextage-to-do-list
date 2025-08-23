import { useState } from "react";

export default function EditTodo({ todo, onClose, onUpdate }) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [categoryId, setCategoryId] = useState(todo.categoryId);
  const [dueDate, setDueDate] = useState(todo.dueDate);
  const handleSave = () => {
    onUpdate({
      ...todo,
      title,
      description,
      categoryId,
      dueDate,
    });
    onClose();
  };

  return (
    <div className="expanded-todo-overlay">
      <div className="expanded-todo">
        <button className="close-button" onClick={onClose}>
          X
        </button>

        <h2>Editar Tarefa</h2>

        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Descrição:
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Categoria:
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="1">Pessoal</option>
            <option value="2">Trabalho</option>
            <option value="3">Estudos</option>
            <option value="4">Outros</option>
          </select>
        </label>
        <label>
          Data de Vencimento:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>

        <button onClick={handleSave}>Salvar</button>
      </div>
    </div>
  );
}
