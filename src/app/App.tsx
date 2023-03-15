import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import React from 'react';
import './App.css';
import awsmobile from '../aws-exports';
import { CoursesCreateForm } from '../ui-components';


function App() {
  Amplify.configure(awsmobile)
  return (
    <Authenticator signUpAttributes={['email', 'name', 'phone_number']} loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Hello {user?.username}
          </p>
          <CoursesCreateForm />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={signOut}
          >
            Sign Out
          </a>
        </header>
      </div>
      )}
    </Authenticator>
  );
}

export default App;
