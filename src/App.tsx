import React from 'react';
import BracoEsquerdo from './components/BracoEsquerdo';
import BracoDireito from './components/BracoDireito';
import Cabeca from './components/Cabeca';
import EstadoAtual from './components/EstadoAtual';
import './style/app.css'
// import AlertDismissibleExample from './components/AlertDismissibleExample';

const App:React.FC = () => {
  return (
    <div className="div-principal d-flex flex-column mx-auto my-auto">
     <Cabeca />
    <div className="d-flex flex-direction-row mx-center div-app-bracos justify-content-center">
      <BracoEsquerdo />
      <BracoDireito />
    </div>
      <EstadoAtual />
      {/* <AlertDismissibleExample /> */}
    </div>
  );
}

export default App;