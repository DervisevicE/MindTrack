import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Tracks from './components/Tracks/Tracks'
import Footer from './components/Footer/Footer'
import ContactUs from './components/ContactUs/ContactUs'

function App() {
  return (
    <div className='w-[90%] m-auto'>
      <NavBar/>
      <LandingPage/>
      <Tracks/>
      <ContactUs/>
      <Footer/>
    </div>

  )
}

export default App
