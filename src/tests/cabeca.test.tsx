import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen } from  '@testing-library/react';
import Cabeca from '../components/Cabeca';
import EstadoAtual from '../components/EstadoAtual';
import { Provider } from 'react-redux';
import store from '../store';

describe('Testa o componente "Cabeça"', () => {

  test('Testa o Título "Cabeça"', () => {
    render(
      <Provider store={ store }>
        <Cabeca />
      </Provider>);
    const tituloCabeca = screen.getByText<HTMLElement>(/Cabeça/i);
    expect(tituloCabeca).toBeInTheDocument();
  });

  test('Testa o Título "Rotação"', () => {
    render(
      <Provider store={ store }>
        <Cabeca />
      </Provider>);
    const tituloRotacao = screen.getByTestId<HTMLElement>('rotacao');
    expect(tituloRotacao).toBeInTheDocument();
  });

  test('Testa o Título "Inclinação"', () => {
    render(
      <Provider store={ store }>
        <Cabeca />
      </Provider>);
    const tituloInclinacao = screen.getByText<HTMLElement>(/Inclinação/i);
    expect(tituloInclinacao).toBeInTheDocument();
  });

  test('Testa o Carrosel da Cabeça', () => {
    render(
      <Provider store={ store }>
        <Cabeca />
        <EstadoAtual />
      </Provider>);
    const carousel = screen.getAllByText<HTMLElement>(/Em Repouso/i);
    expect(carousel.length).toBe(14);

    const setas = screen.getAllByRole<HTMLElement>('button');
    const setaDireita = setas[1];
    expect(setaDireita).toBeInTheDocument();

    userEvent.click(setaDireita);
  });

  test('Testa o comportamento do estado atual da rotação da cabeça depois do movimento de click na seta do carrosel', () => {
    render(
      <Provider store={ store }>
        <Cabeca />
        <EstadoAtual />
      </Provider>);

    const carousel = screen.getAllByText<HTMLElement>(/Em Repouso/i);
    expect(carousel.length).toBe(13);
  });
});
