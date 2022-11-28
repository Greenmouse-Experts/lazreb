import React from 'react'
import { Bullet } from './home comp/bullet'
import { Footer } from './home comp/Footer'
import { Header } from './home comp/Header'

export const About = () => {
  return (
    <div className='font-primary'>
        <Header/>
        <div className='lg:h-96 h-48 bg-about bg-cover bg-bottom'>
            <div className='box h-full grid content-center'>
                <p className='lg:text-4xl text-2xl fw-800 text-white'>About Us</p>
            </div>
        </div>
        <div className='section bg-gray bg-grad bg-fit'>
            <div className='box'>
                <div className='lg:flex flex-row-reverse items-center justify-between'>
                    <div className='lg:w-5/12'>
                        <p className='fw-700 lg:text-2xl text-xl mb-6 lg:hidden'>Who we are</p>
                        <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669609311/lazreb/Rectangle_62_jkyea5.png' alt="about-img" className='lg:w-8/12 mx-auto'/>
                    </div>
                    <div className='lg:w-6/12 bg-gray lg:bg-transparent py-3 lg:py-0 '>
                        <p className='fw-700 lg:text-2xl hidden lg:block'>Who we are</p>
                        <p className='mt-6 mb-3'>Lazreb Leasing & Logistics Ltd was incorporated on the 16th of March 2021 with CAC, Nigeria. We provide total solutions to Clients in Leasing and Logistics businesses, especially with our e-solutions which always put our services on demand.</p>
                        <p>We create a better everyday life for our Customers and ourselves, while acting as an indispensable partner to our Clients by helping them to build and maximize sustainable competitive advantages. We also leverage and partner with some reputable Companies in the Leasing & Logistics industry to ensure our Customers needs are promptly met.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div className='lg:flex justify-evenly'>
                    <div className='lg:w-5/12 shadow-lg lg:p-10 p-6'>
                        <div className='flex items-center'>
                            <p className='fw-700 text-2xl'>Our Mission</p>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669612288/lazreb/Rectangle_66_qr8uew.png" alt="target" className='lg:w-8 w-5 lg:ml-8 ml-4' />
                        </div>
                        <p className='mt-5'>To provide superior Customers service to our Clients while creating growth and development opportunities and a very safe work environment for our employees.</p>
                    </div>
                    <div className='lg:w-5/12 shadow-lg lg:p-10 p-6 mt-8 lg:mt-0'>
                        <div className='flex items-center'>
                            <p className='fw-700 text-2xl'>Our Vision</p>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669612293/lazreb/Rectangle_67_loenzb.png" alt="target" className='lg:w-8 w-5 lg:ml-8 ml-4' />
                        </div>
                        <p className='mt-6'>To be a household name in Leasing and Logistics Industry, by providing satisfactory services to our Customers.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section bg-gray bg-grads bg-fit'>
            <div className='box'>
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:w-5/12'>
                    <p className='fw-700 lg:text-2xl lg:hidden text-xl float-right mb-8'>Management Team</p>
                        <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669612951/lazreb/Group_46483_btbhbn.png' alt="about-img" className='lg:w-8/12 w-full mx-auto'/>
                    </div>
                    <div className='lg:w-6/12 bg-gray py-6 pl-2 lg:bg-transparent lg:py-0 lg:pl-0'>
                        <p className='fw-700 lg:text-2xl hidden lg:block'>Management Team</p>
                        <p className='mt-6 mb-3'>Our management team is made up of tested and proven professionals whose individual and collective skills and astute experience cannot be overemphasized. Team work by our management team has always been useful in achieving our corporate goals.</p>
                        <p> Our sharing of knowledge has always resulted to efficiency and effective delivery in our operations. We equally maintain strong interpersonal skills and proven ability to establish good relationship with contracts at various levels.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div className='pb-8 lg:pb-16 lg:pt-10'>
                    <div>
                        <p className='fw-700 text-primary lg:text-3xl text-xl text-center pb-3'>Our Core Values</p>
                        <p className='border-primary lg:w-24 w-10 mx-auto'></p>
                    </div>
                    <div className='lg:mt-20 mt-8 lg:flex justify-between'>
                        <div className='lg:w-3/12'>
                            <div className='flex'>
                                <div className='mt-2 mr-4'><Bullet/></div>
                                <div>
                                    <p className='fw-600'>Leadership Driven</p>
                                    <p className='fs-400 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div className='mt-2 mr-4'><Bullet/></div>
                                <div>
                                    <p className='fw-600'>Zealousness</p>
                                    <p className='fs-400 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div className='mt-2 mr-4'><Bullet/></div>
                                <div>
                                    <p className='fw-600'>Efficiency</p>
                                    <p className='fs-400 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-3/12 lg:mt-0 mt-10'>
                            <div className='flex'>
                                <div className='mt-2 mr-4'><Bullet/></div>
                                <div>
                                    <p className='fw-600'>Accountability </p>
                                    <p className='fs-400 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div className='mt-2 mr-4'><Bullet/></div>
                                <div>
                                    <p className='fw-600'>Respect</p>
                                    <p className='fs-400 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div className='mt-2 mr-4'><Bullet/></div>
                                <div>
                                    <p className='fw-600'>Trustworthy</p>
                                    <p className='fs-400 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-4/12 mt-6 hidden lg:block'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669609272/lazreb/Rectangle_19298_bsd4ui.png" alt='values' className='w-10/12 float-right'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
