'use client'

import { motion } from 'framer-motion'
import { LucideShieldCheck, LucideUtensils, LucideUsers } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen mesh-bg flex flex-col items-center justify-center p-6 text-center">
      {/* Luminous Logo / Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white glow-text-violet italic">
          HUDUMA <span className="text-brand-cyan">YANGU</span>
        </h1>
        <p className="text-slate-400 mt-4 text-lg md:text-xl font-medium tracking-wide">
          Premium Service Ecosystem. <span className="text-brand-violet">Elevated.</span>
        </p>
      </motion.div>

      {/* The Three Portals - Interaction Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Client Portal Card */}
        <PortalCard 
          title="Client Experience"
          description="Access luxury services with a single tap. PWA Ready."
          icon={<LucideUsers className="w-8 h-8 text-brand-cyan" />}
          delay={0.2}
          color="cyan"
        />

        {/* Partner Portal Card */}
        <PortalCard 
          title="Partner Dashboard"
          description="For Restaurants & Providers. Scale your reach effortlessly."
          icon={<LucideUtensils className="w-8 h-8 text-brand-violet" />}
          delay={0.4}
          color="violet"
        />

        {/* Admin Portal Card */}
        <PortalCard 
          title="Core Control"
          description="Platform-wide analytics and management. Authorized only."
          icon={<LucideShieldCheck className="w-8 h-8 text-brand-gold" />}
          delay={0.6}
          color="gold"
        />
      </div>

      {/* Call to Action */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-16 px-12 py-4 bg-white text-black font-bold rounded-full text-lg btn-spring glow-box-cyan"
      >
        Explore the Ecosystem
      </motion.button>
    </main>
  )
}

function PortalCard({ title, description, icon, delay, color }: any) {
  const borderColors: any = {
    cyan: "hover:border-brand-cyan/50",
    violet: "hover:border-brand-violet/50",
    gold: "hover:border-brand-gold/50"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className={`p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-left transition-all duration-300 ${borderColors[color]} group cursor-pointer`}
    >
      <div className="mb-6 p-3 bg-black/40 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}
// Trigger build
