import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { SiProbot } from 'react-icons/si';
import { usuarioLoginAction } from '../actions/usuario';
import '../style/login.css';
import { Link } from 'react-router-dom';

const Login:React.FC = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  function logar() {
    dispatch(usuarioLoginAction(username));
    localStorage.removeItem('Estado Cabeça');
    localStorage.removeItem('Estado Esquerdo');
    localStorage.removeItem('Estado Direito');
  }

  return (
    <div className="div-principal-login d-flex flex-column mx-auto my-auto">
      <h1 className="mx-auto my-5 h1-login">Bem vindo(a) ao controle do Robô Martinelli!</h1>
      <h2 className="mx-auto my-5 h2-login">Faça seu login para entrar na aplicação:</h2>
      <SiProbot size={100} className="mx-auto  my-5"/>

      <form className="mx-auto my-5">
        <label htmlFor="username" className="form-label">
          <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Digite seu usuário"
          onChange={ ({ target }) => setUsername(target.value) }
          />
        </label>
        <Link to='/home'>
          <button
            className="btn btn-secondary btn-lg mx-3"
            onClick={ logar }
          >Entrar
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;