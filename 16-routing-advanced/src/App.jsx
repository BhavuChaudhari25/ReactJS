import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home> </Home>}></Route>
            <Route path="/about" element={<About> </About>}></Route>
            <Route path="/contact" element={<Contact> </Contact>}></Route>
            <Route path="*" element={<NotFound> </NotFound>}></Route>
          </Routes>
        <Footer></Footer>
    </div>
  )
}

export default App
