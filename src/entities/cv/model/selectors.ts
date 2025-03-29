import type { InitialCvSliceState } from "./types";

type StateType = { cv: InitialCvSliceState}

export const getAboutMe = (state: StateType) => state.cv.aboutMe as string;

export const getCvData = (state: StateType) => state.cv as StateType['cv'];

export const getEducation = (state: StateType) => state.cv.education as InitialCvSliceState['education'];

export const getExperience = (state: StateType) => state.cv.experience as InitialCvSliceState['experience'];

export const getFullName = (state: StateType) => `${state.cv.name} ${state.cv.surname}` as string;

export const getHobbies = (state: StateType) => state.cv.hobbies as InitialCvSliceState['hobbies'];

export const getLanguages = (state: StateType) => state.cv.skills.languages as InitialCvSliceState['skills']['languages'];

export const getName = (state: StateType) => state.cv.name as string;

export const getProfession = (state: StateType) => state.cv.profession as string;

export const getSoftSkills = (state: StateType) => state.cv.skills.soft as InitialCvSliceState['skills']['soft'];

export const getProgrammingSkils = (state: StateType) => state.cv.skills.programming.familiar as InitialCvSliceState['skills']['programming']['familiar'];
