import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from  '@testing-library/react';
import BracoEsquerdo from '../components/BracoEsquerdo';
import { Provider } from 'react-redux';
import {store} from '../store';

describe('Testa o componente "Braço Esquerdo"', () => {

  test('Testa o Título "Braço Esquerdo"', () => {
    render(
      <Provider store={ store }>
        <BracoEsquerdo />
      </Provider>);
    const tituloBraçoEsquerdo = screen.getByText(/Braço Esquerdo/i);
    expect(tituloBraçoEsquerdo).toBeInTheDocument();
  });

  test('Testa o Título "Cotovelo"', () => {
    render(
      <Provider store={ store }>
        <BracoEsquerdo />
      </Provider>);
    const tituloCotovelo = screen.getByText(/Cotovelo/i);
    expect(tituloCotovelo).toBeInTheDocument();
  });

  test('Testa o Título "Pulso"', () => {
    render(
      <Provider store={ store }>
        <BracoEsquerdo />
      </Provider>);
    const tituloPulso = screen.getByText(/Pulso/i);
    expect(tituloPulso).toBeInTheDocument();
  })
});
