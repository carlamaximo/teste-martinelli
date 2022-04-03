import { ReactNode } from "react";

export interface IPropsState {
  rotation?:ReactNode|string|any,
  inclination?:ReactNode|string|any,
  cotoveloEsquerdo?:ReactNode|string|any,
  pulsoEsquerdo?:ReactNode|string|any,
  cotoveloDireito?:ReactNode|string|any,
  pulsoDireito?:ReactNode|string|any,
}