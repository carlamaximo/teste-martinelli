import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/cabeca.css';
import { rotationHeadAction, inclinationHeadAction } from '../actions/cabeca';
import type { AppDispatch } from '../store';
import type { RootState } from '../reducers';
import CarouselComponent from './CarouselComponent';
import AlertDismissibleExample from './AlertDismissibleExample';

const Cabeca:React.FC = () => {
  const [alertComponent, setAlertComonent] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const selector:boolean = useSelector((state: RootState|any) => state.inclinationHeadReducer.inclination === 'Pra Baixo');

  function rotacionar(value:string) {
    if (selector === true) {
      setAlertComonent(true);
      return;
    }

    setAlertComonent(false);
    dispatch(rotationHeadAction(value));
  }

  function inclinar(value:string) {
    console.log(selector);
    setAlertComonent(false);
    dispatch(inclinationHeadAction(value));
  }

  return (
    <div className="div-principal-cabeca">
    <h3 className="d-flex justify-content-center h3-cabeca p-1" data-testid="cabeca">Cabeça</h3>
      {
        alertComponent &&
        <AlertDismissibleExample
        mensagem={'A Cabeça só pode ser rotacionada caso sua Inclinação não esteja Para Baixo.'}/>
      }
     <form action="" className="d-flex justify-content-center">

       <label htmlFor="rotação" className="form  mx-3 labelInclinacao">
        <h4 className="d-flex justify-content-center my-1" data-testid="rotacao">Rotação</h4>
         <div className="div-carousel-inclinacao mx-auto">
          <CarouselComponent
            arrayProps={['Rotação - 90°', 'Rotação - 45°', 'Em Repouso', 'Rotação 45°', 'Rotação 90°']}
            functionProps={rotacionar}
          />
        </div>
   
      </label>

      <label htmlFor="inclinação" className="mx-3 labelInclinacao">
        <h4 className="d-flex justify-content-center my-1">Inclinação</h4>

        <div className="div-carousel-inclinacao mx-auto">
        <CarouselComponent arrayProps={['Em Repouso','Pra Baixo', 'Em Repouso', 'Pra Cima','Em Repouso', 'Pra Baixo']} functionProps={inclinar}/>
        </div>
    
      </label>
      
     </form>
    </div>
  );
}

export default Cabeca;