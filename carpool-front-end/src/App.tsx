import './App.css'
import { Home } from './pages/Home.tsx'
import Map from "./pages/Map.tsx"
import Post from './pages/Post.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ViewRequests } from './pages/ViewRequests.tsx'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<Map/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/" index element={<Home/>}/>
          <Route path="/viewRequests" element={<ViewRequests/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
