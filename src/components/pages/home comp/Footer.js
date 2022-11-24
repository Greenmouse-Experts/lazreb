import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { AiFillTwitterCircle } from 'react-icons/ai'

export const Footer = () => {
  return (
    <div>
        <div className='section pb-8 bg-primary text-white'>
            <div className='box pb-10'>
                <div className='lg:flex'>
                    <div className='lg:w-4/12'>
                        <p className='lg:fw-700 fw-600 text-xl lg:text-2xl'>Join our mailing list</p>
                        <p className='py-6'>Subscribe to our newsletter and be the first to recieve emails on our latest updates and offers</p>
                        <form>
                            <input type="text" placeholder="Your email" className='text-black py-4 px-3 w-full rounded-md' />
                            <button className='py-3 mt-5 w-full rounded-md fw-600 bg-secondary'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className='lg:w-4/12 lg:flex justify-center mt-8 lg:mt-0'>
                        <div>
                            <p className='fw-700 lg:text-2xl text-xl'>Links</p>
                            <ul className='mt-4'>
                                <li className='mt-4'>Home</li>
                                <li className='mt-4'>About Us</li>
                                <li className='mt-4'>Our Services</li>
                                <li className='mt-4'>Blog</li>
                                <li className='mt-4'>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-3/12 mt-8 lg:mt-0'>
                        <p className='fw-700 lg:text-2xl text-xl'>Contact Us</p>
                        <p className='mt-4'>106, Isawo Road, Agric Bus Stop, Owutu, Ikorodu, Lagos State.</p>
                        <p className='my-3'>Branch office at 12, Alhaja Senabu Street, Akute, Ogun State.</p>
                        <p>info@companyemail.com</p>
                        <div className='mt-5 flex'>
                            <p className='mr-3 text-2xl'><BsFacebook/></p>
                            <p className='mr-3 text-3xl'><AiFillTwitterCircle/></p>
                            <p className='mr-3 text-2xl'><BsInstagram/></p>
                            <p className='mr-3 text-3xl'><CiLinkedin /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-400 lg:pt-8 pt-4 px-4 text-center'>
                <p>© {new Date().getFullYear() }  Lazreb Leasing & Logistics ltd. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}
