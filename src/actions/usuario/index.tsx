export const usuarioLoginAction = (value:string) => (
  { type: 'LOGIN_ACTION', username: value });

export const usuarioLogoutAction = (value:string) => (
  { type: 'LOGOUT_ACTION', username: value });

