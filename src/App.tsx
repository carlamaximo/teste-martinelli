import React from 'react';
import Login from './pages/Login';
import Controle from './pages/Controle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/app.css'

const App:React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/home" element={ <Controle /> } />
     </Routes>
   </BrowserRouter>
  );
}

export default App;