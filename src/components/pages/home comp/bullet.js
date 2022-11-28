import React from 'react'

export const Bullet = () => {
  return (
    <div className='relative'>
        <div className='w-4 h-4 border border-white bg-secondary circle relative z-20'></div>
        <div className='w-4 h-4 bg-sec-op circle absolute z-10 -top-1 -right-1'></div>
    </div>
  )
}
