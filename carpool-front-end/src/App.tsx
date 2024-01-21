import './App.css'
import Login from "./pages/Login.tsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Start from './pages/Start.tsx'

function App() {

  return (
    <div className='App'>
      <p className='mt-4'>HELLO</p>
      <BrowserRouter>
        <Routes>
          <Route index element={<Start/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
