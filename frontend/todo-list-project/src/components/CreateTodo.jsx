import { useState } from "react";
export const CreateTodo = ({ addTodo, onClose }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
    onClose();
  };
  return (
    <div className="create-todo modal overlay">
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Digite o titulo"
          value={value}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name=""
          id=""
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar</button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
