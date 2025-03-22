import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cv from "./pages/Cv";
import Portfolio from "./pages/Porfolio";

const router = createBrowserRouter([
    {
        path: "/myCv",

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
