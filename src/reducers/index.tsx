import { combineReducers } from 'redux';
import { rotationHeadReducer, inclinationHeadReducer } from './headReducer';
import { cotoveloEsquerdoReducer, pulsoEsquerdoReducer } from './bracoEsquerdoReducer';
import { cotoveloDireitoReducer, pulsoDireitoReducer } from './bracoDireitoReducer';

const rootReducer = combineReducers({ rotationHeadReducer, inclinationHeadReducer, cotoveloEsquerdoReducer, pulsoEsquerdoReducer, cotoveloDireitoReducer, pulsoDireitoReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;