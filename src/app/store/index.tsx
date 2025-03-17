import { configureStore } from "@reduxjs/toolkit";

import cvSlice from "../../entities/cv/model/cvSlice";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: {
        cv: cvSlice,
    },
});

function ReduxStoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}

export default ReduxStoreProvider;
