import React from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { Footer } from './home comp/Footer'
import { Header } from './home comp/Header'
import { HerForm } from './home comp/HeroForm'

export const Blog = () => {
  return (
    <div className='font-primary'>
        <Header/>
        <div className='lg:h-96 h-48 bg-blog bg-cover bg-bottom'>
            <div className='box h-full grid content-center'>
                <p className='lg:text-4xl text-2xl fw-800 text-white'>Our Blog</p>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div>
                    <div>
                        <p className='lg:text-xl fw-700 p-3 border-lg'>Top News</p>
                        <div className='overflow-x-auto'>
                            <div className='lg:grid-3s w-100 flex lg:w-full justify-between mt-3 lg:mt-10'>
                                <div className='shadow rounded-lg w-10/12 lg:w-auto mx-2 mt-6 lg:mt-0'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669713253/lazreb/Rectangle_92_2_m78fpj.png" alt="blog" className='w-full lg:h-64' />
                                    <div className='p-4'>
                                        <p className='fw-600 fs-500'>New Package from the...</p>
                                        <p className='fs-400 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                    </div>
                                </div>
                                <div className='shadow rounded-lg w-10/12 lg:w-auto mx-2 mt-6 lg:mt-0'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669713252/lazreb/money_az9ipp.png" alt="blog" className='w-full lg:h-64' />
                                    <div className='p-4'>
                                        <p className='fw-600 fs-500'>Get financial support by...</p>
                                        <p className='fs-400 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                                <div className='shadow rounded-lg w-10/12 lg:w-auto mx-2 mt-6 lg:mt-0'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669713252/lazreb/Rectangle_92_4_edgwcd.png" alt="blog" className='w-full lg:h-64' />
                                    <div className='p-4'>
                                        <p className='fw-600 fs-500'>Five things to know on logistics..</p>
                                        <p className='fs-400 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='lg:mt-10 mt-8 flex justify-center'>
                                <p className='p-2 text-white bg-secondary rounded'><FaLessThan /></p>
                                <p className='p-2 text-white bg-secondary rounded ml-4'><FaGreaterThan /></p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:pt-16 pt-12'>
                        <p className='lg:text-xl fw-700 p-3 border-lg'>More News</p>
                        <div className='overflow-x-auto'>
                            <div className='lg:grid-3s flex w-100 lg:w-full justify-between mt-3 lg:mt-10'>
                                <div className='shadow rounded-lg w-10/12 lg:w-auto mx-2 mt-6 lg:mt-0'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669713252/lazreb/Rectangle_92_5_fr8d1s.png" alt="blog" className='w-full' />
                                    <div className='p-4'>
                                        <p className='fw-600 fs-500'>Charter & Transportation</p>
                                        <p className='fs-400 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                    </div>
                                </div>
                                <div className='shadow rounded-lg w-10/12 lg:w-auto mx-2 mt-6 lg:mt-0'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669713252/lazreb/Rectangle_92_6_f4kxfb.png" alt="blog" className='w-full' />
                                    <div className='p-4'>
                                        <p className='fw-600 fs-500'>Available goods around...</p>
                                        <p className='fs-400 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                                <div className='shadow rounded-lg w-10/12 lg:w-auto mx-2 mt-6 lg:mt-0'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669713253/lazreb/Rectangle_92_7_hldlbx.png" alt="blog" className='w-full' />
                                    <div className='p-4'>
                                        <p className='fw-600 fs-500'>Finance lease from the...</p>
                                        <p className='fs-400 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='lg:mt-10 mt-8 flex justify-center'>
                                <p className='p-2 text-white bg-secondary rounded'><FaLessThan /></p>
                                <p className='p-2 text-white bg-secondary rounded ml-4'><FaGreaterThan /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <HerForm/>
        <Footer/>
    </div>
  )
}
