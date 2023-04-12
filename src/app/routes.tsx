import {createBrowserRouter} from 'react-router-dom';
import DashboardLayout from './layouts/dashboard.layout';
import PageNotFound from './common-components/Errors/404/404.component';

const route = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: 'departments/',
                lazy: () => import('./page-components/Department/department.component'),
            },
            {
                path: 'departments/:id',
                lazy: () => import('./page-components/Department/singledepartment.component')
            },
            {
                path: 'courses/',
                lazy: () => import('./page-components/Course/course.component')
            },
            {
                path: 'users/',
                lazy: () => import('./page-components/User/user.component'),
            },
            {
                path: 'users/:id/',
                lazy: () => import('./page-components/User/singleuser.compontent')
            },
            {
                path: '*',
                element: <PageNotFound />
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
])

export default route;