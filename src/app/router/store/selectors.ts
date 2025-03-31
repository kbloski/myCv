import { SelectorStateType } from "../../store/types";

export const getCurrentRoute = ( state: SelectorStateType) => state.router.currentRoute as SelectorStateType['router']['currentRoute'];

export const getCurrentRoutePath = ( state: SelectorStateType) => state.router.currentRoute.path as SelectorStateType['router']['currentRoute']['path'];

