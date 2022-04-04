import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cotoveloDireitoAction, pulsoDireitoAction } from '../actions/bracoDireito';
import type { AppDispatch } from '../store';
import '../style/bracos.css';
import Braco from './Braco';

const BracoDireito:React.FC = () => {
  const [alertComponent, setAlertComonent] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  function moverCotovelo(value:string) {
    setAlertComonent(false);
    dispatch(cotoveloDireitoAction(value));
  }

  function moverPulso(value:string) {
    let estadoDireito = localStorage.getItem('Estado Direito');
    if (estadoDireito !== 'Fortemente Contraído') {
      setAlertComonent(true);
      return;
    }
    
    setAlertComonent(false);
    dispatch(pulsoDireitoAction(value));
  }

  return (
    <Braco
      titulo={'Braço Direito'}
      acaoCotovelo={ moverCotovelo }
      acaoPulso={ moverPulso }
      acaoAlert={ alertComponent }
      mensagem={'O Pulso só pode ser movimentado caso o Cotovelo esteja Fortemente Contraído.'}
    />
  );
}

export default BracoDireito;