import React, {useRef} from 'react'
import { Footer } from './home comp/Footer'
import { Header } from './home comp/Header'
import { SlLocationPin } from "react-icons/sl"
import { BsPhoneVibrate } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import SimpleMap from './home comp/map'
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {

    const captchaRef = useRef(null)

  return (
    <div className='font-primary'>
        <Header/>
        <div className='lg:h-96 h-48 bg-contact bg-cover bg-bottom'>
            <div className='box h-full grid content-center'>
                <p className='lg:text-4xl text-2xl fw-800 text-white'>Contact Us</p>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div className='lg:p-6 rounded lg:shadow-md'>
                    <div className='lg:flex items-center lg:bg-primary'>
                        <div className='lg:w-6/12 bg-primary text-white lg:py-10 py-8 px-3 lg:px-10'>
                            <p className='fs-700 fw-600'>Get In Touch</p>
                            <p className='fs-500 mt-10'>Fill your information in the appropriate place holder to keep in touch Lazreb Logistics & Leasing ltd.</p>
                            <div className='flex mt-12'>
                                <p className='text-white mt-1 mr-4 text-xl'><SlLocationPin className='text-white'/></p>
                                <div>
                                    <p className='lg:w-10/12'>106, Isawo Road, Agric Bus Stop, Owutu, Ikorodu, Lagos State.</p>
                                    <p className='mt-6'>12, Alhaja Senabu Street, Akute, Ogun State.</p>
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <p className='text-white mt-1 mr-4 text-xl'><BsPhoneVibrate className='text-white'/></p>
                                <div>
                                    <p className=''>+2340-708-747-5680</p>
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <p className='text-white mt-1 mr-4 text-xl'><BiSupport className='text-white'/></p>
                                <div>
                                    <p className=''>info@companyemail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='lg:pl-12 py-5 bg-white mt-7 lg:mt-0'>
                            <form>
                                <div className='lg:flex'>
                                    <div className='lg:w-6/12 lg:pr-6'>
                                        <label className='fw-500'>First Name</label>
                                        <input type="text" placeholder='First name' className='w-full bg-gray-100 py-2 px-2 rounded mt-2'/>
                                    </div>
                                    <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                                        <label className='fw-500'>Last Name</label>
                                        <input type="text" placeholder='Last name' className='w-full bg-gray-100 py-2 px-2 rounded mt-2'/>
                                    </div>
                                </div>
                                <div className='lg:flex'>
                                    <div className='lg:w-6/12 lg:pr-6 mt-6'>
                                        <label className='fw-500'>Phone Number</label>
                                        <input type="number" placeholder='Phone number' className='w-full bg-gray-100 py-2 px-2 rounded mt-2'/>
                                    </div>
                                    <div className='lg:w-6/12 lg:pl-6 mt-6'>
                                        <label className='fw-500'>Email</label>
                                        <input type="email" placeholder='Email' className='w-full bg-gray-100 py-2 px-2 rounded mt-2'/>
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <label className='fw-500'>Message</label>
                                    <textarea className='w-full mt-2 px-2 py-2 bg-gray-100 h-24' placeholder='Write a message'></textarea>
                                </div>
                                <div className="mt-10 w-full overflow-hidden">
                                    <ReCAPTCHA
                                        sitekey={process.env.REACT_APP_SITE_KEY}
                                        ref={captchaRef}
                                    />
                                </div>
                                <div className='mt-10'>
                                    <button className='w-5/12 bg-primary text-white fs-700 fw-600 rounded-md py-2'>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='h-80 w-full mb-12 lg:mb-24 rounded-md mt-10 shadow-lg'>
                    <SimpleMap/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
