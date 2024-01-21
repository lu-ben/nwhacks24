import { useState } from 'react'
import './App.css'
import Login from "./pages/Login.tsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Start from './pages/Start.tsx'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Start/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
