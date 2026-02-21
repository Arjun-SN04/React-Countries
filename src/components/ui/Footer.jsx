import React from 'react'
import { Link } from 'react-router-dom'
import { TbWorld } from 'react-icons/tb'
import { MdLocationPin, MdEmail } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const CONTACT = [
  { icon: <MdLocationPin className="w-4 h-4" />, label: 'Location', val: 'Pune, Maharashtra' },
  { icon: <IoCallSharp className="w-4 h-4" />,   label: 'Phone',    val: '+91 98765 43211' },
  { icon: <MdEmail className="w-4 h-4" />,        label: 'Email',    val: 'contact@worldatlas.com' },
]
const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/country', label: 'Countries' },
  { to: '/contact', label: 'Contact' },
]
const SOCIAL = [
  { icon: <FaGithub />, href: '#', label: 'GitHub' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.05] bg-[#080c14]">
      {/* subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand col */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center shadow-glow-sm">
                <TbWorld className="w-[18px] h-[18px] text-white" />
              </div>
              <span className="font-display font-bold text-[17px] text-white">
                World<span className="text-gradient">Atlas</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-[220px] mb-6">
              Explore every country on Earth — stats, cultures, and facts all in one place.
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="btn-icon text-slate-600 hover:text-white">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div>
            <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.15em] mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}
                    className="text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-indigo-500 transition-all duration-200 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.15em] mb-5">Contact</p>
            <ul className="space-y-4">
              {CONTACT.map(({ icon, label, val }) => (
                <li key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wide font-medium">{label}</p>
                    <p className="text-slate-400 text-sm">{val}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-700 text-xs font-mono">
            © {new Date().getFullYear()} WorldAtlas — powered by restcountries.com
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live API data
          </div>
        </div>
      </div>
    </footer>
  )
}
