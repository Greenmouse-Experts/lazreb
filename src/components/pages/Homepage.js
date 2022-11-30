import React from 'react'
import { Header } from './home comp/Header'
import { HeroForm } from './home comp/HeroForm'
import {FaGreaterThan, FaLessThan} from 'react-icons/fa';
import { BsFillCaretRightFill }  from 'react-icons/bs';
import { MdReadMore } from 'react-icons/md';
import { Review } from './home comp/Review';
import { Footer } from './home comp/Footer';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <div>
        <div className='font-primary'>
           <Header/>
           <div className='lg:h-01 relative bg-hero bg-bottom lg:bg-center bg-cover'>
                <div className='grid h-full py-6 lg:pb-12 lg:py-0 box content-center'>
                    <div className='lg:flex items-center'>
                        <div className='lg:w-6/12 my-20 lg:my-0 lg:leading text-white'>
                            <p className='text-2xl lg:text-5xl fw-700'>Your solution to Logistics & Leasing problems.</p>
                            <Link to="/services"><button className='lg:mt-10 mt-6 lg:px-8 px-6 bg-secondary text-white lg:fw-700 lg:text-lg fw-600 py-2 rounded-md'>Our Services</button></Link>
                        </div>
                        <div className='lg:w-6/12'>
                            <div className='lg:w-10/12 mx-auto form-bg rounded-lg lg:float-right'>
                                <HeroForm/>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <div className='relative lg:h-36 my-8 lg:my-0 box lg:w-9/12 mx-auto'>
                <div className='w-full bg-white py-5 lg:grid-4 md:grid-2 z-20 px-6 justify-between -top-7 rounded-md lg:absolute shadow-md'>
                    <div className='text-center'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669211213/lazreb/Group_46580_fs7pye.png" alt="pakage" className='mx-auto py-2' />
                        <p className='fw-700 text-lg lg:text-2xl py-1'>
                            <CountUp start={0} end={7818} suffix=" +" duration={8}/>
                        </p>
                        <p className='fw-500 fs-600 lg:fs-700'>PAKAGES</p>
                    </div>
                    <div className='text-center mt-4 lg:mt-0'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669211213/lazreb/Group_46576_zihq4s.png" alt="pakage" className='mx-auto py-2' />
                        <p className='fw-700 text-lg lg:text-2xl py-1'>
                        <CountUp start={0} end={846} suffix=" +" duration={5}/>
                        </p>
                        <p className='fw-500 fs:600 lg:fs-700'>CARS LEASED</p>
                    </div>
                    <div className='text-center mt-4 lg:mt-0'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669211213/lazreb/Group_46574_km5z6e.png" alt="pakage" className='mx-auto py-2' />
                        <p className='fw-700 text-lg lg:text-2xl py-1'>
                        <CountUp start={0} end={9246} suffix=" +" duration={10}/>
                        </p>
                        <p className='fw-500 fs-600 lg:fs-700'>DELIVERIES</p>
                    </div>
                    <div className='text-center mt-4 lg:mt-0'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669211213/lazreb/Group_46579_pbkqnj.png" alt="pakage" className='mx-auto py-2' />
                        <p className='fw-700 text-lg lg:text-2xl py-1'>
                        <CountUp start={0} end={12250} suffix=" +" duration={12}/>
                        </p>
                        <p className='fw-500 fs-600 lg:fs-700'>SATISFIED CLIENTS</p>
                    </div>
                </div>
           </div>
           <div className='section mt-0 lg:mt-10'>
                <div className='lg:flex items-center'>
                    <div className='lg:w-6/12 lg:h-02 h-48 bg-second bg-cover relative'>
                        {/* <div className='lg:absolute hidden lg:block -right-12 h-48 top-1/4 w-6/12 border-2 border-white'></div> */}
                    </div>
                    <div className='lg:w-6/12 lg:h-80 fs-500 lg:fs-600 bg-primary grid content-center'>
                        <div className='lg:w-9/12 px-4 lg:px-0 py-8 lg:py-0 mx-auto text-white'>
                            <p className='fw-700 text-xl'>About Us</p>
                            <p className='mt-6'>Lazreb Leasing & Logistics Ltd was incorporated on the 16th of March 2021 with CAC, Nigeria. We provide total solutions to Clients in Leasing and Logistics businesses, especially with our e-solutions which always put our services on demand.</p>
                            <Link to="about">
                                <p className='mt-5 flex items-center fs-500'>Read More <p className='pl-2 text-xl'><MdReadMore/></p></p>
                            </Link>
                        </div>
                    </div>
                </div>
           </div>
           <div className='section lg:pt-10 pt-3'>
                <div className='box'>
                    <div>
                        <div className='text-center'>
                            <p className='fw-600 fs-700'>Our Works</p>
                            <p className='text-3xl fw-700'>What We Do</p>
                        </div>
                        <div className='lg:grid-2 justify-between lg:mt-12'>
                            <div className='border-rg mt-6 flex'>
                                <div className='w-6/12'>
                                    <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669195788/lazreb/Vector_1_1_pjvs0t.png' alt="work" className='w-full h-44 lg:h-auto'/>
                                </div>
                                <div className='w-6/12 grid bg-tertiary content-center'>
                                    <div className='lg:px-8 px-3'>
                                        <p className='fw-600 fs-500 lg:fs-700'>Logistics and Delivery</p>
                                        <p className='fs-300 lg:fs-400 py-1 lg:py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                     </div>
                                </div>
                            </div>
                            <div className='border-rg mt-6 flex'>
                                <div className='w-6/12'>
                                    <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669195787/lazreb/Vector_2_1_1_jp0u8n.png' alt="work" className='w-full h-44 lg:h-auto'/>
                                </div>
                                <div className='w-6/12 grid bg-tertiary content-center'>
                                    <div className='lg:px-8 px-3'>
                                        <p className='fw-600 fs-500 lg:fs-700'>Fleet Management</p>
                                        <p className='fs-300 lg:fs-400 py-1 lg:py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='border-rg mt-6 lg:mt-10 flex'>
                                <div className='w-6/12'>
                                    <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669195786/lazreb/Vector_3_1_1_fyoe8y.png' alt="work" className='w-full h-44 lg:h-auto'/>
                                </div>
                                <div className='w-6/12 grid bg-tertiary content-center'>
                                    <div className='lg:px-8 px-3'>
                                        <p className='fw-600 fs-500 lg:fs-700'>Vehicle Rentals</p>
                                        <p className='fs-300 lg:fs-400 py-1 lg:py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='border-rg mt-6 lg:mt-10 flex'>
                                <div className='w-6/12'>
                                    <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669195789/lazreb/Vector_4_1_torvcw.png' alt="work" className='w-full h-44 lg:h-auto'/>
                                </div>
                                <div className='w-6/12 grid bg-tertiary content-center'>
                                    <div className='lg:px-8 px-3'>
                                        <p className='fw-600 fs-500 lg:fs-700'>Charter & Transportation</p>
                                        <p className='fs-300 lg:fs-400 py-1 lg:py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center lg:mt-10 mt-6'>
                            <Link to="/services"><button className='fw-600 lg:fw-700 lg:px-10 lg:py-2 py-1 px-5 border-primary text-primary rounded-xl'>View All</button></Link>
                        </div>
                    </div>
                </div>
           </div>
           <div className='section bg-review bg-cover'>
                <div className='box'>
                    <div className='lg:flex'>
                        <div className='lg:w-8/12 grid content-center'>
                            <div className='text-white lg:w-10/12 justify-self-center'>
                                <p className='fw-300 fs-500 pb-4'>TESTIMONIALS</p>
                                <p className='text-xl lg:pb-6 fw-600 lg:text-3xl'>What our Clients say</p>
                                <p>We create a better everyday life for our Customers and ourselves, while acting as an indispensable partner to our Clients by helping them to build and maximize sustainable competitive advantages.</p>
                                <div className='mt-6 flex'>
                                    <p className='p-2 text-white bg-secondary rounded'><FaLessThan /></p>
                                    <p className='p-2 text-white bg-secondary rounded ml-4'><FaGreaterThan /></p>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-4/12 mt-20 lg:mt-0'>
                            <Review/>
                        </div>
                    </div>
                </div>
           </div>
           <div className='section'>
                <div className='box'>
                    <div>
                        <div className='text-center'>
                            <p className='fw-600 fs-700'>BLOG</p>
                            <p className='text-3xl fw-700'>Recent News & Blog</p>
                        </div>
                        <div className='lg:grid-3 justify-evenly mt-10 lg:mt-20'>
                            <div className='shadow rounded-lg w-10/12 lg:w-auto mx-auto mt-6 lg:mt-0'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669197200/lazreb/blog1_o7damr.png" alt="blog" className='w-full' />
                                <div className='p-4'>
                                    <p className='fw-600 fs-500'>Five things to know on logistics..</p>
                                    <p className='fs-400 my-2'>November 11, 2022 </p>
                                    <p className='text-secondary flex items-center fs-300 fw-600 justify-end'>Read more <BsFillCaretRightFill/></p>
                                </div>
                            </div>
                            <div className='shadow rounded-lg w-10/12 lg:w-auto mx-auto mt-6 lg:mt-0'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669197200/lazreb/blog3_hdgg5x.png" alt="blog" className='w-full' />
                                <div className='p-4'>
                                    <p className='fw-600 fs-500'>Five things to know on logistics..</p>
                                    <p className='fs-400 my-2'>November 11, 2022 </p>
                                    <p className='text-secondary flex items-center fs-300 fw-600 justify-end'>Read more <BsFillCaretRightFill/></p>
                                </div>
                            </div>
                            <div className='shadow rounded-lg w-10/12 lg:w-auto mx-auto mt-6 lg:mt-0'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669197200/lazreb/blog4_lrithg.png" alt="blog" className='w-full' />
                                <div className='p-4'>
                                    <p className='fw-600 fs-500'>Five things to know on logistics..</p>
                                    <p className='fs-400 my-2'>November 11, 2022 </p>
                                    <p className='text-secondary flex items-center fs-300 fw-600 justify-end'>Read more <BsFillCaretRightFill/></p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center lg:mt-10 mt-6'>
                            <Link to="/blog"><button className='fw-600 lg:fw-700 lg:px-10 lg:py-2 py-1 px-5 border-primary text-primary rounded-xl'>View All</button></Link>
                        </div>
                    </div>
                </div>
           </div>
           <Footer/>
        </div>
    </div>
  )
}
