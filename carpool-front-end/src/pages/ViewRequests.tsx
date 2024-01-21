
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import axios from 'axios';

const SERVERHOST = 3000;

export const ViewRequests = () => {
  const [rideRequests, setRideRequests] = useState([]);

  useEffect(() => {
    fetchRequests();

    const intervalId = setInterval(() => {
      fetchRequests();
    }, 5000); // 10 seconds

    return () => clearInterval(intervalId);
  }, []); 

  const fetchRequests = async () => {
    axios.get(`http://localhost:${SERVERHOST}/rideRequests/get`)
    .then(response => {
      setRideRequests(response.data); 

    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

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
              />
            ))}
        </div>
      } />
    </div>
  )
};
