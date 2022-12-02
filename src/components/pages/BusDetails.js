import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { GiComputerFan } from 'react-icons/gi'
import { Footer } from './home comp/Footer'
import { Header } from './home comp/Header'

export const BusDetails = () => {
  return (
    <div className='font-primary'>
        <Header/>
        {/* input */}
        <div className='bg-primary section'>
            <div className='box text-white'>
                <p className='lg:text-2xl text-lg lg:fw-700 fw-600'>Hire a bus</p>
                <div className='mt-10'>
                    <form>
                        <div className='lg:grid-3s justify-between'>
                            <div>
                                <label className='block lg:text-xl fw-500'>Hire From</label>
                                <select className='w-full py-2 px-2 mt-2 rounded text-black'>
                                    <option>Lagos</option>
                                    <option>Lagos</option>
                                </select>
                            </div>
                            <div>
                                <label className='block lg:text-xl fw-500'>Destination</label>
                                <select className='w-full py-2 px-2 mt-2 rounded text-black'>
                                    <option>Lagos</option>
                                    <option>Lagos</option>
                                </select>
                            </div>
                            <div>
                                <label className='block lg:text-xl fw-500'>Departure Date and Time</label>
                                <input type="date" className='w-full py-1 lg:h-9 px-2 mt-2 rounded text-black'/>
                            </div>
                        </div>
                        <div className='lg:mt-10 text-end'>
                            <button className='btn bg-secondary fw-600 lg:text-lg'>Hire Bus</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* input details */}
        <div className='section pt-10'>
            <div className='box'>
                <div className='bg-light lg:p-8 rounded-lg'>
                    <p className='lg:text-2xl text-lg lg:fw-700 fw-600'>Hiring a vehicle</p>
                    <div className='mt-5'>
                       <div className='flex items-center'>
                            <p className='fw-600 text-gray-600 w-24'>From:</p>
                            <p className='fw-600'>2 metalbox ikeja industrial estate Ogba.</p>
                       </div>
                       <div className='flex items-center mt-2'>
                            <p p className='fw-600 text-gray-600 w-24'>To:</p>
                            <p className='fw-600'>Computer village ikeja lagos.</p>
                       </div>
                    </div>
                </div>
                <div className='lg:mt-10 mt-5'>
                    <p className='lg:text-2xl text-lg lg:fw-700 fw-600'>Select your preferred bus</p>
                    {/* bus list */}
                    <div className='lg:grid-3s lg:mt-10 justify-evenly'>
                        <div className='bg-light'>
                            <div className='mt-1 mx-1'>
                                <img src="https://images.dealer.com/autodata/us/640/2015/USC50TOV111A0/USC50TOV111I021001.jpg" alt="sienna" className='lg:h-72 mx-auto' />
                            </div>
                            <div className='lg:p-6'>
                                <p className='fw-600 lg:text-lg'>Private Sienna Bus Service</p>
                                <div className='flex gap-4 mt-4'>
                                    <div className='w-5/12 shadow p-4 text-center'>
                                        <p className='flex justify-center'><HiOutlineUserGroup className='text-6xl'/></p>
                                        <p className='fs-500'>Max <span className='fw-600'>7 people</span> per vehicle</p>
                                    </div>
                                    <div className='w-5/12 shadow p-4 text-center'>
                                        <p className='flex justify-center'><GiComputerFan className='text-6xl'/></p>
                                        <p className='fs-500'>Air conditional Available</p>
                                    </div>
                                </div>
                                <div className='lg:mt-10'>
                                    <button className='btn bg-primary w-6/12 text-white fw-600 lg:text-lg'>Hire Bus</button>
                                </div>

                            </div>
                        </div>
                        <div className='bg-light mt-8 lg:mt-0'>
                            <div className='bg-white mx-1 mt-1'>
                                <img src="https://toyota.cami-cfao.com/media/gamme/modeles/images/55001a50165dfd8e9dea74c47d03f05e.png" alt="hiace" className='lg:h-72 mx-auto'  />
                            </div>
                            <div className='lg:p-6'>
                                <p className='fw-600 lg:text-lg'>Private Hiace Bus Service</p>
                                <div className='flex gap-4 mt-4'>
                                    <div className='w-5/12 shadow p-4 text-center'>
                                        <p className='flex justify-center'><HiOutlineUserGroup className='text-6xl'/></p>
                                        <p className='fs-500'>Max <span className='fw-600'>11 people</span> per vehicle</p>
                                    </div>
                                    <div className='w-5/12 shadow p-4 text-center'>
                                        <p className='flex justify-center'><GiComputerFan className='text-6xl'/></p>
                                        <p className='fs-500'>Air conditional Available</p>
                                    </div>
                                </div>
                                <div className='lg:mt-10'>
                                    <button className='btn bg-primary w-6/12 text-white fw-600 lg:text-lg'>Hire Bus</button>
                                </div>

                            </div>
                        </div>
                        <div className='bg-light mt-8 lg:mt-0'>
                            <div className='mx-1 mt-1'>
                                <img src="https://store.speedytowbars.com.au/assets/full/141134.jpg?20200711031630" alt="coaster" className='lg:h-72 mx-auto' />
                            </div>
                            <div className='lg:p-6'>
                                <p className='fw-600 lg:text-lg'>Private Coastal Bus Service</p>
                                <div className='flex gap-4 mt-4'>
                                    <div className='w-5/12 shadow p-4 text-center'>
                                        <p className='flex justify-center'><HiOutlineUserGroup className='text-6xl'/></p>
                                        <p className='fs-500'>Max <span className='fw-600'>29 people</span> per vehicle</p>
                                    </div>
                                    <div className='w-5/12 shadow p-4 text-center'>
                                        <p className='flex justify-center'><GiComputerFan className='text-6xl'/></p>
                                        <p className='fs-500'>Air conditional Available</p>
                                    </div>
                                </div>
                                <div className='lg:mt-10'>
                                    <button className='btn bg-primary w-6/12 text-white fw-600 lg:text-lg'>Hire Bus</button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-light mt-8'>
                            <div className='bg-white mx-1 mt-1'>
                                <img src="https://purepng.com/public/uploads/large/sedan-2009-toyota-corolla-trj.png" alt="corolla" className='lg:h-72 mx-auto' />
                            </div>
                            <div className='lg:p-6'>
                                <p className='fw-600 lg:text-lg'>Private Car Service</p>
                                <div className='flex gap-4 mt-4'>
                                    <div className='w-5/12 shadow p-4 text-center'>
                                        <p className='flex justify-center'><HiOutlineUserGroup className='text-6xl'/></p>
                                        <p className='fs-500'>Max <span className='fw-600'>4 people</span> per vehicle</p>
                                    </div>
                                    <div className='w-5/12 shadow p-4 text-center'>
                                        <p className='flex justify-center'><GiComputerFan className='text-6xl'/></p>
                                        <p className='fs-500'>Air conditional Available</p>
                                    </div>
                                </div>
                                <div className='lg:mt-10'>
                                    <button className='btn bg-primary w-6/12 text-white fw-600 lg:text-lg'>Hire Bus</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* newsletter */}
        <div className='section'>
            <div className='box'>
                <div className='lg:flex items-center lg:p-8 rounded-lg bg-light'>
                    <div className='lg:w-7/12'>
                        <p className='lg:w-8/12 lg:text-3xl lg:fw-700'>Be the first to receive the latest news and product updates.</p>
                    </div>
                    <div className='lg:w-5/12'>
                        <div className='w-11/12 border-primary py-1 px-1 rounded-md'>
                            <input type="email" className='py-1 lg:py-2 px-2 w-9/12 bg-inherit rounded-l-md'/>
                            <button className='w-3/12 rounded bg-secondary text-white py-2'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
