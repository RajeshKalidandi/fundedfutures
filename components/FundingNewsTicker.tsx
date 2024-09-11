'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const FundingNewsTicker: React.FC = () => {
  const [news, setNews] = useState([
    "TechCorp raises $50M in Series B",
    "AI Innovations secures $30M funding",
    "CloudScale expands with $20M investment",
  ])

  useEffect(() => {
    // In a real application, you would fetch this data from an API
  }, [])

  return (
    <div className="bg-[#0052CC] text-white py-2 overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="whitespace-nowrap"
      >
        {news.map((item, index) => (
          <span key={index} className="mx-4 font-roboto">{item}</span>
        ))}
      </motion.div>
    </div>
  )
}

export default FundingNewsTicker