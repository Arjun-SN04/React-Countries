import React from 'react'
import "../src/App.css"
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'
import About from './pages/About'
import AppLayout from './components/layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/ui/CountryDetails'
const App = () => {

  return (
    <Routes>

      <Route path="/" element={<AppLayout />}>

        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="country" element={<Country />} />
        <Route path="about" element={<About />} />
        <Route path='country/:id' element={<CountryDetails />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>

  )
}

export default App