const INITIAL_STATE = {
  cotoveloEsquerdo: 'Em Repouso',
  pulsoEsquerdo: 'Em Repouso',
};

export const cotoveloEsquerdoReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case 'COTOVELO_ESQUERDO_ACTION':
      return { cotoveloEsquerdo: action.cotoveloEsquerdo };
    default:
      return state;
  }
}

export const pulsoEsquerdoReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case 'PULSO_ESQUERDO_ACTION':
      return { pulsoEsquerdo: action.pulsoEsquerdo };
    default:
      return state;
  }
}