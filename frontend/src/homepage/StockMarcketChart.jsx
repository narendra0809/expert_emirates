import React from 'react'
import chartImage from '../assets/gold-chart.png'; 
export default function StockMarcketChart() {
  return (
    <div className='flex flex-col items-center justify-center py-10 bg-black'>
        <div className='w-full max-w-4xl mx-auto'>
            <img src={chartImage} alt="Stock Market Chart" className='w-full h-auto' />
        </div>
      
    </div>
  )
}
