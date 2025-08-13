
const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.title}</p>
        <p className="category">{todo.description}</p>
      </div>
      <div>
        <button className="edit"></button>
        <button
          onClick={() => completeTodo(todo.id)}
          className="complete"
        ></button>
        <button onClick={() => removeTodo(todo.id)} className="remove"></button>
      </div>
    </div>
  );
};

export default Todo;
