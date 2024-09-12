'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FundingNews {
  id: number
  company: string
  amount: string
  date: string
}

const FundingNewsTicker: React.FC = () => {
  const [news, setNews] = useState<FundingNews[]>([])
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchedNews: FundingNews[] = [
      { id: 1, company: "TechCorp", amount: "$10M", date: "2023-06-01" },
      { id: 2, company: "AI Innovations", amount: "$25M", date: "2023-06-02" },
      { id: 3, company: "CloudScale", amount: "$15M", date: "2023-06-03" },
      { id: 4, company: "DataDrive", amount: "$30M", date: "2023-06-04" },
      { id: 5, company: "RoboTech", amount: "$20M", date: "2023-06-05" },
    ]
    setNews(fetchedNews)

    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % fetchedNews.length)
    }, 5000) // Change news every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {news.length > 0 && (
            <motion.div
              key={currentNewsIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="mr-2 font-bold">Latest Funding:</span>
                <span>{news[currentNewsIndex]?.company}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 font-bold text-accent">{news[currentNewsIndex]?.amount}</span>
                <span className="text-sm">{news[currentNewsIndex]?.date}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default FundingNewsTicker