import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import React from 'react';
import awsmobile from '../aws-exports';
import { CoursesCreateForm } from '../ui-components';
import '../styles/_login.scss'
import { Courses } from './courses.component';


function Login() {
  Amplify.configure(awsmobile)
  return (
    <div className="login-template">
        <Authenticator signUpAttributes={['email', 'name', 'phone_number']} loginMechanisms={['email']}>
      {({ signOut, user }) => {
        
        return(
            <div>
                <Courses />

                <a className="App-link"  rel="noopener noreferrer" onClick={signOut}>
                    Sign Out
                </a>
            </div>
      )}}
        </Authenticator>
    </div>
  );
}

export default Login;


// <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>
//             Hello {user?.username}
//           </p>
//           <CoursesCreateForm />
//           <a
//             className="App-link"
//             // href="/"
//             rel="noopener noreferrer"
//             onClick={signOut}
//           >
//             Sign Out
//           </a>
//         </header>
//       </div>