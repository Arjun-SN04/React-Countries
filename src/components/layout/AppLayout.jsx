import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080c14]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
