'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FeaturesShowcase from '../components/FeaturesShowcase'
import FundingNewsTicker from '../components/FundingNewsTicker'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import TrendingChart from '../components/TrendingChart'
import ParticlesComponent from '../components/ParticlesComponent'

const MotionLink = motion(Link)

export default function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear())
    }, 1000 * 60 * 60 * 24) // Check once a day

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#172B4D]">
      <FundingNewsTicker />
      
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-gradient-to-r from-[#0052CC] to-[#36B37E] text-white py-20">
          <ParticlesComponent />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
                Your Gateway to Tomorrow's Tech Giants
              </h1>
              <p className="text-xl md:text-2xl font-opensans mb-8 max-w-2xl">
                Connect with innovative, well-funded startups and shape the future of technology.
              </p>
              <MotionLink 
                href="/jobs"
                className="inline-block bg-white text-[#0052CC] font-montserrat font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Opportunities <ArrowRight className="inline-block ml-2" />
              </MotionLink>
            </motion.div>
          </div>
        </section>

        <FeaturesShowcase />

        <section className="py-16 bg-[#F4F5F7]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8 text-center">
              Job Market Trends
            </h2>
            <TrendingChart />
          </div>
        </section>

        <TestimonialsCarousel />
      </main>

      <footer className="bg-[#0052CC] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-montserrat font-bold">FundedFutures</h2>
              <p className="text-sm font-opensans mt-2">Your Gateway to Tomorrow's Tech Giants</p>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/jobs" className="hover:underline">Jobs</Link>
              <Link href="/companies" className="hover:underline">Companies</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm font-opensans">
            <p>&copy; {currentYear} FundedFutures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}