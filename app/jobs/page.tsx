'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import JobFilters from '../../components/JobFilters'
import JobList from '../../components/JobList'
import JobMap from '../../components/JobMap'
import TrendingChart from '../../components/TrendingChart'
import FundingNewsTicker from '../../components/FundingNewsTicker'
import Image from 'next/image'

export default function JobSearch() {
  const [view, setView] = useState<'list' | 'map'>('list')
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    jobType: '',
    salary: [0, 200000] as [number, number],
    fundingStage: ''
  })

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters({ ...filters, ...newFilters })
  }

  return (
    <main className="bg-[#FFFFFF] min-h-screen relative overflow-hidden">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image src="/geometric-bg.svg" layout="fill" objectFit="cover" alt="Geometric background" />
      </div>
      
      <FundingNewsTicker />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.h1 
          className="text-4xl font-montserrat font-bold mb-4 text-[#172B4D]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Gateway to Tomorrow's Tech Giants
        </motion.h1>
        <motion.p 
          className="text-xl font-opensans mb-8 text-[#6B778C]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover ground-floor opportunities at freshly funded startups
        </motion.p>
        
        <JobFilters filters={filters} onFilterChange={handleFilterChange} />
        
        <div className="mb-6 flex space-x-4">
          <button 
            onClick={() => setView('list')} 
            className={`font-montserrat font-bold px-4 py-2 rounded-full transition-colors ${view === 'list' ? 'bg-[#0052CC] text-white' : 'bg-[#FFFFFF] text-[#6B778C] border border-[#6B778C]'}`}
          >
            List View
          </button>
          <button 
            onClick={() => setView('map')} 
            className={`font-montserrat font-bold px-4 py-2 rounded-full transition-colors ${view === 'map' ? 'bg-[#0052CC] text-white' : 'bg-[#FFFFFF] text-[#6B778C] border border-[#6B778C]'}`}
          >
            Map View
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {view === 'list' ? <JobList filters={filters} /> : <JobMap filters={filters} />}
            </motion.div>
          </div>
          <div className="space-y-8">
            <TrendingChart />
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg border border-[#6B778C]/20">
              <h3 className="text-xl font-montserrat font-bold mb-4 text-[#172B4D]">Why FundedFutures?</h3>
              <ul className="space-y-2 font-opensans text-[#6B778C]">
                <li>✅ Real-time access to jobs at freshly funded startups</li>
                <li>✅ Comprehensive company profiles with funding history</li>
                <li>✅ Tailored job matches based on your skills and career goals</li>
                <li>✅ Insider access to the next wave of tech innovators</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}