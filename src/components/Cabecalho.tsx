import React, { useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { usuarioLogoutAction } from '../actions/usuario';
import { AppDispatch } from '../store';
import { SiProbot } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Cabecalho:React.FC = ({ usuarioLogado, username }:any) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      {usuarioLogado > 0 ? 
      <nav className="d-flex justify-content-between my-2 mx-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="/"><SiProbot size={20} className="mx-auto"/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Controle Robô Martinelli</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" aria-disabled="true">Quem está controlando o robô:  { username }</a>
          </li>
        </ul>
        <Link to="/">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(usuarioLogoutAction(''))}>
              Sair
            </button>
        </Link>
      </nav> : 
      <div
        className="mx-auto">
          Ops! Não encontramos nenhum usuário. Por favor, faça seu login novamente clicando em: 
          <Link to="/">Login</Link>
      </div>
    }
    </div>
  );
}

const mapStateToProps = (state:any) => ({
  usuarioLogado: state.usuarioReducer.usuarioLogado,
  username: state.usuarioReducer.username,
});

export default connect(mapStateToProps)(Cabecalho);