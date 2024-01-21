import './App.css'
import Map from "./pages/Map.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './pages/Home.tsx'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<Map/>}/>
          <Route path="/" index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
