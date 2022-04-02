const INITIAL_STATE = {
  cotoveloDireito: 'Em Repouso',
  pulsoDireito: 'Em Repouso',
};

export const cotoveloDireitoReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case 'COTOVELO_DIREITO_ACTION':
      return { cotoveloDireito: action.cotovelo };
    default:
      return state;
  }
}

export const pulsoDireitoReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case 'PULSO_DIREITO_ACTION':
      return { pulsoDireito: action.pulso };
    default:
      return state;
  }
}