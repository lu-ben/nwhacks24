import './App.css'
import { Home } from './pages/Home.tsx'
import Map from "./pages/Map.tsx"
import Post from './pages/Post.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ViewRequests } from './pages/ViewRequests.tsx'
import { WaitingRide } from './pages/WaitingRide.tsx'
import { RideAccepted } from './pages/RideAccepted.tsx'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<Map/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/" index element={<Home/>}/>
          <Route path="/viewRequests" element={<ViewRequests/>}/>
          <Route path="/waitingRide" element={<WaitingRide/>}/>
          <Route path="/rideAccepted" element={<RideAccepted/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
