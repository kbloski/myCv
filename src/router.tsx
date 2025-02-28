import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Cv from './features/cv/Cv';
import WorkingInProgress from './features/ui/WorkingInProgress';

const router = createBrowserRouter([{
    path: '/myCv',
    // errorElement: 

    // Working in progress page
    // path: '/myCv/*',
    // element: <WorkingInProgress />,

    children: [
        {
            path: '',
            element: <Cv />
            
        }
    ]
}])

function routerAppProvider(){
    return <RouterProvider router={router} />
}

export default routerAppProvider;

