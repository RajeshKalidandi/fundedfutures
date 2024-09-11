'use client'

import { motion } from 'framer-motion'

interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  description: string
  fundingStage: string
}

interface JobListProps {
  filters: {
    keyword: string
    location: string
    jobType: string
    salary: [number, number]
    fundingStage: string
  }
}

const JobList: React.FC<JobListProps> = ({ filters }) => {
  // This would typically come from an API call based on the filters
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      salary: '$120,000 - $150,000',
      description: 'We are seeking a talented Frontend Developer to join our team...',
      fundingStage: 'Series A'
    },
    {
      id: '2',
      title: 'Data Scientist',
      company: 'AI Innovations',
      location: 'New York, NY',
      salary: '$130,000 - $180,000',
      description: 'Join our data science team to work on cutting-edge AI projects...',
      fundingStage: 'Series B'
    },
    // Add more job listings...
  ]

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-[#6B778C]/20"
        >
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-montserrat font-bold text-[#0052CC]">{job.title}</h2>
            <span className="bg-[#36B37E] text-white text-xs font-bold px-2 py-1 rounded-full">
              {job.fundingStage}
            </span>
          </div>
          <h3 className="text-xl font-montserrat text-[#172B4D] mb-2">{job.company}</h3>
          <div className="flex items-center mb-2">
            <span className="font-opensans text-[#6B778C] mr-4">{job.location}</span>
            <span className="font-roboto text-[#36B37E] font-bold">{job.salary}</span>
          </div>
          <p className="font-opensans text-[#172B4D] mb-4">{job.description}</p>
          <div className="flex justify-between items-center">
            <button className="bg-[#0052CC] text-white px-6 py-2 rounded-full hover:bg-[#0052CC]/90 transition-colors font-montserrat font-bold">
              Apply Now
            </button>
            <span className="font-roboto text-[#6B778C] text-sm">Posted 2 days ago</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default JobList