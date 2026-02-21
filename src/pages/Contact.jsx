import React, { useState } from 'react'
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheck } from 'react-icons/fi'
import { MdLocationPin } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailForward } from 'react-icons/tb'

const CONTACT_INFO = [
  { icon: <MdLocationPin className="w-5 h-5" />,    label: 'Location', value: 'Pune, Maharashtra' },
  { icon: <IoCallSharp className="w-5 h-5" />,       label: 'Phone',    value: '+91 98765 43211' },
  { icon: <TbMailForward className="w-5 h-5" />,     label: 'Email',    value: 'contact@worldatlas.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ username: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    // Simulate send delay
    setTimeout(() => {
      console.log('Form submitted:', form)
      setForm({ username: '', email: '', message: '' })
      setLoading(false)
      setSent(true)
      setTimeout(() => setSent(false), 4000)
    }, 1000)
  }

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="section-label">Get in touch</p>
        <h1 className="section-title mb-3">Contact Us</h1>
        <p className="text-slate-600 text-base max-w-sm mx-auto">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 max-w-4xl mx-auto">

        {/* ── Contact info sidebar ── */}
        <div className="glass-card p-7 flex flex-col gap-6">
          <div>
            <h2 className="font-display font-bold text-white text-xl mb-2">Let's Connect</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Reach out through any of these channels or fill in the form.
            </p>
          </div>

          <div className="space-y-5">
            {CONTACT_INFO.map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">{label}</p>
                  <p className="text-slate-300 text-sm font-medium mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative world graphic */}
          <div className="mt-auto pt-6 border-t border-white/[0.05] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600 text-xs font-mono">Live API · restcountries.com</span>
          </div>
        </div>

        {/* ── Form ── */}
        <div className="glass-card p-7">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <FiCheck className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="font-display font-bold text-white text-xl">Message Sent!</h3>
              <p className="text-slate-500 text-sm max-w-xs">Thanks for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-[10px] text-slate-600 font-mono uppercase tracking-widest block mb-2">Your Name</label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
                  <input
                    type="text" name="username"
                    placeholder="John Doe"
                    value={form.username} onChange={handleChange}
                    required autoComplete="off"
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-[10px] text-slate-600 font-mono uppercase tracking-widest block mb-2">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
                  <input
                    type="email" name="email"
                    placeholder="you@example.com"
                    value={form.email} onChange={handleChange}
                    required autoComplete="off"
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[10px] text-slate-600 font-mono uppercase tracking-widest block mb-2">Message</label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-600 pointer-events-none" />
                  <textarea
                    name="message" rows={5}
                    placeholder="Write your message…"
                    value={form.message} onChange={handleChange}
                    required autoComplete="off"
                    className="input-field pl-10 resize-none"
                  />
                </div>
              </div>

              <button type="submit" disabled={loading}
                className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
