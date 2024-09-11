'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from '../components/ui/slider'

interface JobFiltersProps {
  filters: {
    keyword: string
    location: string
    jobType: string
    salary: [number, number]
    fundingStage: string
  }
  onFilterChange: (filters: Partial<JobFiltersProps['filters']>) => void
}

const JobFilters: React.FC<JobFiltersProps> = ({ filters, onFilterChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    onFilterChange({ [name]: value })
  }

  const handleSalaryChange = (value: [number, number]) => {
    onFilterChange({ salary: value })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg mb-8 border border-[#6B778C]/20"
    >
      <h2 className="text-2xl font-montserrat font-bold mb-4 text-[#172B4D]">Find Your Next Opportunity</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="keyword" className="block text-sm font-montserrat text-[#172B4D] mb-1">Keyword</label>
          <input
            id="keyword"
            type="text"
            name="keyword"
            value={filters.keyword}
            onChange={handleInputChange}
            placeholder="e.g. Developer, Data Scientist"
            className="w-full p-2 border border-[#6B778C] rounded font-opensans text-[#172B4D]"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-montserrat text-[#172B4D] mb-1">Location</label>
          <input
            id="location"
            type="text"
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            placeholder="e.g. San Francisco, Remote"
            className="w-full p-2 border border-[#6B778C] rounded font-opensans text-[#172B4D]"
          />
        </div>
        <div>
          <label htmlFor="jobType" className="block text-sm font-montserrat text-[#172B4D] mb-1">Job Type</label>
          <select
            id="jobType"
            name="jobType"
            value={filters.jobType}
            onChange={handleInputChange}
            className="w-full p-2 border border-[#6B778C] rounded font-opensans text-[#172B4D]"
          >
            <option value="">All Job Types</option>
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-montserrat text-[#172B4D] mb-1">Salary Range</label>
          <Slider
            min={0}
            max={200000}
            step={10000}
            value={filters.salary}
            onValueChange={handleSalaryChange}
            className="my-4"
          />
          <div className="flex justify-between mt-2 font-roboto text-sm text-[#6B778C]">
            <span>${filters.salary[0].toLocaleString()}</span>
            <span>${filters.salary[1].toLocaleString()}</span>
          </div>
        </div>
        <div>
          <label htmlFor="fundingStage" className="block text-sm font-montserrat text-[#172B4D] mb-1">Funding Stage</label>
          <select
            id="fundingStage"
            name="fundingStage"
            value={filters.fundingStage}
            onChange={handleInputChange}
            className="w-full p-2 border border-[#6B778C] rounded font-opensans text-[#172B4D]"
          >
            <option value="">All Funding Stages</option>
            <option value="seed">Seed</option>
            <option value="seriesA">Series A</option>
            <option value="seriesB">Series B</option>
            <option value="seriesC">Series C+</option>
          </select>
        </div>
      </div>
      <button className="mt-4 bg-[#0052CC] text-white px-6 py-2 rounded-full hover:bg-[#0052CC]/90 transition-colors font-montserrat font-bold">
        Search Jobs
      </button>
    </motion.div>
  )
}

export default JobFilters