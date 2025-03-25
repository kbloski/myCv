import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cv from "../pages/Cv";
import Portfolio from "../pages/Devfolio";
import Layout from "../widgets/AppLayout";

const router = createBrowserRouter([
    {
        path: "/myCv",
        element: <Layout />,

        children: [
            {
                path: "",
                element: <Cv />,
            },
            {
                path: "devfolio",
                element: <Portfolio />,
            },
        ],
    },
]);

function routerAppProvider() {
    return <RouterProvider router={router} />;
}

export default routerAppProvider;
