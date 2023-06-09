import { Outlet, useOutletContext } from "react-router-dom";
import { AmplifyUser } from '@aws-amplify/ui';
import {json} from "react-router-dom"

export function Component(){
    const user = useOutletContext<AmplifyUser>();
    const groups = user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"];

    if(!groups.includes('Students')){
         
        throw json(
            { message: "You are not authorized" },
            { status: 401 }
        );
    }

    return(
        <Outlet />
    )
    
    
}

Component.displayName = "StudentDashboard"

