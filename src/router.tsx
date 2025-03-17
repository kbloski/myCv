import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cv from "./pages/Cv";

const router = createBrowserRouter([
    {
        path: "/myCv",

        children: [
            {
                path: "",
                element: <Cv />,
            },
        ],
    },
]);

function routerAppProvider() {
    return <RouterProvider router={router} />;
}

export default routerAppProvider;
