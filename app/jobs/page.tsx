'use client'

import React, { useState, useEffect } from 'react'
import { supabase } from '../../lib/database'
import JobFilters from '../../components/JobFilters'
import JobList from '../../components/JobList'

const JOBS_PER_PAGE = 10

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalJobs, setTotalJobs] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    jobType: '',
    salary: [0, 200000] as [number, number],
    fundingStage: ''
  })

  useEffect(() => {
    fetchJobs()
  }, [currentPage])

  const fetchJobs = async () => {
    setIsLoading(true)
    const { data, error, count } = await supabase
      .from('job_listings')
      .select('*', { count: 'exact' })
      .range((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE - 1)

    if (error) {
      console.error('Error fetching jobs:', error)
    } else {
      setJobs(data)
      setFilteredJobs(data)
      setTotalJobs(count || 0)
    }
    setIsLoading(false)
  }

  const handleFilterChange = async (newFilters: Partial<typeof filters>) => {
    setIsLoading(true)
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }))
    
    let query = supabase.from('job_listings').select('*', { count: 'exact' })

    if (newFilters.keyword) {
      query = query.ilike('title', `%${newFilters.keyword}%`)
    }
    if (newFilters.location) {
      query = query.ilike('location', `%${newFilters.location}%`)
    }
    if (newFilters.jobType) {
      query = query.eq('job_type', newFilters.jobType)
    }
    if (newFilters.salary) {
      query = query.gte('salary_min', newFilters.salary[0]).lte('salary_max', newFilters.salary[1])
    }
    if (newFilters.fundingStage) {
      query = query.eq('funding_stage', newFilters.fundingStage)
    }

    const { data, error, count } = await query
      .range((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE - 1)

    if (error) {
      console.error('Error filtering jobs:', error)
    } else {
      setFilteredJobs(data)
      setTotalJobs(count || 0)
    }
    setIsLoading(false)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const totalPages = Math.ceil(totalJobs / JOBS_PER_PAGE)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-montserrat font-bold text-text mb-8">Find Your Next Opportunity</h1>
      <JobFilters filters={filters} onFilterChange={handleFilterChange} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <JobList
          jobs={filteredJobs}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default JobsPage