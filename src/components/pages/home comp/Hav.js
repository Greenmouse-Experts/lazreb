import React from 'react'

export const HireBus = () => {
  return (
    <div className='font-primary fs-500'>
        <form>
            <div>
                <label className='block fw-600'>Hire From</label>
                <input type="text" placeholder='Enter Departure Point' className='w-full mt-2 py-2 px-2 rounded-md text-black fw-500 fs-500 placeholder-gray-500' />
            </div>
            <div className='mt-3'>
                <label className='block fw-600'>Hire Destination</label>
                <input type="text" placeholder='Enter Destination Point' className='w-full mt-2 py-2 px-2 rounded-md text-black fw-500 fs-500 placeholder-gray-500' />
            </div>
            <div className='mt-3'>
                <label className='block fw-600'>Departure Date</label>
                <input type="date" className='w-full mt-2 py-2 px-2 rounded-md text-black fw-500 fs-500' />
            </div>
            <div className='mt-8'>
                <button className='w-full bg-secondary rounded-md text-white py-2 fw-600'>Proceed</button>
            </div>
        </form>
    </div>
  )
}
