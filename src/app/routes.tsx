import {createBrowserRouter} from 'react-router-dom';
import DashboardLayout from './layouts/Dashboard.Layout';

const route = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/department',
                lazy: () => import('./page-components/Department/department.component'),
                children: [
                    {
                        path: '/department/:id',
                    }
                ]
            },
            {
                path: '/course',
                lazy: () => import('./page-components/Course/course.component')
            }
        ]
    },
    {
        path: '*',
        element: <div>Not Found...</div>
    }
])

export default route;