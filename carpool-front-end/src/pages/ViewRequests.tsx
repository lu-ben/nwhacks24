
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SERVERHOST = 3000;

export const ViewRequests = () => {
  const [rideRequests, setRideRequests] = useState([]);

  useEffect(() => {
    fetchRequests();

    const intervalId = setInterval(() => {
      fetchRequests();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios(`http://localhost:${SERVERHOST}/rideRequests/get`);
      const availableRequests = response.data.filter(request => request.status === 'available');
      setRideRequests(availableRequests);
    } catch (error) {
      console.log(error);
    }
  }

  const fakeData = [{
    imgSrc: "https://picsum.photos/200/300",
    "user_id": 789,
    "origin": "UBC",
    "destination": "Downtown Vancouver",
    "time": "3pm",
    "date": "1/20/2024",
    "status": "done",
    "lat": 49.2606,
    "lon": 123.2460},
    {
      imgSrc: "https://picsum.photos/200/300",
      "user_id": 123,
      "origin": "PNE",
      "destination": "UBC",
      "time": "2pm",
      "date": "1/20/2024",
      "status": "available",
      "lat": 49.2816,
      "lon": 123.0362},
      {
        imgSrc: "https://picsum.photos/200/300",
        "user_id": 456,
        "origin": "Richmond Centre",
        "destination": "UBC",
        "time": "3pm",
        "date": "1/20/2024",
        "status": "pending",
        "lat": 49.1673,
        "lon": 123.1384}]

  const navigate = useNavigate();

  return (

    <div>
      <Header back info="You are currently" underlined="Accepting Requests" marginBottom="mb-12" onClick={() => navigate("../")} children={
        <div >
            {rideRequests.map((card) => (
              <Card key={card._id}
                imgSrc={card.imgSrc}
                from={card.origin}
                to={card.destination}
                time={card.time}
                add
              />
            ))}
        </div>
      } />
    </div>
  )
};
