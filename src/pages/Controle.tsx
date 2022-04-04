import React from 'react';
import BracoEsquerdo from '../components/BracoEsquerdo';
import BracoDireito from '../components/BracoDireito';
import Cabeca from '../components/Cabeca';
import EstadoAtual from '../components/EstadoAtual';
import '../style/app.css'
import Cabecalho from '../components/Cabecalho';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <div
          className="mx-auto my-5 py-5">
          Ops! Não encontramos nenhum usuário. Por favor, faça seu login novamente clicando em: 
          <Link to="/"> Login </Link>
        </div>
        )}
    </div>
  );
}

const mapStateToProps = (state:any) => ({
  usuarioLogado: state.usuarioReducer.usuarioLogado,
});

export default connect(mapStateToProps)(Controle);