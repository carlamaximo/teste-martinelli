import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/cabeca.css';
import { IProps } from '../interface/Props';

const Cabeca:React.FC<IProps> = () => {
  const dispatch = useDispatch();

  function rotacionar({ target: { value } }:string|any) {
    dispatch({ type: 'HEAD_ROTATION_ACTION', rotation: value });

    const valorAtual = value;
    console.log(valorAtual);

    let grauDeRotacao:number = 0;

    switch(value) {
      case 'Rotação - 90°':
        grauDeRotacao = grauDeRotacao - 90;
        break;
      case 'Rotação - 45°':
        grauDeRotacao = grauDeRotacao - 45;
        break;
      case 'Em Repouso':
        grauDeRotacao = 0;
        break;
      case 'Rotação 45°':
        grauDeRotacao = grauDeRotacao + 45;
        break;
      case 'Rotação 90°':
        grauDeRotacao = grauDeRotacao + 90;
        break;
      }
      console.log('grau', grauDeRotacao);
  }

  function inclinar({ target: { value } }:string|any) {
    dispatch({ type: 'HEAD_INCLINATION_ACTION', inclination: value });
  }

  return (
    <div className="div-principal-cabeca">
    <h3 className="d-flex justify-content-center my-1 h3-cabeca p-1">Cabeça</h3>
     <form action="" className="d-flex justify-content-center">

       <label htmlFor="rotação" className="form  mx-3">
         <h4 className="d-flex justify-content-center my-1">Rotação</h4>
         
        <select name="rotação" id="rotação" className="form-select form-select-md mb-1 my-2" onChange={rotacionar}>
          <option value="- 90°">Rotação - 90°</option>
          <option value="- 45°">Rotação - 45°</option>
          <option value="Em Repouso">Em Repouso</option>
          <option value="45°">Rotação 45°</option>
          <option value="90°">Rotação 90°</option>
        </select>
      </label>

      <label htmlFor="inclinação" className=" mx-3">
        <h4 className="d-flex justify-content-center my-1">Inclinação</h4>

        <select name="inclinação" id="inclinação" className="form-select form-select-md mb-1 my-2" onChange={inclinar}>
        <option value="Para Cima">Para Cima</option>
        <option value="Em Repouso">Em Repouso</option>
        <option value="Para Baixo">Para Baixo</option>
        </select>
      </label>
      
     </form>
    </div>
  );
}


export default Cabeca;