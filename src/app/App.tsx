import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import React from 'react';
import './App.css';
import Login from '../page-components/Login.component';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
