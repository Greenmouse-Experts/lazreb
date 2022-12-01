import React from 'react'
import { Footer } from './home comp/Footer'
import { Header } from './home comp/Header'
import Faq from './home comp/Accordion'

export const Faqs = () => {
  return (
    <div className='font-primary'>
        <Header/>
        <div className='lg:h-96 h-48 bg-faq bg-cover bg-bottom'>
            <div className='box h-full grid content-center'>
                <p className='lg:text-4xl text-2xl fw-800 text-white'>Frequently Asked Questions</p>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div className='text-center'>
                    <p className='lg:text-2xl fw-700 text-lg'>How can we help you?</p>
                    <p className='fw-500 fs-400 mt-4'>Choose a category to quickly find the help you need</p>
                    <div className='mt-12 lg:grid-3s justify-between'>
                        <div className='shadow-md lg:p-8 p-5'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669717842/lazreb/Rectangle_19349_a5jrny.png" alt="faq" className='w-16 mx-auto' />
                            <p className='fw-600 mt-4'>Book a seat</p>
                        </div>
                        <div className='shadow-md lg:p-8 p-5 lg:mt-0 mt-8'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669717842/lazreb/Rectangle_19350_pezlga.png" alt="faq" className='w-16 mx-auto' />
                            <p className='fw-600 mt-4'>Hire a vehicle</p>
                        </div>
                        <div className='shadow-md lg:p-8 p-5 lg:mt-0 mt-8'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669717842/lazreb/Rectangle_19351_j1ahan.png" alt="faq" className='w-16 mx-auto' />
                            <p className='fw-600 mt-4'>Deliver a package</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div>
                    <p className='lg:text-2xl fw-700 text-lg text-center'>Popular Questions</p>
                    <div className='lg:w-10/12 lg:mt-10 mt-10 mx-auto'>
                        <Faq />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
