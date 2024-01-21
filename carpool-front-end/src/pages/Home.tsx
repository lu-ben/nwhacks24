
import { useEffect } from "react";
import { Header } from "../components/Header";
import LoginButton from "../components/LoginButton"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

import request from "../assets/request.svg";
import pickup from "../assets/pickup.svg";
import { useNavigate } from "react-router-dom";

const SERVERHOST = 3000


function Home() {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const acceptRequests = () => {
		navigate("./viewRequests");
	}
  const requestRide = () => {
		navigate("./post");
	}

  useEffect(() => {
    if (isAuthenticated) {
      uploadUser();
    }
  }, [user, isAuthenticated]);

  function uploadUser() {
    axios.post(`http://localhost:${SERVERHOST}/users/add`, user)
    .then(response => {
      console.log('Success:', response.data);
      // if (!response.data.profile_complete) {
      //   navigate('/editProfile');
      // }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      {isAuthenticated ? <Header back={false} info={`Welcome ${user?.name} to`} underlined="Carpool" marginBottom="mb-8" children={
        <div className="flex flex-col items-center text-black">
          <div className="flex flex-col items-center justify-center bg-light-gray rounded-3xl p-4 w-full h-72 mb-8" onClick={requestRide}>
            <img src={request} />
            <div className="text-3xl">Request a ride</div>
          </div>

          <div className="flex flex-col items-center justify-center bg-light-gray rounded-3xl p-4 w-full h-72" onClick={acceptRequests}>
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
          <img src="https://picsum.photos/200/300" alt="Profile pic" className="rounded-full h-64 w-64 object-cover mb-4"/>
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
