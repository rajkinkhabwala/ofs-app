import React from 'react';
import ReactDOM from 'react-dom/client';
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Authenticator } from '@aws-amplify/ui-react';
import {QueryClientProvider, QueryClient} from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <Authenticator.Provider>
    <QueryClientProvider client={client} contextSharing={true}>
    <App />
    </QueryClientProvider>
    </Authenticator.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
