import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cotoveloDireitoAction, pulsoDireitoAction } from '../actions/bracoDireito';
import type { RootState } from '../reducers';
import type { AppDispatch } from '../store';
import '../style/bracos.css';
import Braco from './Braco';

const BracoDireito:React.FC = () => {
  const [alertComponent, setAlertComonent] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const selector:boolean = useSelector((state:RootState|any) => state.cotoveloDireitoReducer.cotoveloDireito === 'Fortemente Contraído');

  function moverCotovelo(value:string) {
    setAlertComonent(false);
    dispatch(cotoveloDireitoAction(value));
  }

  function moverPulso(value:string) {
    if (selector === false) {
      setAlertComonent(true);
      return;
    }
    
    setAlertComonent(false);
    dispatch(pulsoDireitoAction(value));
  }

  return (
    <Braco
      titulo={'Braço Direito'}
      acaoCotovelo={moverCotovelo}
      acaoPulso={moverPulso}
      acaoAlert={alertComponent}
      mensagem={'O Pulso só pode ser movimentado caso o Cotovelo esteja Fortemente Contraído.'}
    />
  );
}

export default BracoDireito;