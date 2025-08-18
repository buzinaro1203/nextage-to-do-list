import { useState } from "react";
export const CreateTodo = ({ addTodo, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [categoryId, setCategoryId] = useState(1); // aju
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      title,
      description,
      completed: false,
      dueDate,
      categoryId,
    });
    onClose(); // fecha o modal
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Categoria"
        value={categoryId}
        onChange={(e) => setCategoryId(Number(e.target.value))}
      />
      <button type="submit">Criar</button>
    </form>
  );
};

export default CreateTodo;
