import React from 'react'
import { Link } from 'react-router-dom'
import { TbWorld } from 'react-icons/tb'
import { FiArrowRight } from 'react-icons/fi'
import { HiOutlineGlobe, HiOutlineUsers } from 'react-icons/hi'
import { MdOutlineExplore } from 'react-icons/md'

const STATS = [
  { icon: <HiOutlineGlobe className="w-4 h-4" />,  value: '195+',   label: 'Countries' },
  { icon: <HiOutlineUsers className="w-4 h-4" />,  value: '8 B+',   label: 'People' },
  { icon: <MdOutlineExplore className="w-4 h-4" />,value: '7',      label: 'Continents' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* grid lines */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* glows */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/[0.07] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-900/[0.12] rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-semibold tracking-widest uppercase mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
              195 Countries 
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.05s' }}>
              Explore<br />
              the World,<br />
              <span className="text-gradient">One Nation</span><br />
              at a Time.
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-md mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Discover stats, cultures, and facts for every country on Earth. Filter, sort and dive deep into any nation.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <Link to="/country" className="btn-primary">
                Start Exploring <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="btn-ghost">
                Interesting Facts
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/[0.06] animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {STATS.map(({ icon, value, label }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-white leading-none">{value}</p>
                    <p className="text-slate-600 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Globe visual ── */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* ambient glow */}
              <div className="absolute inset-0 rounded-full blur-[80px] bg-indigo-600/10 scale-125" />

              {/* circle container */}
              <div className="relative w-[420px] h-[420px] rounded-full border border-white/[0.05] bg-gradient-to-br from-[#111827] to-[#080c14] flex items-center justify-center shadow-card">

                {/* Orbit rings */}
                <div className="absolute inset-5 rounded-full border border-indigo-500/10 animate-spin-slow" />
                <div className="absolute inset-12 rounded-full border border-indigo-500/[0.07] animate-spin-rev" />

                {/* Orbit dots */}
                <div className="absolute inset-5 rounded-full animate-spin-slow">
                  <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                </div>
                <div className="absolute inset-12 rounded-full animate-spin-rev" style={{ animationDuration: '8s' }}>
                  <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 rounded-full bg-indigo-300 shadow-[0_0_6px_rgba(165,180,252,0.8)]" />
                </div>

                {/* Globe image */}
                <img
                  src="/images/world.png"
                  alt="World Globe"
                  className="w-3/4 h-3/4 object-contain animate-float drop-shadow-[0_0_40px_rgba(99,102,241,0.25)]"
                  onError={e => { e.target.style.display = 'none' }}
                />
                {/* Fallback icon */}
                <TbWorld className="w-32 h-32 text-indigo-500/20 absolute" />
              </div>

              {/* Floating chips */}
              <div className="absolute -top-4 -right-6 glass-card px-4 py-2.5 shadow-card animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-[10px] text-slate-600 font-mono uppercase tracking-wider">Nations</p>
                <p className="font-display font-bold text-white text-lg">195+</p>
              </div>
              <div className="absolute -bottom-4 -left-6 glass-card px-4 py-2.5 shadow-card animate-float" style={{ animationDelay: '2s' }}>
                <p className="text-[10px] text-slate-600 font-mono uppercase tracking-wider">Continents</p>
                <p className="font-display font-bold text-white text-lg">7</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
