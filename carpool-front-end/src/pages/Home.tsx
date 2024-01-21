import { Header } from "../components/Header";
import LoginButton from "../components/LoginButton"
import { useAuth0 } from "@auth0/auth0-react";
import request from "../assets/request.svg";
import pickup from "../assets/pickup.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const acceptRequests = () => {
		navigate("./viewRequests");
	}

  return (
    <div>
      {isAuthenticated ? <Header back={false} info={`Welcome ${user?.name} to`} underlined="Carpool" marginBottom="mb-8" children={
        <div className="flex flex-col items-center text-black">
          <div className="flex flex-col items-center justify-center bg-light-gray rounded-3xl p-4 w-full h-72 mb-8">
            <img src={request} />
            <div className="text-3xl">Request a ride</div>
          </div>

          <div className="flex flex-col items-center justify-center bg-light-gray rounded-3xl p-4 w-full h-72" onClick={acceptRequests}>
            <img src={pickup} />
            <div className="text-3xl">Pick-up passengers</div>
          </div>
        </div>
      } />
    : <div className="flex flex-col justify-center items-center">
        <div className="text-2xl mb-4">Please Login</div>
        <LoginButton/>
      </div>
    }
    </div>
  )
}

export {
  Home
}
