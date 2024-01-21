import './App.css'
import Map from "./pages/Map.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from './pages/Start.tsx'import { Home } from './pages/Home.tsx'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route index element={<Start/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
