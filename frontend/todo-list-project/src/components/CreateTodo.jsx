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
    <div>
      <h1>Criar tarefa</h1>
      <form onSubmit={handleSubmit}>
        <p>Insira um titulo</p>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <p>Insira a descrição de sua tarefa</p>
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p>Insira a data de vencimento dessa tarefa</p>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <p>Selecione a categoria</p>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
        >
          <option value={0}>Selecione uma categoria</option>
          <option value={1}>Pessoal</option>
          <option value={2}>Trabalho</option>
          <option value={3}>Estudos</option>
          <option value={4}>Outros</option>
        </select>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CreateTodo;
