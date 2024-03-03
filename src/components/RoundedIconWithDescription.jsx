import React from 'react'
import RoundedIcon from './RoundedIcon'

export default function RoundedIconWithDescription({ children }) {
  return (
    <div className='flex flex-col items-center justify-center h-full text-xl gap-2 text-white'>
      {children}
    </div>
  )
}
