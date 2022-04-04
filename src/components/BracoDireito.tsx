import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual, connect, useStore } from 'react-redux';
import { cotoveloDireitoAction, pulsoDireitoAction } from '../actions/bracoDireito';
import type { RootState } from '../reducers';
import type { AppDispatch } from '../store';
import '../style/bracos.css';
import Braco from './Braco';

const BracoDireito:React.FC = () => {
  const [alertComponent, setAlertComonent] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const store = useStore();

  const selector = useSelector((state:RootState|any) => state.cotoveloDireitoReducer.cotoveloDireito);
  // const testeShallow = shallowEqual(selector, 'Fortemente Contraído');

  // useEffect(() => console.log('store', store.getState()), [store]);



  // function select(state:any) {
  //   return state.cotoveloDireitoReducer.cotoveloDireito;
  // }
  
  // let currentValue:any;
  // function handleChange() {
  //   let previousValue = currentValue;
  //   currentValue = select(store.getState())
  
  //   if (previousValue !== currentValue) {
  //     console.log(
  //       'Some deep nested property changed from',
  //       previousValue,
  //       'to',
  //       currentValue
  //     )
  //   }
  // }
  
  // const unsubscribe = store.subscribe(handleChange)
  
  function moverCotovelo(value:string) {
    // unsubscribe();
    console.log('testeShallow', selector);
    setAlertComonent(false);
    dispatch(cotoveloDireitoAction(value));
  }

  function moverPulso(value:string) {
    // console.log('testeShallow', cotoveloDireito);
    if ("oi") {
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

// const mapStateToProps = (state:RootState|any) => ({
//   cotoveloDireito: state.cotoveloDireitoReducer.cotoveloDireito,
// });


export default BracoDireito;