import React from 'react'
import { abilities } from '../../constants/index.jsx'

function FeatureCard() {
  return (
    <div className='w-full padding-x-lg'>
        <div className='mx-auto grid-3-cols'>
            {abilities.map(({imgPath, title, desc}, index) => (
                <div key={index} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <img src={imgPath} alt={title} className='w-10 h-10' />
                        <h3 className='text-white-50 text-2xl font-semibold mt-2'>{title}</h3>
                        <p className='text-white-50 text-sm text-lg'>{desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureCard