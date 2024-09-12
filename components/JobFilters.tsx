'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from './ui/slider'
import { Search, MapPin, Briefcase, DollarSign, TrendingUp } from 'lucide-react'

interface FilterState {
  keyword: string
  location: string
  jobType: string
  salary: [number, number]
  fundingStage: string
}

interface JobFiltersProps {
  filters: FilterState
  onFilterChange: (filters: Partial<FilterState>) => void
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
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg mb-8 border border-gray-200"
    >
      <h2 className="text-2xl font-montserrat font-bold mb-4 text-gray-800">Find Your Next Opportunity</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="keyword" className="block text-sm font-montserrat text-gray-700 mb-1">Keyword</label>
          <input
            id="keyword"
            type="text"
            name="keyword"
            value={filters.keyword}
            onChange={handleInputChange}
            placeholder="e.g. Developer, Data Scientist"
            className="w-full p-2 border border-gray-300 rounded font-opensans text-gray-700"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-montserrat text-gray-700 mb-1">Location</label>
          <input
            id="location"
            type="text"
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            placeholder="e.g. San Francisco, Remote"
            className="w-full p-2 border border-gray-300 rounded font-opensans text-gray-700"
          />
        </div>
        <div>
          <label htmlFor="jobType" className="block text-sm font-montserrat text-gray-700 mb-1">Job Type</label>
          <select
            id="jobType"
            name="jobType"
            value={filters.jobType}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded font-opensans text-gray-700"
          >
            <option value="">All Job Types</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-montserrat text-gray-700 mb-1">Salary Range</label>
          <Slider
            min={0}
            max={200000}
            step={10000}
            value={filters.salary}
            onValueChange={handleSalaryChange}
            className="my-4"
          />
          <div className="flex justify-between mt-2 font-roboto text-sm text-gray-600">
            <span>${filters.salary[0].toLocaleString()}</span>
            <span>${filters.salary[1].toLocaleString()}</span>
          </div>
        </div>
        <div>
          <label htmlFor="fundingStage" className="block text-sm font-montserrat text-gray-700 mb-1">Funding Stage</label>
          <select
            id="fundingStage"
            name="fundingStage"
            value={filters.fundingStage}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded font-opensans text-gray-700"
          >
            <option value="">All Funding Stages</option>
            <option value="seed">Seed</option>
            <option value="series_a">Series A</option>
            <option value="series_b">Series B</option>
            <option value="series_c">Series C+</option>
            <option value="public">Public</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark transition-colors mt-4"
      >
        Apply Filters
      </button>
    </motion.form>
  )
}

export default JobFilters