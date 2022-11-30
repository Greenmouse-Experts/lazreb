import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaRegWindowClose } from 'react-icons/fa';

export const Header = () => {
    const [menuShow, setMenuShow] = useState(false)

    const CloseMenu = () => {
        setMenuShow(false);
    }

    return (
        <div className="relative z-10 bg-white">
            <div className="box">
                <div className="justify-between items-center flex py-3 pb-3">
                    <div className="w-3/12 flex">
                        <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669194994/lazreb/IMG-20221122-WA0030_1_1_mceisb.png" alt="logo" className="lg:w-24 w-16 "/></Link>
                    </div>
                    <div className="w-6/12 hidden lg:flex fw-500 justify-between items-center">
                        <Link to="/" className="text-primary fw-700">
                            <button >Home</button>
                        </Link>
                        <Link to="/about" className="">
                            <button >About Us</button>
                        </Link>
                        <Link to="/services" className="">
                            <button >Our Services</button>
                        </Link>
                        <Link to="/blog" className="">
                            <button >Blog</button>
                        </Link>
                        <Link to="/contact" className="">
                            <button >Contact Us</button>
                        </Link>
                    </div>
                    <div className='w-3/12 flex justify-end items-center'>
                        <Link to="/login" className="text-primary bg-primary text-white py-1 px-5 rounded-lg fw-600 mr-6">
                            Login
                        </Link>
                        <Link to="/register" className="text-primary border-primary py-1 px-2 rounded-md fw-600">
                            <button  >Sign Up</button>
                        </Link>
                    </div>
                    <div className="text-black lg:hidden">
                        <HiMenuAlt3 className="text-4xl fw-700" onClick={() => {setMenuShow(true)}}/>
                    </div>
                    
                </div>
            </div>
            {menuShow && (
                    <div className="w-full bg-op absolute lg:hidden z-40 top-0 min-h-screen" onClick={CloseMenu}>
                        <div className="absolute menu lg:hidden w-10/12 bg-white px-6 top-0 min-h-screen">
                            <div className="flex justify-between pt-5">
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669194994/lazreb/IMG-20221122-WA0030_1_1_mceisb.png" alt="logo" className="w-16" />
                                <FaRegWindowClose onClick={() => {setMenuShow(false)}}/>
                            </div>
                            <div className="mt-10">
                                <ul className="list-none">
                                    <li className="py-4"><Link to="/">Home</Link></li>
                                    <li className="py-4"><Link to="/about">About Us</Link></li>
                                    <li className="py-4"><Link to="/services">Our Services</Link></li>
                                    <li className="py-4"><Link to="/blog">Blog</Link></li>
                                    <li className="py-4"><Link to="/contact">Contact Us</Link></li>
                                    <li className="py-4"><Link to="/faq">FAQs</Link></li>
                                    <li className="py-4 mt-7"><Link to="/login" className='bg-primary text-white px-6 py-2'>Login</Link></li>
                                    <li className="py-4 mt-3"><Link to="/register" className='border-primary fw-600 px-6 py-2'>Sign Up</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
