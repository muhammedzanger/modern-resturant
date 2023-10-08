/** @format */
import React from "react"
import "./App.css"
import AboutUs from "./container/AboutUs/AboutUs"
import Header from "./container/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Menu from "./container/Menu/Menu"
import Chef from "./container/Chef/Chef"
import Intro from "./container/Intro/Intro"
import Laurels from "./container/Laurels/Laurels"
import Gallery from "./container/Gallery/Gallery"
import FindUs from "./container/FindUs/FindUs"
import Footer from "./container/Footer/Footer"

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
