import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Cv from './features/cv/Cv';

const router = createBrowserRouter([{
    path: '/myCv',
    element: <Cv />

    // children: [
    //     {
    //         path: '',
            
    //     }
    // ]
}])

function routerAppProvider(){
    return <RouterProvider router={router} />
}

export default routerAppProvider;

