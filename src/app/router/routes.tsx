import { Cv, Devfolio, NotFound } from "../../pages";

const routes: {
    path: string,
    element: React.ReactNode
}[] = [
    {
        path: "/",
        // element: <Cv />,
        element: <Devfolio />,
    },
    {
        path: "/devfolio",
        element: <Devfolio />,
    },
    {
        path: "/not-found",
        element: <NotFound />,
    },
];

function getNotFoundElement(){
    return routes.find(el => el.path === '/not-found')!.element;
}

function getRouteElementByPath( path: string ){
    const existRoute = routes.find( route => {
        if ( route.path === path) return route;
    })

    if (!existRoute) {
        console.error("Don't find element in routes with path " + path);
        return getNotFoundElement()
    }
    return existRoute.element;
}


export { getRouteElementByPath };
