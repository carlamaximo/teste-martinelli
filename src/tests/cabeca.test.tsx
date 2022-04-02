import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from  '@testing-library/react';
import Cabeca from '../components/Cabeca';
import { Provider } from 'react-redux';
import store from '../store';

describe('Testa o componente "Cabeça"', () => {

  test('Testa o Título "Cabeça"', () => {
    render(
      <Provider store={ store }>
        <Cabeca />
      </Provider>);
    const tituloCabeca = screen.getByText(/Cabeça/i);
    expect(tituloCabeca).toBeInTheDocument();
  });

  test('Testa o Título "Rotação"', () => {
    render(
      <Provider store={ store }>
        <Cabeca />
      </Provider>);
    const tituloRotacao = screen.getByTestId('rotacao');
    expect(tituloRotacao).toBeInTheDocument();
  });

  test('Testa o Título "Inclinação"', () => {
    render(
      <Provider store={ store }>
        <Cabeca />
      </Provider>);
    const tituloInclinacao = screen.getByText(/Inclinação/i);
    expect(tituloInclinacao).toBeInTheDocument();
  })
});
