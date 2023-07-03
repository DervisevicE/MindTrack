import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Tracks from './components/Tracks/Tracks'

function App() {
  return (
    <div className='w-[90%] m-auto'>
      <NavBar/>
      <LandingPage/>
      <Tracks/>
    </div>

  )
}

export default App
