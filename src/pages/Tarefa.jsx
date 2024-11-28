import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tarefa.css';

const Tarefa = () => {
  const [task, setTask] = useState({
    nome: '',
    descricao: '',
    setor: '',
    usuario: '',
    prioridade: 'baixa',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tarefa cadastrada:', task);

    const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    tasksFromStorage.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasksFromStorage));

    setMessage('Tarefa cadastrada com sucesso!');
    setTask({
      nome: '',
      descricao: '',
      setor: '',
      usuario: '',
      prioridade: 'baixa',
    });

    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="form-container">
      <h1>Criar Nova Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome da Tarefa</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={task.nome}
          onChange={handleChange}
          placeholder="Digite o nome da tarefa"
        />

        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          value={task.descricao}
          onChange={handleChange}
          placeholder="Descreva a tarefa"
        ></textarea>

        <label htmlFor="setor">Setor</label>
        <input
          type="text"
          id="setor"
          name="setor"
          value={task.setor}
          onChange={handleChange}
          placeholder="Digite o setor"
        />

        <label htmlFor="usuario">Usuário</label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          value={task.usuario}
          onChange={handleChange}
          placeholder="Digite o nome do usuário"
        />

        <label htmlFor="prioridade">Prioridade</label>
        <select
          id="prioridade"
          name="prioridade"
          value={task.prioridade}
          onChange={handleChange}
        >
          <option value="alta">Alta</option>
          <option value="media">Média</option>
          <option value="baixa">Baixa</option>
        </select>

        <button type="submit">Cadastrar Tarefa</button>
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Tarefa;
