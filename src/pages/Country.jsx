import React, { useEffect, useState, useTransition } from 'react'
import { getcountryData } from '../api/PostApi'
import CountryCard from '../components/ui/CountryCard'
import SearchFilter from '../components/ui/SearchFilter'

/* ── Card skeleton ── */
function CardSkeleton() {
  return (
    <li className="glass-card overflow-hidden">
      <div className="skeleton h-44 w-full" />
      <div className="p-5 space-y-3">
        <div className="skeleton h-5 w-2/3" />
        <div className="skeleton h-3.5 w-full" />
        <div className="skeleton h-3.5 w-4/5" />
        <div className="skeleton h-3.5 w-3/4" />
        <div className="skeleton h-9 w-full mt-2" />
      </div>
    </li>
  )
}

export default function Country() {
  const [isPending, startTransition] = useTransition()
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    startTransition(async () => {
      const res = await getcountryData()
      setCountries(res.data)
    })
  }, [])

  const filtered = countries.filter(c => {
    const matchSearch = !search || c.name.common.toLowerCase().includes(search.toLowerCase())
    const matchRegion = filter === 'all' || c.region === filter
    return matchSearch && matchRegion
  })

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <p className="section-label">Explore</p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h1 className="section-title">All Countries</h1>
          <p className="text-slate-600 text-sm font-mono">
            {isPending ? '…' : `${filtered.length} results`}
          </p>
        </div>
      </div>

      {/* Filters */}
      <SearchFilter
        search={search} setSearch={setSearch}
        filter={filter} setFilter={setFilter}
        countries={countries} setCountries={setCountries}
      />

      {/* Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {isPending
          ? Array.from({ length: 12 }).map((_, i) => <CardSkeleton key={i} />)
          : filtered.length > 0
            ? filtered.map((c, i) => <CountryCard key={i} country={c} />)
            : (
              <li className="col-span-full flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <p className="text-slate-400 font-medium mb-1">No countries found</p>
                <p className="text-slate-600 text-sm">Try a different search or region</p>
              </li>
            )
        }
      </ul>
    </section>
  )
}
