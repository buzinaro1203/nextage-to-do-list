import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
  auth: {
    username: "admin",
    password: "admin",
  },
});

export const fetchTodos = async () => {
  const response = await api.get("/api/todos", {});
  console.log("Fetched todos:", response.data);
  return response.data;
};

export const createTodo = async (todo) => {
  const response = await api.post("/api/todos", todo);
  return response.data;
};

export const alterTodo = async (id, todo) => {
  const response = await api.put(`/api/todos/${id}`, todo, {});
  return response.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`/api/todos/${id}`, {});
};

export const completeTodo = async (id, todo) => {
  const updatedTodo = {
    ...todo,
    completed: !todo.completed,
  };
  const response = await api.put(`/api/todos/${id}`, updatedTodo);
  return response.data
};
