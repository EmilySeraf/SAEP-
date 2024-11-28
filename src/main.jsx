import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Home from './pages/Home';
import Tarefa  from './pages/Tarefa';

import './index.css';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tarefa" element={<Tarefa />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
