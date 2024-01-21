
import { useEffect } from "react";
import { Header } from "../components/Header";
import LoginButton from "../components/LoginButton"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

import request from "../assets/request.svg";
import pickup from "../assets/pickup.svg";
import car from "../assets/car.svg";
import { useNavigate } from "react-router-dom";

const SERVERHOST = 3000


function Home() {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

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
      {isAuthenticated ? <Header back={false} info={`Welcome ${user?.name} to`} underlined="Poolpal" marginBottom="mb-8" children={
        <div className="flex flex-col items-center text-black">
          <div className="flex flex-col items-center justify-center bg-light-gray rounded-3xl p-4 w-full h-72 mb-8" onClick={() => navigate("./post")}>
            <img src={request} />
            <div className="text-3xl">Request a ride</div>
          </div>

          <div className="flex flex-col items-center justify-center bg-light-gray rounded-3xl p-4 w-full h-72" onClick={() => navigate("./viewRequests")}>
            <img src={pickup} />
            <div className="text-3xl">Pick-up passengers</div>
          </div>
        </div>
      } />
    : (
      <div>
        <div className="mt-12 text-white w-3/5">
          <div className="text-left">
            <div className="text-xl">You've reached</div>
            <div className="underline text-5xl mt-2">Poolpal</div>
            <div className="text-xl mt-6">a community-based, eco-friendly centric carpooling app</div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-12">
          <img src={car} alt="Car pic" className="rounded-full bg-light-gray h-54 w-54 object-cover mb-4 p-6"/>
          <div className="mb-4"></div>
          <LoginButton/>
        </div>
      </div>
    )}
    </div>
  )
}

export {
  Home
}
