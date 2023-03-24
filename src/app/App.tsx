import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import router from './routes';
import { Amplify } from 'aws-amplify';
import React from 'react';
import './App.css';
import Login from './page-components/Login.component';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { RouterProvider } from 'react-router';
import "./styles/_login.scss";
import awsmobile from '../aws-exports';


function App() {
  Amplify.configure(awsmobile);
  const { route, user } = useAuthenticator(context => [context.route]);
  console.log(user)
  return (
    <MantineProvider>
      <ModalsProvider>
      {
        route === 'authenticated' ? 
        <RouterProvider router={router} /> : 
        <div className='login-template'>
          <Authenticator 
            signUpAttributes={["email", "name", "phone_number"]}
            loginMechanisms={["email"]}/>
          </div>
      }
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
