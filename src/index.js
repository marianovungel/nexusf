import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { ContextProvidor } from './Context/Context';
import { ContextProviderIo } from './Context/SocketContext';

import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvidor>
    <GoogleOAuthProvider clientId="1024831832402-ljmfbk1up8hfnpl5fl2ac6gn3fmqvuib.apps.googleusercontent.com">
      <ContextProviderIo>
        <App />
      </ContextProviderIo>
    </GoogleOAuthProvider>
    </ContextProvidor>
  </React.StrictMode>
);