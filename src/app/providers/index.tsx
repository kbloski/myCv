import { Outlet } from "react-router-dom";
import ReduxStoreProvider from "../store";

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReduxStoreProvider>
            {children}
            <Outlet />
        </ReduxStoreProvider>
    );
}
export default Providers;
