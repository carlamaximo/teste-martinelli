import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cotoveloEsquerdoAction, pulsoEsquerdoAction } from '../actions/bracoEsquerdo';
import type { AppDispatch } from '../store';
import '../style/bracos.css';
import Braco from './Braco';

const BracoEsquerdo:React.FC = () => {
  const [alertComponent, setAlertComonent] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  function moverCotovelo(value:string) {
    setAlertComonent(false);
    dispatch(cotoveloEsquerdoAction(value));
  }

  function moverPulso(value:string){
    let estadoEsquerdo = localStorage.getItem('Estado Esquerdo');
    if (estadoEsquerdo !== 'Fortemente Contraído') {
      setAlertComonent(true);
      return;
    }
    
    setAlertComonent(false);
    dispatch(pulsoEsquerdoAction(value));
  }

  return (
    <Braco
    titulo={'Braço Esquerdo'}
    acaoCotovelo={ moverCotovelo }
    acaoPulso={ moverPulso }
    acaoAlert={ alertComponent }
    mensagem={'O Pulso só pode ser movimentado caso o Cotovelo esteja Fortemente Contraído.'}
  />
  );
}

export default BracoEsquerdo;