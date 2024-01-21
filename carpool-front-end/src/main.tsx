import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';


const clientID = "OuErazrSEoYaZOsU2nVlFOSsZSn80okZ"
const domain =  `https://dev-l6lnsoau0gp3zbze.us.auth0.com`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <Auth0Provider
        domain={domain}
        clientId={clientID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin}}
    >
      <App />
    </Auth0Provider>,
    </Auth0Provider>
  </React.StrictMode>

)
