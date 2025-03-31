import { useSelector } from "react-redux";
import { getCurrentRoute } from "./store";
import { getRouteElementByPath } from "./routes";


function routerAppProvider() {
    const route = useSelector(getCurrentRoute)
    return getRouteElementByPath( route.path );
}

export default routerAppProvider;
