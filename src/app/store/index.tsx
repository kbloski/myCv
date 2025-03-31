import { configureStore } from "@reduxjs/toolkit";

import cvSlice from "../../entities/cv/model/cvSlice";
import { reducer as routerReducer, routerSlice} from '../router'
import { Provider } from "react-redux";

const store = configureStore({
    reducer: {
        cv: cvSlice,
        [routerSlice.name]: routerReducer
    },
});

function ReduxStoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}

export default ReduxStoreProvider;
