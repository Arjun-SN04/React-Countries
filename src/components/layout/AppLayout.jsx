import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <Header />
        <main>
            <Outlet />
        </main>

    <Footer />

    </>
  )
}

export default AppLayout