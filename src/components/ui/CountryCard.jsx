import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { HiOutlineUsers, HiOutlineGlobe } from 'react-icons/hi'
import { MdOutlineLocationCity } from 'react-icons/md'

const REGION_BADGE = {
  Africa:    'bg-amber-500/10   text-amber-400   border-amber-500/20',
  Americas:  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Asia:      'bg-rose-500/10    text-rose-400    border-rose-500/20',
  Europe:    'bg-sky-500/10     text-sky-400     border-sky-500/20',
  Oceania:   'bg-violet-500/10  text-violet-400  border-violet-500/20',
  Antarctic: 'bg-cyan-500/10    text-cyan-400    border-cyan-500/20',
}

export default function CountryCard({ country }) {
  const { flags, name, population, region, capital } = country
  const badge = REGION_BADGE[region] ?? 'bg-slate-500/10 text-slate-400 border-slate-500/20'

  return (
    <li className="group">
      <div className="glass-card-hover overflow-hidden h-full flex flex-col">

        {/* Flag */}
        <div className="relative h-44 overflow-hidden bg-[#0d1220] shrink-0">
          <img
            src={flags.svg}
            alt={flags.alt || `Flag of ${name.common}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {/* Region badge */}
          <span className={`badge absolute top-3 right-3 ${badge}`}>{region}</span>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display font-bold text-white text-base mb-4 truncate">{name.common}</h3>

          <ul className="space-y-2.5 text-xs mb-5 flex-1">
            <li className="flex items-center gap-2.5 text-slate-500">
              <HiOutlineUsers className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="text-slate-600">Population</span>
              <span className="ml-auto text-slate-300 font-medium font-mono tabular-nums">
                {population.toLocaleString()}
              </span>
            </li>
            <li className="flex items-center gap-2.5 text-slate-500">
              <HiOutlineGlobe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="text-slate-600">Region</span>
              <span className="ml-auto text-slate-300 font-medium">{region}</span>
            </li>
            <li className="flex items-center gap-2.5 text-slate-500">
              <MdOutlineLocationCity className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="text-slate-600">Capital</span>
              <span className="ml-auto text-slate-300 font-medium truncate max-w-[100px]">
                {capital?.[0] ?? '—'}
              </span>
            </li>
          </ul>

          <Link to={`/country/${name.common}`}
            className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl
                       bg-indigo-500/[0.08] hover:bg-indigo-500/[0.16]
                       border border-indigo-500/20 hover:border-indigo-500/40
                       text-indigo-400 hover:text-indigo-300
                       text-xs font-semibold transition-all duration-200 group/btn">
            View Details
            <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </li>
  )
}
