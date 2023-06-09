import { createBrowserRouter} from 'react-router-dom';
import DashboardLayout from './layouts/dashboard.layout';
import { ErrorComponent } from './common-components/Errors/Error/Error.component';

const route = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
    
                path: 'admin/',
                lazy: () => import('./layouts/dashboard/admin.dashboard'),
                children: [
                    {
                        path: 'departments/',
                        lazy: () => import('./page-components/Department/department.component'),
                    },
                    {
                        path: 'departments/:id/',
                        lazy: () => import('./page-components/Department/singledepartment.component')
                    },
                    {
                        path: 'courses/',
                        lazy: () => import('./page-components/Course/course.component')
                    },
                    {
                        path: 'courses/:id/',
                        lazy: () => import('./page-components/Course/singlecourse.component')
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
                        path: 'assignments/',
                        lazy: () => import('./page-components/Assignment/assignment.component')
                    },
                    {
                        path: 'assignments/:id',
                        lazy: () => import('./page-components/Assignment/singleassignment.component')
                    }
                   
                ],
             
        },
        {
            path: "student/",
            lazy: () => import('./layouts/dashboard/student.dashboard'),
            children:[
                // Add Routes Over here
            ]


        },
        {
            path: "teacher/",
        }

        ],
        errorElement: <ErrorComponent />
    },
    {
        path: '*',
        element: <ErrorComponent />
    }
])

export default route;