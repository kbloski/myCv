import { useDispatch } from "react-redux";
import { navigateTo } from "../../app/router";

function NotFound() {
    const dispatch = useDispatch();

    function handleGoHome(){
        dispatch(navigateTo({path: '/'}))
    }
    
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">

            <h1 className="text-4xl font-bold text-red-600">404 - Not Found</h1>
            <p className="text-lg text-gray-600 mt-2">
                Oops! The page you are looking for does not exist.
            </p>
            <button onClick={handleGoHome}>
                Go Back Home
            </button>
        </div>
    );
}

export default NotFound;