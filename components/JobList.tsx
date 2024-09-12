'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, DollarSign, Calendar, TrendingUp } from 'lucide-react'

interface Job {
  id: string
  title: string
  company: string
  location: string
  job_type: string
  salary_min: number
  salary_max: number
  posted_date: string
  funding_stage: string
}

interface JobListProps {
  jobs: Job[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const JobCard: React.FC<Job> = ({ title, company, location, job_type, salary_min, salary_max, posted_date, funding_stage }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-montserrat font-bold text-primary mb-2">{title}</h3>
    <p className="text-lg font-semibold text-text mb-2">{company}</p>
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="flex items-center text-neutral">
        <MapPin size={16} className="mr-1" />
        <span className="text-sm">{location}</span>
      </div>
      <div className="flex items-center text-neutral">
        <Briefcase size={16} className="mr-1" />
        <span className="text-sm">{job_type}</span>
      </div>
      <div className="flex items-center text-neutral">
        <DollarSign size={16} className="mr-1" />
        <span className="text-sm">${salary_min.toLocaleString()} - ${salary_max.toLocaleString()}</span>
      </div>
      <div className="flex items-center text-neutral">
        <Calendar size={16} className="mr-1" />
        <span className="text-sm">{posted_date}</span>
      </div>
      <div className="flex items-center text-neutral">
        <TrendingUp size={16} className="mr-1" />
        <span className="text-sm">{funding_stage}</span>
      </div>
    </div>
    <button className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark transition-colors">
      Apply Now
    </button>
  </motion.div>
)

const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void }> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <div className="flex justify-center items-center space-x-2 mt-8">
    {currentPage > 1 && (
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
      >
        Previous
      </button>
    )}
    <span className="text-neutral">
      Page {currentPage} of {totalPages}
    </span>
    {currentPage < totalPages && (
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
      >
        Next
      </button>
    )}
  </div>
)

const JobList: React.FC<JobListProps> = ({ jobs, currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <div className="space-y-6">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  )
}

export default JobList