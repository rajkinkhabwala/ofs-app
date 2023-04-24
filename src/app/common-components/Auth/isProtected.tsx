import { PropsWithChildren } from "react";
import { Auth } from 'aws-amplify';
import {CognitoUser} from "amazon-cognito-identity-js"
 
interface IisProtected {
    roles: []
}

export default async function IsProtected({children, roles}: PropsWithChildren<IisProtected>){
    const user: CognitoUser =  await Auth.currentAuthenticatedUser();
    // Returns an array of groups
    const groups = user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"];

    console.log(groups)

    return children

    
}