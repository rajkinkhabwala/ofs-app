import { API, Auth } from "aws-amplify";

export async function addToGroup(email: string, groupName: string) { 
    let apiName = 'AdminQueries';
    let path = '/addUserToGroup';
    let myInit = {
        body: {
          "email" : email,
          "groupname": groupName
        }, 
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        } 
    }

    return await new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    }) 
  }


  export async function listUsers() { 
    let apiName = 'AdminQueries';
    let path = '/listUsers';
    let myInit = { 
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        } 
    }

    return await new Promise((resolve, reject) => {
        API.get(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    }) 
  }

  export async function removeUserFromGroup() { 
    let apiName = 'AdminQueries';
    let path = '/removeUserFromGroup';
    let myInit = { 
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        } 
    }

    return await new Promise((resolve, reject) => {
        API.get(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    }) 
  }

  export async function listGroups() { 
    let apiName = 'AdminQueries';
    let path = '/listGroups';
    let myInit = { 
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        } 
    }

    return await new Promise((resolve, reject) => {
        API.get(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    }) 
  }

  export async function signUserOut(username: string) { 
    let apiName = 'AdminQueries';
    let path = '/signUserOut';
    let myInit = { 
        body:{
            "username": username 
        },
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        } 
    }

    return await new Promise((resolve, reject) => {
        API.get(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    }) 
  }  