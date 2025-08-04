export const CreateTodo = () => {
  return (
    <div className="create-todo">
      <h2>Criar tarefa</h2>
      <form action="">
        <input type="text" name="" id="" placeholder="Digite o titulo" />
        <select name="" id="">
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};
export default CreateTodo;
