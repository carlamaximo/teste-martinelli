import React from 'react';
import CarouselComponent from './CarouselComponent';
import AlertComponent from './AlertComponent';
import { IPropsBraco } from '../interface/PropsBraco';
import '../style/bracos.css';

const Braco:React.FC<IPropsBraco> = ({
  titulo,
  acaoCotovelo,
  acaoPulso,
  acaoAlert,
  mensagem 
  }:IPropsBraco) => {
  return (
    <div className="div-principal-bracos">
      <h3 className="d-flex justify-content-center p-1 h3-braco">{ titulo }</h3>

      { acaoAlert && <AlertComponent mensagem={ mensagem }/> }

      <form className="d-flex justify-content-center mx-3">
        <label htmlFor="cotovelo" className="form  mx-3 labelCotovelo">
          <h4 className="d-flex justify-content-center my-1">Cotovelo</h4>
          
          <CarouselComponent
            arrayProps={['Em Repouso', 'Levemente Contraído', 'Contraído', 'Fortemente Contraído']}
            functionProps={ acaoCotovelo }
            titulo={ titulo }
          />
        </label>

        <label htmlFor="" className="form  mx-3 labelCotovelo">
          <h4 className="d-flex justify-content-center my-1">Pulso</h4>

          <CarouselComponent
            arrayProps={['Rotação - 45', 'Em Repouso', 'Rotação 45°', 'Rotação 90°', 'Rotação 135°', 'Rotação 180°']}
            functionProps={ acaoPulso }
            titulo={'Não existe'}
          />
        </label>
      </form>
    </div>
  );
}

export default Braco;