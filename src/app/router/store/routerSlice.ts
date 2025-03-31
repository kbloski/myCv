import { createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "../types";

const initialState: InitialStateType = {
    currentRoute: { path: '/'},
};

const routerSlice = createSlice({
    name: "router",
    initialState,
    reducers: {
        navigateTo: (
            state,
            action: {
                payload: { path: string };
                type: string;
            }
        ) => {
            const routePath = action.payload.path;
            state.currentRoute.path = routePath;
        },
    },
});

export const { navigateTo } = routerSlice.actions;

export const { reducer } = routerSlice;

export default routerSlice;
