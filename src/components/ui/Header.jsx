import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/country', label: 'Countries' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isActive = (to) => to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#080c14]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
              <TbWorld className="w-[18px] h-[18px] text-white" />
            </div>
            <span className="font-display font-bold text-[17px] text-white tracking-tight">
              World<span className="text-gradient">Atlas</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map(({ to, label }) => (
              <Link key={to} to={to}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(to)
                    ? 'text-white'
                    : 'text-slate-500 hover:text-slate-200'
                }`}>
                {isActive(to) && (
                  <span className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]" />
                )}
                <span className="relative">{label}</span>
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link to="/country" className="hidden md:flex btn-primary text-sm py-2 px-4">
              Explore →
            </Link>
            <button onClick={() => setOpen(o => !o)}
              className="md:hidden btn-icon">
              {open ? <IoMdClose className="w-4 h-4" /> : <IoMdMenu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72' : 'max-h-0'}`}>
        <div className="border-t border-white/[0.06] bg-[#0d1220] px-5 py-4 space-y-1">
          {NAV.map(({ to, label }) => (
            <Link key={to} to={to}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive(to)
                  ? 'text-white bg-white/[0.06] border border-white/[0.08]'
                  : 'text-slate-500 hover:text-white hover:bg-white/[0.04]'
              }`}>
              {label}
            </Link>
          ))}
          <Link to="/country" className="btn-primary w-full justify-center mt-3">
            Explore Countries →
          </Link>
        </div>
      </div>
    </header>
  )
}
