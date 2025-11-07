import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Launch from './Components/Launch'
import Understand from './Components/Understand'
import Banner1 from './Components/Banner1'
import Videosection from './Components/Videosection'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Whychoose from './Components/Whychoose'

function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <Launch/>
    <Understand/>
    <Banner1/>
    <Whychoose/>
    <Videosection/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
