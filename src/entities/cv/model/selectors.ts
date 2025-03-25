import type { InitialCvSliceState } from "./types";

type StateType = { cv: InitialCvSliceState}

export const getCvData = (state: StateType) => state.cv as StateType['cv'];
export const getName = (state: StateType) => state.cv.name as string;
