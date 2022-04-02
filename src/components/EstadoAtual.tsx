import React from 'react';
import { IProps } from '../interface/Props';
import { connect } from 'react-redux';
import '../style/estado.css'

const EstadoAtual:React.FC<IProps> = ({
  rotation, inclination, cotoveloEsquerdo, pulsoEsquerdo, cotoveloDireito, pulsoDireito 
  }) => {

    // function pulsoValidation() {
      
    // }

  return (
    <div className="mx-auto d-flex flex-column div-principal-estado">
    <h3 className="d-flex justify-content-center p-1 h3-estado">Estado Atual</h3>

      <div className="d-flex justify-content-center">
        <div className="div-estado-item">
          <h4 className="d-flex mx-5 py-2 justify-content-center">Cabeça: </h4>
          <p className="d-flex justify-content-center">Rotação: { rotation }</p>
          <p className="d-flex justify-content-center">Inclinação: { inclination }</p>
        </div>

        <div className="div-estado-item">
          <h4 className="d-flex mx-5 py-2 justify-content-center">Braço Esquerdo: </h4>
          <p className="d-flex justify-content-center">Cotovelo: { cotoveloEsquerdo }</p>
          <p className="d-flex justify-content-center">Pulso: { pulsoEsquerdo }</p>
        </div>

        <div className="div-estado-item">
          <h4 className="d-flex mx-5 py-2 justify-content-center">Braço Direito: </h4>
          <p className="d-flex justify-content-center">Cotovelo: { cotoveloDireito }</p>
          <p className="d-flex justify-content-center">Pulso: { pulsoDireito }</p>
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