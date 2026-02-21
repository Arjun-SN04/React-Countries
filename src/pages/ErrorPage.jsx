import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { TbWorld } from 'react-icons/tb'

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-[#080c14] flex flex-col items-center justify-center px-5 text-center">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative">
        {/* Big 404 */}
        <p className="font-display font-bold text-[120px] sm:text-[160px] leading-none text-white/[0.04] select-none mb-0">
          404
        </p>

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-[#111827] border border-white/[0.06] flex items-center justify-center shadow-card">
            <TbWorld className="w-10 h-10 text-indigo-400" />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h1 className="font-display font-bold text-white text-3xl sm:text-4xl mb-3">Page Not Found</h1>
        <p className="text-slate-500 text-base max-w-sm mb-8">
          Looks like this page drifted off the map. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary">
          Go Back Home <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
