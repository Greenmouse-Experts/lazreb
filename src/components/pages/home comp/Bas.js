import React from 'react'

export const BookSit = () => {
  return (
    <div className='font-primary fs-500'>
        <form>
            <div>
                <label className='block fw-600'>Travelling From</label>
                <select className='w-full mt-2 py-2 px-2 rounded-md text-black fw-500 fs-500'>
                    <option>Departure terminal</option>
                </select>
            </div>
            <div className='mt-3'>
                <label className='block fw-600'>Travelling To</label>
                <select className='w-full mt-2 py-2 px-2 rounded-md text-black fw-500 fs-500'>
                    <option>Arrival terminal</option>
                </select>
            </div>
            <div className='lg:flex fw-600'>
                <div className='lg:w-6/12 mt-5 lg:pr-6'>
                    <label className='block'>Travelling From</label>
                    <input type="date" className='w-full mt-2 py-2 px-2 rounded-md text-black fw-500 fs-500' />
                </div>
                <div className='lg:w-6/12 mt-5 lg:pl-6'>
                    <label className='block'>Persons</label>
                    <select className='w-full mt-2 py-2 px-2 rounded-md text-black fw-500 fs-500'>
                        <option>1</option>
                    </select>
                </div>
            </div>
            <div className='mt-8'>
                <button className='w-full bg-secondary rounded-md text-white py-2 fw-600'>Proceed</button>
            </div>
        </form>
    </div>
  )
}
