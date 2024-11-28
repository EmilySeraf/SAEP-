import React from 'react';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const senha = e.target.senha.value;

    alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nE-mail: ${email}\nSenha: ${senha}`);
  };

  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <div className="form-container">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
          
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
          
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />
          
          <button type="submit">Cadastrar</button>
        </form>
        <div className="link">
          Já tem uma conta? <Link to="/">Faça login</Link>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
