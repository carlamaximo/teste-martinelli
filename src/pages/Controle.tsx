import React from 'react';
import BracoEsquerdo from '../components/BracoEsquerdo';
import BracoDireito from '../components/BracoDireito';
import Cabeca from '../components/Cabeca';
import EstadoAtual from '../components/EstadoAtual';
import '../style/app.css'
import Cabecalho from '../components/Cabecalho';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiErrorCircle } from 'react-icons/bi';

const Controle:React.FC = ({usuarioLogado}:any) => {
  return (
    <div className="d-flex flex-column mx-auto my-auto">
      { usuarioLogado > 0 ? (
        <div className="div-principal d-flex flex-column mx-auto my-auto">
          <Cabecalho />
          <Cabeca />
          <div className="d-flex flex-direction-row mx-center div-app-bracos justify-content-center">
            <BracoEsquerdo />
            <BracoDireito />
          </div>
            <EstadoAtual />
        </div>
      ) : (
        <div className="mx-auto my-5 py-5 d-flex align-items-center div-principal">
          <BiErrorCircle size={50} className="mx-4"/>
          <h4>
            Ops! Não encontramos nenhum usuário. Por favor, faça seu login novamente clicando em: 
            <Link to="/" className="login"> Login </Link>
          </h4>
        </div>
        )}
    </div>
  );
}

const mapStateToProps = (state:any) => ({
  usuarioLogado: state.usuarioReducer.usuarioLogado,
});

export default connect(mapStateToProps)(Controle);