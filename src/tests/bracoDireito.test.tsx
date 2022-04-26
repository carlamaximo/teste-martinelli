import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from  '@testing-library/react';
import BracoDireito from '../components/BracoDireito';
import { Provider } from 'react-redux';
import {store} from '../store';

describe('Testa o componente "Braço Direito"', () => {

  test('Testa o Título "Braço Direito"', () => {
    render(
      <Provider store={ store }>
        <BracoDireito />
      </Provider>);
    const tituloBraçoDireito = screen.getByText(/Braço Direito/i);
    expect(tituloBraçoDireito).toBeInTheDocument();
  });

  test('Testa o Título "Cotovelo"', () => {
    render(
      <Provider store={ store }>
        <BracoDireito />
      </Provider>);
    const tituloCotovelo = screen.getByText(/Cotovelo/i);
    expect(tituloCotovelo).toBeInTheDocument();
  });

  test('Testa o Título "Pulso"', () => {
    render(
      <Provider store={ store }>
        <BracoDireito />
      </Provider>);
    const tituloPulso = screen.getByText(/Pulso/i);
    expect(tituloPulso).toBeInTheDocument();
  })
});
