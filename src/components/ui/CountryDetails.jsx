import { useEffect, useState, useTransition } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCountryIndData } from '../../api/PostApi'
import { HiArrowLeft } from 'react-icons/hi'
import { FiUsers, FiGlobe, FiMapPin, FiDollarSign } from 'react-icons/fi'
import { TbLanguage, TbWorldPin } from 'react-icons/tb'
import { MdOutlineLocationCity } from 'react-icons/md'

/* ── Spinner loader ── */
function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-2 border-white/[0.05]" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 animate-spin" />
        <div className="absolute inset-3 rounded-full border border-indigo-500/20 animate-spin-rev" />
      </div>
      <p className="text-slate-600 text-sm font-mono animate-pulse">Fetching country data…</p>
    </div>
  )
}

/* ── Info row ── */
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0">
      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest mb-0.5">{label}</p>
        <p className="text-slate-300 text-sm font-medium break-words">{value}</p>
      </div>
    </div>
  )
}

export function CountryDetails() {
  const { id } = useParams()
  const [isPending, startTransition] = useTransition()
  const [country, setCountry] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setCountry(null)
    setError(null)
    startTransition(async () => {
      try {
        const res = await getCountryIndData(id)
        if (res.status === 200) setCountry(res.data[0])
      } catch {
        setError('Could not load country data. Please try again.')
      }
    })
  }, [id])

  if (isPending) return <Loader />

  if (error) return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 text-center">
      <p className="text-red-400 mb-6">{error}</p>
      <Link to="/country" className="btn-ghost">← Back to Countries</Link>
    </div>
  )

  if (!country) return null

  const nativeNames = country.name?.nativeName
    ? Object.values(country.name.nativeName).map(n => n.common).join(', ')
    : '—'
  const currencies = country.currencies
    ? Object.values(country.currencies).map(c => `${c.name}${c.symbol ? ` (${c.symbol})` : ''}`).join(', ')
    : '—'
  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : '—'

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 animate-fade-in">
      {/* Back link */}
      <Link to="/country"
        className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm font-medium mb-8 group transition-colors duration-200">
        <HiArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        Back to Countries
      </Link>

      <div className="glass-card overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-0">

          {/* Flag panel */}
          <div className="relative min-h-[280px] sm:min-h-[380px] bg-[#0d1220] overflow-hidden">
            <img
              src={country.flags.svg}
              alt={country.flags.alt || `Flag of ${country.name.official}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Country name overlay on flag */}
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] text-white/50 font-mono uppercase tracking-widest block mb-1">{country.region}</span>
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl drop-shadow-lg leading-tight">
                {country.name.common}
              </h2>
            </div>
          </div>

          {/* Details panel */}
          <div className="p-7 lg:p-9 flex flex-col overflow-y-auto max-h-[600px] scrollbar-thin">
            <div className="mb-5">
              <h1 className="font-display font-bold text-white text-xl leading-snug mb-1">
                {country.name.official}
              </h1>
              {country.subregion && (
                <p className="text-slate-600 text-sm">{country.subregion}</p>
              )}
            </div>

            <div className="flex-1">
              <InfoRow icon={<FiUsers className="w-3.5 h-3.5" />}           label="Native Name"     value={nativeNames} />
              <InfoRow icon={<FiUsers className="w-3.5 h-3.5" />}           label="Population"      value={country.population.toLocaleString()} />
              <InfoRow icon={<FiGlobe className="w-3.5 h-3.5" />}           label="Region"          value={`${country.region}${country.subregion ? ` · ${country.subregion}` : ''}`} />
              <InfoRow icon={<MdOutlineLocationCity className="w-3.5 h-3.5" />} label="Capital"     value={country.capital?.join(', ') ?? '—'} />
              <InfoRow icon={<TbWorldPin className="w-3.5 h-3.5" />}        label="Top Level Domain" value={country.tld?.join(', ') ?? '—'} />
              <InfoRow icon={<FiDollarSign className="w-3.5 h-3.5" />}      label="Currencies"     value={currencies} />
              <InfoRow icon={<TbLanguage className="w-3.5 h-3.5" />}        label="Languages"      value={languages} />
            </div>

            {/* Border countries */}
            {country.borders?.length > 0 && (
              <div className="mt-6 pt-5 border-t border-white/[0.05]">
                <div className="flex items-center gap-2 mb-3">
                  <FiMapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Border Countries</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {country.borders.map(b => (
                    <span key={b}
                      className="px-3 py-1.5 text-xs font-mono font-medium bg-white/[0.04] border border-white/[0.08]
                                 text-slate-500 rounded-lg hover:border-indigo-500/30 hover:text-indigo-400
                                 cursor-default transition-all duration-200">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountryDetails
