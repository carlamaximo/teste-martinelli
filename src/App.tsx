import React from 'react';
import BracoEsquerdo from './components/BracoEsquerdo';
import BracoDireito from './components/BracoDireito';
import Cabeca from './components/Cabeca';
import EstadoAtual from './components/EstadoAtual';
// import CarouselComponent from './components/CarouselComponent';
import './style/app.css'

const App:React.FC = () => {
  return (
    <div className="div-principal d-flex flex-column mx-auto my-auto">
     <Cabeca />
    <div className="d-flex flex-direction-row mx-center div-app-bracos justify-content-center">
      <BracoEsquerdo />
      <BracoDireito />
    </div>
      <EstadoAtual />
      {/* <CarouselComponent arrayProps={['Pra Baixo', 'Pra Cima', 'Em Repouso']}/> */}
    </div>
  );
}

export default App;