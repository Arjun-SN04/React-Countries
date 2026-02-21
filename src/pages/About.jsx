import React from 'react'
import countryFacts from '../api/CountryData.json'
import { HiOutlineGlobe, HiOutlineUsers, HiOutlineLightBulb } from 'react-icons/hi'
import { MdOutlineLocationCity } from 'react-icons/md'

const ICONS = [
  <HiOutlineGlobe className="w-5 h-5" />,
  <MdOutlineLocationCity className="w-5 h-5" />,
  <HiOutlineUsers className="w-5 h-5" />,
  <HiOutlineLightBulb className="w-5 h-5" />,
]

/* accent colours cycling per card */
const ACCENTS = [
  { ring: 'border-indigo-500/20',  icon: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',   dot: 'bg-indigo-400' },
  { ring: 'border-emerald-500/20', icon: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', dot: 'bg-emerald-400' },
  { ring: 'border-amber-500/20',   icon: 'bg-amber-500/10 border-amber-500/20 text-amber-400',       dot: 'bg-amber-400' },
  { ring: 'border-rose-500/20',    icon: 'bg-rose-500/10 border-rose-500/20 text-rose-400',           dot: 'bg-rose-400' },
  { ring: 'border-sky-500/20',     icon: 'bg-sky-500/10 border-sky-500/20 text-sky-400',             dot: 'bg-sky-400' },
  { ring: 'border-violet-500/20',  icon: 'bg-violet-500/10 border-violet-500/20 text-violet-400',   dot: 'bg-violet-400' },
]

export function About() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="section-label">Did you know?</p>
        <h2 className="section-title mb-3">Interesting Facts</h2>
        <p className="text-slate-600 text-base max-w-md mx-auto">
          A curated selection of fascinating facts about countries and our world.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {countryFacts.map((item, idx) => {
          const { id, countryName, capital, population, interestingFact } = item
          const a = ACCENTS[idx % ACCENTS.length]

          return (
            <div key={id}
              className={`glass-card-hover p-6 border ${a.ring} flex flex-col gap-5`}
              style={{ animationDelay: `${idx * 0.06}s` }}>

              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${a.icon}`}>
                  {ICONS[idx % ICONS.length]}
                </div>
                <span className={`w-2 h-2 rounded-full mt-1 shrink-0 ${a.dot}`} />
              </div>

              {/* Country name */}
              <h3 className="font-display font-bold text-white text-xl leading-tight">{countryName}</h3>

              {/* Details */}
              <div className="space-y-2.5 text-sm flex-1">
                {capital !== 'No Capital' && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Capital</span>
                    <span className="text-slate-300 font-medium">{capital}</span>
                  </div>
                )}
                {population !== 'Null' && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Population</span>
                    <span className="text-slate-300 font-medium font-mono">
                      {typeof population === 'number' ? population.toLocaleString() : population}
                    </span>
                  </div>
                )}
              </div>

              {/* Fact */}
              <div className="pt-4 border-t border-white/[0.05]">
                <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest mb-2">Interesting Fact</p>
                <p className="text-slate-400 text-sm leading-relaxed">{interestingFact}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default About
