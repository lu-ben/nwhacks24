import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Auth0Provider} from '@auth0/auth0-react'


const clientID = "OuErazrSEoYaZOsU2nVlFOSsZSn80okZ"
const domain =  `https://dev-l6lnsoau0gp3zbze.us.auth0.com`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>,

)
