import { useState } from 'react'
import './App.css'
import Banner from './Components/banner'
import Launch from './Components/Launch'
import Understand from './Components/Understand'
import Banner1 from './Components/Banner1'
import Videosection from './Components/Videosection'
import ContactForm from './Components/Contactform'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import WhyChoose from './Components/WhyChoose'

function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <Launch/>
    <Understand/>
    <Banner1/>
    <WhyChoose/>
    <Videosection/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
