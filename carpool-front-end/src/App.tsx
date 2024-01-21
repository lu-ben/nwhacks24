import './App.css'
import { Home } from './pages/Home.tsx'
import Map from "./pages/Map.tsx"
import Post from './pages/Post.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ViewRequests } from './pages/ViewRequests.tsx'
import { WaitingRide } from './pages/WaitingRide.tsx'
import { RideAccepted } from './pages/RideAccepted.tsx'
import { AcceptedRequests } from './pages/AcceptedRequests.tsx'
import { RideCancelled } from './pages/RideCancelled.tsx'
import { EditProfile } from './pages/EditProfile.tsx'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<Map/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/" index element={<Home/>}/>
          <Route path="/editProfile" element={<EditProfile/>}/>
          <Route path="/viewRequests" element={<ViewRequests/>}/>
          <Route path="/waitingRide" element={<WaitingRide/>}/>
          <Route path="/rideAccepted" element={<RideAccepted/>}/>
          <Route path="/acceptedRequests" element={<AcceptedRequests/>}/>
          <Route path="/rideCancelled" element={<RideCancelled/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
