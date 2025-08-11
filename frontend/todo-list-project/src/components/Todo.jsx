const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">{todo.category}</p>
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
