import { useState } from 'react'
import './App.css'
import Login from "./pages/Login.tsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
