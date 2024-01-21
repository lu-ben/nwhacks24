import { useEffect } from "react";
import LoginButton from "../components/LoginButton"
import LogoutButton from "../components/LogoutButton"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const SERVERHOST = 3000

function Home() {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      uploadUser();
    }
  }, [user, isAuthenticated]);

  function uploadUser() {
    axios.post(`http://localhost:${SERVERHOST}/users/add`, user)
    .then(response => {
      console.log('Success:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <LoginButton/>
      <LogoutButton/>
      {isAuthenticated && <p> WELCOME {user?.name}</p>}
    </div>
  )
}
  
export {
  Home
}