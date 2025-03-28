import type { InitialCvSliceState } from "./types";

type StateType = { cv: InitialCvSliceState}

export const getAboutMe = (state: StateType) => state.cv.aboutMe as string;

export const getCvData = (state: StateType) => state.cv as StateType['cv'];

export const getEducation = (state: StateType) => state.cv.education as InitialCvSliceState['education'];

export const getExperience = (state: StateType) => state.cv.experience as InitialCvSliceState['experience'];

export const getFullName = (state: StateType) => `${state.cv.name} ${state.cv.surname}` as string;

export const getName = (state: StateType) => state.cv.name as string;

export const getProfession = (state: StateType) => state.cv.profession as string;

