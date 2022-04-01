import React from 'react';
import BracoEsquerdo from './components/BracoEsquerdo';
import BracoDireito from './components/BraçoDireito';
import Cabeca from './components/Cabeca';
import EstadoAtual from './components/EstadoAtual';
import './style/app.css'

const App:React.FC = () => {
  return (
    <div className="div-principal d-flex flex-column mx-auto my-auto">
     <Cabeca />
      <div className="d-flex flex-direction-row justify-content-center">
        <BracoEsquerdo />
        <BracoDireito />
      </div>
    <EstadoAtual />
    </div>
  );
}

export default App;