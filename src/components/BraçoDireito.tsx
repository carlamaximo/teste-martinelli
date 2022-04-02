import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cotoveloDireitoAction, pulsoDireitoAction } from '../actions/bracoDireito';
import '../style/bracos.css';

const BracoDireito:React.FC = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state:any) => state.cotoveloDireitoReducer.cotoveloDireito === 'Fortemente Contraído');

  function moverCotovelo({ target: { value } }:string|any) {
    dispatch(cotoveloDireitoAction(value));
  }

  function moverPulso({ target: { value } }:string|any) {
    if (selector === false) {
      (alert('O Pulso só pode ser movimentado caso o Cotovelo esteja Fortemente Contraído.'));
      return;
    }
    
    dispatch(pulsoDireitoAction(value));
  }

  return (
    <div className="div-principal-bracos">
      <h3 className="d-flex justify-content-center p-1 h3-braco">Braço Direito</h3>

      <form action="" className="d-flex justify-content-center mx-3">

        <label htmlFor="cotovelo" className="form  mx-3">
          <h4 className="d-flex justify-content-center my-1">Cotovelo</h4>

          <select className="form-select form-select-md mb-1 my-2" onChange={moverCotovelo}>
            <option selected value="Em Repouso">Em Repouso</option>
            <option value="Levemente Contraído">Levemente Contraído</option>
            <option value="Contraído">Contraído</option>
            <option value="Fortemente Contraído">Fortemente Contraído</option> 
          </select>
        </label>

      <label htmlFor="" className="form  mx-3">
        <h4 className="d-flex justify-content-center my-1">Pulso</h4>

        <select className="form-select form-select-md mb-1 my-2" onChange={moverPulso}>
          <option value="Rotação - 45°">Rotação - 45°</option>
          <option selected value="Em Repouso">Em Repouso</option>
          <option value="Rotação 45°">Rotação 45°</option>
          <option value="Rotação 90°">Rotação 90°</option>
          <option value="Rotação 135°">Rotação 135°</option>
          <option value="Rotação 180°">Rotação 180°</option>
        </select>
      </label>

        </form>
    </div>
  );
}

export default BracoDireito;