
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SERVERHOST = 3000;

export const ViewRequests = () => {
  const [rideRequests, setRideRequests] = useState([]);
  const { user } = useAuth0();
  const navigate = useNavigate();

  const fetchRequests = async () => {
    try {
      const response = await axios(`http://localhost:${SERVERHOST}/rideRequests/get`);
      const availableRequests = response.data.filter(request => request.status === 'available');
      // TODO: Allow users to upload their own profile photos
      const updatedRequests = availableRequests.map((item) => ({...item, imgSrc: "https://picsum.photos/200/300"}))
      setRideRequests(updatedRequests); 
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddRequest = async (id: string) => {
    const body = {
      id,
      driver_id: user?.sub
    }
    await axios.post(`http://localhost:${SERVERHOST}/rideRequests/update`, body)
    .then(() => {
      navigate("/acceptedRequests")
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  useEffect(() => {
    fetchRequests();
    const intervalId = setInterval(() => {
      fetchRequests();
    }, 5000); 
    return () => clearInterval(intervalId);
  }, [])

  return (
    
    <div>
      <Header back info="You are currently" underlined="Accepting Requests" marginBottom="mb-12" children={
        <div >
            {rideRequests.map((card) => (
              <Card key={card._id}
                imgSrc={card.imgSrc}
                from={card.origin}
                to={card.destination}
                time={card.time}
                date={card.date}
                add
                onClick={() => handleAddRequest(card._id)}
              />
            ))}
        </div>
      } />
    </div>
  )
};
