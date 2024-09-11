'use client'

import { useEffect } from 'react'

interface JobMapProps {
  filters: {
    keyword: string
    location: string
    jobType: string
    salary: [number, number]
    fundingStage: string
  }
}

const JobMap: React.FC<JobMapProps> = ({ filters }) => {
  useEffect(() => {
    // Here you would typically initialize and update the map based on filters
    console.log('Initializing map with filters:', filters)
  }, [filters])

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-center text-neutral">
        Map view is coming soon! We'll display job locations here.
      </p>
    </div>
  )
}

export default JobMap