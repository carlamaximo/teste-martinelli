import React from 'react';
import { IPropsState } from '../interface/PropsState';
import { connect } from 'react-redux';
import type { RootState } from '../store';
import '../style/estado.css';

const EstadoAtual:React.FC<IPropsState> = ({
  rotation, inclination, cotoveloEsquerdo, pulsoEsquerdo, cotoveloDireito, pulsoDireito 
  }:IPropsState) => {

    function validarPulso(state:string):string {
      const resultado = state === 'Em Repouso' ? `Estado do Pulso: ${ state } ` : `Rotação do Pulso: ${ state }`;
      return resultado;
    }

    function validarCotovelo(state:string):string {
      const resultado = state === 'Em Repouso' ? `Estado do Cotovelo: ${ state } ` : `Rotação do Cotovelo: ${ state }`;
      return resultado;
    }

  return (
    <div className="mx-auto d-flex flex-column div-principal-estado">
    <h3 className="d-flex justify-content-center p-1 h3-estado">Estado Atual</h3>

      <div className="d-flex justify-content-center estado-item">
        <div className="div-estado-item">
          <h4 className="d-flex mx-5 py-2 justify-content-center">Braço Esquerdo: </h4>
          <p className="d-flex justify-content-center">{validarCotovelo(cotoveloEsquerdo)}</p>
          <p className="d-flex justify-content-center">{validarPulso(pulsoEsquerdo)}</p>
        </div>

        <div className="div-estado-item">
          <h4 className="d-flex mx-5 py-2 justify-content-center">Cabeça: </h4>
          <p className="d-flex justify-content-center" data-testid="estado-rotacao-cabeca">Rotação: { rotation }</p>
          <p className="d-flex justify-content-center">Inclinação: { inclination }</p>
        </div>

        <div className="div-estado-item">
          <h4 className="d-flex mx-5 py-2 justify-content-center">Braço Direito: </h4>
          <p className="d-flex justify-content-center">{validarCotovelo(cotoveloDireito)}</p>
          <p className="d-flex justify-content-center">{validarPulso(pulsoDireito) }</p>
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = (state:RootState|any) => ({
  rotation: state.rotationHeadReducer.rotation,
  inclination: state.inclinationHeadReducer.inclination,
  cotoveloEsquerdo: state.cotoveloEsquerdoReducer.cotoveloEsquerdo,
  pulsoEsquerdo: state.pulsoEsquerdoReducer.pulsoEsquerdo,
  cotoveloDireito: state.cotoveloDireitoReducer.cotoveloDireito,
  pulsoDireito: state.pulsoDireitoReducer.pulsoDireito,
});

export default connect(mapStateToProps, null)(EstadoAtual);