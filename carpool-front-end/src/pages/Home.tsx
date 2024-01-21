import LoginButton from "../components/LoginButton"
import LogoutButton from "../components/LogoutButton"
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { user, isAuthenticated } = useAuth0();

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