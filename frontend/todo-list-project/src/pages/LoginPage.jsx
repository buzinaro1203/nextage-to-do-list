import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // true = tela de login, false = tela de cadastro

  return (
    <div className="login-body">
      <div className="login-card">
        {isLogin ? (
          // FORM DE LOGIN
          <form>
            <h3>Login</h3>
            <div>
              <label>Email</label>
              <input type="text" />
            </div>
            <div>
              <label>Senha</label>
              <input type="password" />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        ) : (
          <form>
            <h3>Criar Conta</h3>
            <div>
              <label>Nome</label>
              <input type="text" />
            </div>
            <div>
              <label>Email</label>
              <input type="text" />
            </div>
            <div>
              <label>Senha</label>
              <input type="password" />
            </div>
            <div>
              <label>Confirme sua senha</label>
              <input type="password" />
            </div>
            <div>
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        )}
        <div className="span-container">
          {isLogin ? (
            <>
              <button onClick={() => setIsLogin(false)} className="link">
                Crie sua conta
              </button>
              <button className="link">Esqueceu sua senha?</button>
            </>
          ) : (
            <button onClick={() => setIsLogin(true)} className="link">
              Já tem conta? Faça login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
