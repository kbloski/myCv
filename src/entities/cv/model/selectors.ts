import { SelectorStateType } from "../../../app/store/types";
import type { InitialCvSliceState } from "./types";


export const getAboutMe = (state: SelectorStateType) => state.cv.aboutMe as string;

export const getCvData = (state: SelectorStateType) => state.cv as SelectorStateType['cv'];

export const getEducation = (state: SelectorStateType) => state.cv.education as InitialCvSliceState['education'];

export const getExperience = (state: SelectorStateType) => state.cv.experience as InitialCvSliceState['experience'];

export const getFullName = (state: SelectorStateType) => `${state.cv.name} ${state.cv.surname}` as string;

export const getHobbies = (state: SelectorStateType) => state.cv.hobbies as InitialCvSliceState['hobbies'];

export const getLanguages = (state: SelectorStateType) => state.cv.skills.languages as InitialCvSliceState['skills']['languages'];

export const getName = (state: SelectorStateType) => state.cv.name as string;

export const getProfession = (state: SelectorStateType) => state.cv.profession as string;

export const getSoftSkills = (state: SelectorStateType) => state.cv.skills.soft as InitialCvSliceState['skills']['soft'];

export const getProgrammingSkils = (state: SelectorStateType) => state.cv.skills.programming.familiar as InitialCvSliceState['skills']['programming']['familiar'];
