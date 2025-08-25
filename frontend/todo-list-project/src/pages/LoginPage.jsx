import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApi, fetchTodos, registerUser } from "../api/api";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [successful, setSuccess] = useState("");

  const changeForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      if (password === confirmPassword) {
        await registerUser(name, email, password);

        changeForm();
      } else {
        alert("As senhas não estão iguais");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Erro ao registrar usuário");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const api = createApi(email, password);
      await fetchTodos(api); // testa autenticação
      // salva no localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      navigate("/");
    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message ||
          "Erro ao fazer login, verifique suas credenciais"
      );
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        {isLogin ? (
          <form onSubmit={handleLogin} className={styles.form}>
            <h3>Login</h3>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                className={styles.input}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Senha</label>
              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className={styles.formGroup}>
              <button className={styles.button} type="submit">
                Login
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister} className={styles.form}>
            <h3>Criar Conta</h3>
            <div className={styles.formGroup}>
              <label className={styles.label}>Nome</label>
              <input
                value={name}
                className={styles.input}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                className={styles.input}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Senha</label>
              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Confirme sua senha</label>
              <input
                className={styles.input}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <button className={styles.button} type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        )}
        <div className={styles.buttonContainer}>
          {isLogin ? (
            <>
              <button onClick={() => setIsLogin(false)} className={styles.link}>
                Crie sua conta
              </button>
              <button className={styles.link}>Esqueceu sua senha?</button>
            </>
          ) : (
            <button onClick={() => setIsLogin(true)} className={styles.link}>
              Já tem conta? Faça login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
