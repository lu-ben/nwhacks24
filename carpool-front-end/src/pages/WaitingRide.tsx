
import { Header } from "../components/Header";
import { useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';


const SERVERHOST = 3000;
export const WaitingRide = () => {
  const navigate = useNavigate();


  const location = useLocation();
  const {_id, user_id, origin, destination, time} = location.state || {};
  
  function handleCancel() {
    axios.post(`http://localhost:${SERVERHOST}/rideRequests/modify/cancelled`, {_id: _id})
        .then(response => {
          console.log('Success:', response.data);
          navigate(`/Post`);

      }).catch(error => {
        console.error('Error:', error);
      })
    };

  return (
    <div>
      <Header back={false} info="You are currently" underlined="Waiting for a ride" marginBottom="mb-12" children={
        <div>
          <div className="flex flex-col bg-light-gray text-black text-left text-l rounded-3xl w-full px-6 py-10 mb-8">
            <div className="mb-8"><div className="font-bold text-2xl mb-4">From: </div>{origin}</div>
            <div className="mb-14"><div className="font-bold text-2xl mb-4">To: </div>{destination}</div>
            <div className="">{time}</div>
          </div>

          <div onClick={handleCancel} className="underline text-2xl">Cancel</div>
        </div>
      }/>
    </div>
  )
}