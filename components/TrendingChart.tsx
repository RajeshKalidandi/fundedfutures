'use client'

import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const TrendingChart: React.FC = () => {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Tech Job Openings',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: '#0052CC',
        backgroundColor: '#0052CC',
      },
    ],
  })

  useEffect(() => {
    // In a real application, you would fetch this data from an API
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Tech Job Market Trend',
      },
    },
  }

  return (
    <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg border border-[#6B778C]/20">
      <Line options={options} data={chartData} />
    </div>
  )
}

export default TrendingChart