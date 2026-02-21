import React from 'react'
import { HiSearch, HiChevronDown, HiX } from 'react-icons/hi'
import { TbArrowsSort } from 'react-icons/tb'

const REGIONS = ['all', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default function SearchFilter({ search, setSearch, filter, setFilter, countries, setCountries }) {
  const sort = (dir) => {
    setCountries([...countries].sort((a, b) =>
      dir === 'asc'
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    ))
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-8">

      {/* Search */}
      <div className="relative flex-1 min-w-0">
        <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
        <input
          type="text"
          placeholder="Search countries…"
          value={search || ''}
          onChange={e => setSearch(e.target.value)}
          className="input-field pl-10 pr-9"
        />
        {search && (
          <button onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors">
            <HiX className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2 shrink-0">
        <button onClick={() => sort('asc')}
          className="btn-ghost py-3 px-4 text-xs gap-1.5">
          <TbArrowsSort className="w-3.5 h-3.5" /> A → Z
        </button>
        <button onClick={() => sort('des')}
          className="btn-ghost py-3 px-4 text-xs gap-1.5">
          <TbArrowsSort className="w-3.5 h-3.5 scale-y-[-1]" /> Z → A
        </button>
      </div>

      {/* Region select */}
      <div className="relative shrink-0">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="input-field appearance-none pr-9 cursor-pointer min-w-[150px]">
          {REGIONS.map(r => (
            <option key={r} value={r} className="bg-[#0d1220]">
              {r === 'all' ? 'All Regions' : r}
            </option>
          ))}
        </select>
        <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
      </div>
    </div>
  )
}
