import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Variável de ambiente do Vercel

export const createApi = (email, password) => {
  const token = btoa(`${email}:${password}`);
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${token}`,
    },
    // sem withCredentials
  });
};

export const registerUser = async (name, email, password) => {
  const response = await axios.post(
    `${BASE_URL}/api/users/register`, {
    name,
    email,
    password,
  }
  );
  return response.data;
};

// ----------------------
// Funções que recebem a instância do axios
// ----------------------

export const fetchTodos = async (api) => {
  const response = await api.get("/api/todos");
  console.log("Fetched todos:", response.data);
  return response.data;
};

export const createTodo = async (api, todo) => {
  const response = await api.post("/api/todos", todo);
  return response.data;
};

export const alterTodo = async (api, id, todo) => {
  const response = await api.put(`/api/todos/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (api, id) => {
  await api.delete(`/api/todos/${id}`);
};

export const completeTodo = async (api, id, todo) => {
  const updatedTodo = { ...todo, completed: !todo.completed };
  const response = await api.put(`/api/todos/${id}`, updatedTodo);
  return response.data;
};
