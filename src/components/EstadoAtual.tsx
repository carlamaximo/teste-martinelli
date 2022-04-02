import React from 'react';
import { IProps } from '../interface/Props';
import { connect } from 'react-redux';

const EstadoAtual:React.FC<IProps> = ({
  rotation, inclination, cotoveloEsquerdo, pulsoEsquerdo, cotoveloDireito, pulsoDireito 
  }) => {
    
  return (
    <div className="my-3 mx-auto my-4 d-flex flex-column">
    <h3 className="d-flex justify-content-center my-2 p-1 h3-cabeca">Estado Atual</h3>

      <div className="d-flex">
        <div>
          <h4 className="d-flex mx-5 py-2">Cabeça: </h4>
          <p className="mx-center">Rotação: { rotation }</p>
          <p className="mx-center">Inclinação: { inclination }</p>
        </div>

        <div>
          <h4 className="d-flex mx-5 py-2">Braço Esquerdo: </h4>
          <p className="mx-center">Cotovelo: { cotoveloEsquerdo }</p>
          <p className="mx-center">Pulso: { pulsoEsquerdo }</p>
        </div>

        <div>
          <h4 className="d-flex mx-5 py-2">Braço Direito: </h4>
          <p className="mx-center">Cotovelo: { cotoveloDireito }</p>
          <p className="mx-center">Pulso: { pulsoDireito }</p>
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = (state:any) => ({
  rotation: state.rotationHeadReducer.rotation,
  inclination: state.inclinationHeadReducer.inclination,
  cotoveloEsquerdo: state.cotoveloEsquerdoReducer.cotoveloEsquerdo,
  pulsoEsquerdo: state.pulsoEsquerdoReducer.pulsoEsquerdo,
  cotoveloDireito: state.cotoveloDireitoReducer.cotoveloDireito,
  pulsoDireito: state.pulsoDireitoReducer.pulsoDireito,
});

export default connect(mapStateToProps, null)(EstadoAtual);