import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); 
  const [isEditing, setIsEditing] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(tasksFromStorage);
  }, []);

  const handleCreateTask = () => {
    navigate('/tarefa');
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsEditing(true);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter(task => task !== taskToDelete);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleSaveEdit = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.nome === editedTask.nome ? editedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setIsEditing(false);
    setSelectedTask(null);
  };

  return (
    <>
      <header className="header">
        <h1 className="titulo">Gerenciador de Tarefas</h1>
        <button className="create-task-btn" onClick={handleCreateTask}>Criar Tarefa</button>
      </header>

      <div className="content">
        <div className="column">
          <h2>A Fazer</h2>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div key={index} className="task">
                <h3>{task.nome}</h3>
                <p>{task.descricao}</p>
                <p>Setor: {task.setor}</p>
                <p>Usuário: {task.usuario}</p>
                <p>Prioridade: {task.prioridade}</p>
                <button onClick={() => handleEditTask(task)}>Editar</button>
                <button onClick={() => handleDeleteTask(task)}>Excluir</button>
              </div>
            ))
          ) : (
            <p>Sem tarefas para fazer.</p>
          )}
        </div>
        <div className="column">
          <h2>Fazendo</h2>
          <p>Lista de tarefas em andamento...</p>
        </div>
        <div className="column">
          <h2>Concluído</h2>
          <p>Lista de tarefas concluídas...</p>
        </div>
      </div>

      {isEditing && selectedTask && (
        <div className="edit-task-modal">
          <h3>Editar Tarefa</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const editedTask = {
                ...selectedTask,
                nome: e.target.nome.value,
                descricao: e.target.descricao.value,
                setor: e.target.setor.value,
                usuario: e.target.usuario.value,
                prioridade: e.target.prioridade.value,
              };
              handleSaveEdit(editedTask);
            }}
          >
            <label htmlFor="nome">Nome da Tarefa</label>
            <input
              type="text"
              id="nome"
              name="nome"
              defaultValue={selectedTask.nome}
              required
            />

            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              defaultValue={selectedTask.descricao}
              required
            ></textarea>

            <label htmlFor="setor">Setor</label>
            <input
              type="text"
              id="setor"
              name="setor"
              defaultValue={selectedTask.setor}
              required
            />

            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              defaultValue={selectedTask.usuario}
              required
            />

            <label htmlFor="prioridade">Prioridade</label>
            <select
              id="prioridade"
              name="prioridade"
              defaultValue={selectedTask.prioridade}
            >
              <option value="alta">Alta</option>
              <option value="media">Média</option>
              <option value="baixa">Baixa</option>
            </select>

            <button type="submit">Salvar Edição</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Home;
