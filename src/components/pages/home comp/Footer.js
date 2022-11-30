import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

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
                                <li className='mt-4'><Link to="/">Home</Link></li>
                                <li className='mt-4'><Link to="/about">About Us</Link></li>
                                <li className='mt-4'><Link to="/services">Our Services</Link></li>
                                <li className='mt-4'><Link to="/blog">Blog</Link></li>
                                <li className='mt-4'><Link to="/faqs">FAQs</Link></li>
                                <li className='mt-4'><Link to="contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-3/12 mt-8 lg:mt-0'>
                        <p className='fw-700 lg:text-2xl text-xl'>Contact Us</p>
                        <p className='mt-4'>106, Isawo Road, Agric Bus Stop, Owutu, Ikorodu, Lagos State.</p>
                        <p className='my-3'>Branch office at 12, Alhaja Senabu Street, Akute, Ogun State.</p>
                        <p>info@lazreblogistics.com</p>
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
                <p className='mb-2'><Link to="/terms" className='pr-3'>Terms & Conditions</Link>|<Link to="/privacy" className='pl-3'>Privacy Policy</Link></p>
                <p>© {new Date().getFullYear() }  Lazreb Leasing & Logistics ltd. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}
