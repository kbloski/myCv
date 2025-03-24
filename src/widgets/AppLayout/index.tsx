import { Outlet } from "react-router-dom";
import Header from "../Header";
import { LayoutProps } from "./types";

function Layout( {children} : LayoutProps){
    return <>
        <Header />
        <main>
            <Outlet />
            {children}
        </main>
    </>
}

export default Layout;