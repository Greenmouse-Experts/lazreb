import React from 'react'
import { Footer } from './home comp/Footer'
import { Header } from './home comp/Header'

export const Services = () => {
  return (
    <div className='font-primary'>
        <Header />
        <div className='lg:h-96 h-48 bg-service bg-cover bg-bottom'>
            <div className='box h-full grid content-center'>
                <p className='lg:text-4xl text-2xl fw-800 text-white'>Our Services</p>
            </div>
        </div>
        <div className='section bg-gray'>
            <div className='box lg:pb-12'>
                <div className='lg:grid-3s justify-between'>
                    <div className='bg-white shadow rounded-t mt-10'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669633672/lazreb/Rectangle_92_giytak.png" alt="services" className='w-full h-54 rounded-t' />
                        <div className='py-6 lg:pb-10 px-6'>
                            <p className='fs-700 fw-600'>Charter & Transportation</p>
                            <p className='mt-5 fs-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </div>
                    </div>
                    <div className='bg-white shadow rounded-t mt-10'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669633672/lazreb/Rectangle_94_z6ufl9.png" alt="services" className='w-full h-54 rounded-t' />
                        <div className='py-6 lg:pb-10 px-6'>
                            <p className='fs-700 fw-600'>Vehicles Leasing</p>
                            <p className='mt-5 fs-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </div>
                    </div>
                    <div className='bg-white shadow rounded-t mt-10'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669633672/lazreb/Rectangle_96_kaf3ks.png" alt="services" className='w-full h-54 rounded-t' />
                        <div className='py-6 lg:pb-10 px-6'>
                            <p className='fs-700 fw-600'>Fleet Management</p>
                            <p className='mt-5 fs-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </div>
                    </div>
                    <div className='bg-white shadow rounded-t mt-10'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669635051/lazreb/Rectangle_92_1_xa60nn.png" alt="services" className='w-full h-54 rounded-t' />
                        <div className='py-6 lg:pb-10 px-6'>
                            <p className='fs-700 fw-600'>Vehicles Rentals</p>
                            <p className='mt-5 fs-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </div>
                    </div>
                    <div className='bg-white shadow rounded-t mt-10'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669633672/lazreb/Rectangle_94_1_n1k03y.png" alt="services" className='w-full h-54 rounded-t' />
                        <div className='py-6 lg:pb-10 px-6'>
                            <p className='fs-700 fw-600'>Finance Leases</p>
                            <p className='mt-5 fs-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </div>
                    </div>
                    <div className='bg-white shadow rounded-t mt-10'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669633670/lazreb/Rectangle_96_3_x4lj8p.png" alt="services" className='w-full h-54 rounded-t' />
                        <div className='py-6 lg:pb-10 px-6'>
                            <p className='fs-700 fw-600'>Special Order</p>
                            <p className='mt-5 fs-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
