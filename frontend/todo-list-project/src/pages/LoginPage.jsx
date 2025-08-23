import { useState } from "react";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // true = tela de login, false = tela de cadastro

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        {isLogin ? (
          // FORM DE LOGIN
          <form className={styles.form}>
            <h3>Login</h3>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Senha</label>
              <input className={styles.input} type="password" />
            </div>
            <div className={styles.formGroup}>
              <button className={styles.button} type="submit">
                Login
              </button>
            </div>
          </form>
        ) : (
          <form className={styles.form}>
            <h3>Criar Conta</h3>
            <div className={styles.formGroup}>
              <label className={styles.label}>Nome</label>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Senha</label>
              <input className={styles.input} type="password" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Confirme sua senha</label>
              <input className={styles.input} type="password" />
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
