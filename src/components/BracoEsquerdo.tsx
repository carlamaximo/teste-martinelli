import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cotoveloEsquerdoAction, pulsoEsquerdoAction } from '../actions/bracoEsquerdo';
import '../style/bracos.css';

const BracoEsquerdo:React.FC = () => {
  const dispatch = useDispatch();

  const [emRepouso, setEmRepouso] = useState('Em Repouso');

  const selector = useSelector((state:any) => state.cotoveloEsquerdoReducer.cotoveloEsquerdo === 'Fortemente Contraído');

  function pulsoValidation(value:string) {
    console.log('oi', selector);
  }

  function moverCotovelo({ target: { value } }:string|any) {
    // pulsoValidation(value);
    console.log(value)
    dispatch(cotoveloEsquerdoAction(value));
  }

  function moverPulso({ target: { value } }:string|any) {
    pulsoValidation(value);
    if (selector === false) {
      setEmRepouso('Em Repouso');
      (alert('O Pulso só pode ser movimentado caso o Cotovelo esteja Fortemente Contraído.'));
      return;
    }
    
    dispatch(pulsoEsquerdoAction(value));
  }

  return (
    <div className="div-principal-bracos">
      <h3 className="d-flex justify-content-center h3-braco p-1">Braço Esquerdo</h3>

      <form action="" className="d-flex justify-content-center mx-3">

        <label htmlFor="cotovelo" className="form  mx-3">
          <h4 className="d-flex justify-content-center my-1">Cotovelo</h4>

          <select className="form-select form-select-md mb-1 my-2" onChange={moverCotovelo}>
            <option selected value="Em Repouso">{emRepouso}</option>
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

export default BracoEsquerdo;