import React, { useState } from 'react';
import { useDispatch, useSelector, useStore, shallowEqual } from 'react-redux';
import { cotoveloEsquerdoAction, pulsoEsquerdoAction } from '../actions/bracoEsquerdo';
import type { AppDispatch } from '../store';
import type { RootState } from '../reducers';
import '../style/bracos.css';
import Braco from './Braco';

const BracoEsquerdo:React.FC = () => {
  const [alertComponent, setAlertComonent] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const selector = useSelector(((state: RootState|any) => state.cotoveloEsquerdoReducer.cotoveloEsquerdo === 'Fortemente Contraído'));

  function moverCotovelo(value:string) {
    setAlertComonent(false);
    dispatch(cotoveloEsquerdoAction(value));
  }

  function moverPulso(value:string){
    if (selector === false) {
      setAlertComonent(true);
      return;
    }
    
    setAlertComonent(false);
    dispatch(pulsoEsquerdoAction(value));
  }

  return (
    <Braco
    titulo={'Braço Esquerdo'}
    acaoCotovelo={moverCotovelo}
    acaoPulso={moverPulso}
    acaoAlert={alertComponent}
    mensagem={'O Pulso só pode ser movimentado caso o Cotovelo esteja Fortemente Contraído.'}
  />
  );
}

export default BracoEsquerdo;