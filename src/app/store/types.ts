import { InitialCvSliceState } from "../../entities/cv/model/types";
import { routerSlice } from "../router";
import { InitialStateType as RouterInitialStateType } from "../router/types";

export type SelectorStateType = {
    cv: InitialCvSliceState;
    [routerSlice.name]: RouterInitialStateType;
};
