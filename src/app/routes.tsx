import {createBrowserRouter} from 'react-router-dom';
import DashboardLayout from './layouts/Dashboard.Layout';

const route = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/department',
                lazy: () => import('./page-components/Department/Department.component')
            }
        ]
    }
])

export default route;