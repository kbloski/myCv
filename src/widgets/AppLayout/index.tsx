import { Outlet } from "react-router-dom";
import { LayoutProps } from "./types";

function Layout( {children} : LayoutProps){
    return <>
        <main>
            <Outlet />
            {children}
        </main>
    </>
}

export default Layout;