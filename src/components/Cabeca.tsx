import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/cabeca.css';
import { IProps } from '../interface/Props';
import { rotationHeadAction, inclinationHeadAction } from '../actions/cabeca';
import CarouselComponent from './CarouselComponent';

const Cabeca:React.FC<IProps> = () => {
  const dispatch = useDispatch();

  function rotacionar(value:string|any) {
    dispatch(rotationHeadAction(value));
  }

  function inclinar(value:string|any) {
    dispatch(inclinationHeadAction(value));
  }

  return (
    <div className="div-principal-cabeca">
    <h3 className="d-flex justify-content-center h3-cabeca p-1">Cabeça</h3>
     <form action="" className="d-flex justify-content-center">

       <label htmlFor="rotação" className="form  mx-3 labelInclinacao">
         <h4 className="d-flex justify-content-center my-1">Rotação</h4>
         <div className="div-carousel-inclinacao mx-auto">
        <CarouselComponent arrayProps={['Rotação - 90°', 'Rotação - 45°', 'Em Repouso', 'Rotação 45°', 'Rotação 90°']} functionProps={rotacionar}/>
        </div>
        {/* <select name="rotação" id="rotação" className="form-select form-select-md mb-1 my-2" onChange={rotacionar}>
          <option value="- 90°">Rotação - 90°</option>
          <option value="- 45°">Rotação - 45°</option>
          <option selected value="Em Repouso">Em Repouso</option>
          <option value="45°">Rotação 45°</option>
          <option value="90°">Rotação 90°</option>
        </select> */}
      </label>

      <label htmlFor="inclinação" className="mx-3 labelInclinacao">
        <h4 className="d-flex justify-content-center my-1">Inclinação</h4>

        <div className="div-carousel-inclinacao mx-auto">
        <CarouselComponent arrayProps={['Pra Cima', 'Pra Baixo', 'Em Repouso']} functionProps={inclinar}/>
        </div>
        {/* <select name="inclinação" id="inclinação" className="form-select form-select-md mb-1 my-2" onChange={inclinar}>
        <option value="Para Cima">Para Cima</option>
        <option selected value="Em Repouso">Em Repouso</option>
        <option value="Para Baixo">Para Baixo</option>
        </select> */}
      </label>
      
     </form>
    </div>
  );
}

export default Cabeca;