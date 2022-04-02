import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cotoveloEsquerdoAction, pulsoEsquerdoAction } from '../actions/bracoEsquerdo';
import CarouselComponent from './CarouselComponent';
import '../style/bracos.css';

const BracoEsquerdo:React.FC = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state:any) => state.cotoveloEsquerdoReducer.cotoveloEsquerdo === 'Fortemente Contraído');


  function moverCotovelo(value:string|any) {
    dispatch(cotoveloEsquerdoAction(value));
  }

  function moverPulso(value:any){
    if (selector === false) {
      (alert('O Pulso só pode ser movimentado caso o Cotovelo esteja Fortemente Contraído.'));
      return;
    }
    dispatch(pulsoEsquerdoAction(value));
  }

  return (
    <div className="div-principal-bracos">
      <h3 className="d-flex justify-content-center h3-braco p-1">Braço Esquerdo</h3>

      <form action="" className="d-flex justify-content-center mx-3">

        <label htmlFor="cotovelo" className="form  mx-3 labelCotovelo">
          <h4 className="d-flex justify-content-center my-1">Cotovelo</h4>

          <CarouselComponent arrayProps={['Em Repouso', 'Levemente Contraído', 'Contraído', 'Fortemente Contraído']} functionProps={moverCotovelo} />

          {/* <select className="form-select form-select-md mb-1 my-2" onChange={moverCotovelo}>
            <option selected value="Em Repouso">Em Repouso</option>
            <option value="Levemente Contraído">Levemente Contraído</option>
            <option value="Contraído">Contraído</option>
            <option value="Fortemente Contraído">Fortemente Contraído</option> 
          </select> */}
        </label>

      <label htmlFor="" className="form  mx-3 labelCotovelo">
        <h4 className="d-flex justify-content-center my-1">Pulso</h4>

        <CarouselComponent arrayProps={['Rotação - 45', 'Em Repouso', 'Rotação 45°', 'Rotação 90°', 'Rotação 135°', 'Rotação 180°']} functionProps={moverPulso} />
        {/* <select className="form-select form-select-md mb-1 my-2" onChange={pulsoValidation}>
          <option value="-45°">{estado === 'Em Repouso' ? 'Rotação - 45°' : `Rotação ${estado}`}</option>
          <option selected value="Em Repouso">Em Repouso</option>
          <option value="45°">{estado === 'Em Repouso' ? 'Rotação 45°' : `Rotação ${estado}`}</option>
          <option value="90°">{estado === 'Em Repouso' ? 'Rotação 90°' : `Rotação ${estado}`}</option>
          <option value="135°">{estado === 'Em Repouso' ? 'Rotação 135°' : `Rotação ${estado}`}</option>
          <option value="180°">{estado === 'Em Repouso' ? 'Rotação 180°' : `Rotação ${estado}`}</option>
        </select> */}
      </label>

        </form>
    </div>
  );
}

export default BracoEsquerdo;