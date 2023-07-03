import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'

function App() {
  return (
    <div className='w-[90%] m-auto'>
      <NavBar/>
      <LandingPage/>
    </div>

  )
}

export default App
