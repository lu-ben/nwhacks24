import './App.css'
import Login from "./pages/Login.tsx"
import Map from "./pages/Map.tsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  return (
    <div className='App'>
      <p className='mt-4'>HELLO</p>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/map" element={<Map/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
