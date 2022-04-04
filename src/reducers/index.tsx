import { combineReducers } from 'redux';
import { rotationHeadReducer, inclinationHeadReducer } from './headReducer';
import { cotoveloEsquerdoReducer, pulsoEsquerdoReducer } from './bracoEsquerdoReducer';
import { cotoveloDireitoReducer, pulsoDireitoReducer } from './bracoDireitoReducer';
import { usuarioReducer } from './usuarioReducer';

const rootReducer = combineReducers({ rotationHeadReducer, inclinationHeadReducer, cotoveloEsquerdoReducer, pulsoEsquerdoReducer, cotoveloDireitoReducer, pulsoDireitoReducer, usuarioReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;