import React from 'react';
import CarouselComponent from './CarouselComponent';
import AlertDismissibleExample from './AlertDismissibleExample';
import '../style/bracos.css';

const Braco:React.FC<any> = ({titulo, acaoCotovelo, acaoPulso, acaoAlert, mensagem}:any) => {
  return (
    <div className="div-principal-bracos">
      <h3 className="d-flex justify-content-center p-1 h3-braco">{titulo}</h3>
      {
        acaoAlert &&
        <AlertDismissibleExample
        mensagem={mensagem}/>
      }
      <form className="d-flex justify-content-center mx-3">

        <label htmlFor="cotovelo" className="form  mx-3 labelCotovelo">
          <h4 className="d-flex justify-content-center my-1">Cotovelo</h4>

          <CarouselComponent arrayProps={['Em Repouso', 'Levemente Contraído', 'Contraído', 'Fortemente Contraído']} functionProps={acaoCotovelo} />
        </label>

      <label htmlFor="" className="form  mx-3 labelCotovelo">
        <h4 className="d-flex justify-content-center my-1">Pulso</h4>

        <CarouselComponent arrayProps={['Rotação - 45', 'Em Repouso', 'Rotação 45°', 'Rotação 90°', 'Rotação 135°', 'Rotação 180°']} functionProps={acaoPulso} />
      </label>

      </form>
    </div>
  );
}

export default Braco;