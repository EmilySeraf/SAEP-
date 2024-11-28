import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
          
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />
          
          <Link to="/home">
            <button type="submit">Entrar</button>
          </Link>
        </form>
        <div className="link">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
