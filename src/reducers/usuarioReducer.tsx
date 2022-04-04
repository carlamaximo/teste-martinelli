
const INITIAL_STATE = {
  username: '',
  usuarioLogado: 0,
};

export const usuarioReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case 'LOGIN_ACTION':
      return {
        ...state,
        usuarioLogado: 1,
       username: action.username
      };
    case 'LOGOUT_ACTION':
      return {
        ...state,
        usuarioLogado: 0,
        username: null,
      }
    default:
      return state;
  }
}
