import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineCancel } from 'react-icons/md';
import { RiUserShared2Line } from 'react-icons/ri';

export const Header = () => {
    const [menuShow, setMenuShow] = useState(false)

    const CloseMenu = () => {
        setMenuShow(false);
    }

    return (
        <div className="relative z-10 bg-white">
            <div className="box">
                <div className="justify-between items-center flex py-3 pb-3">
                    <div className="w-4/12 flex">
                        <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669194994/lazreb/IMG-20221122-WA0030_1_1_mceisb.png" alt="logo" className="lg:w-24 w-16 "/></Link>
                    </div>
                    <div className="w-8/12 hidden lg:flex fw-500 justify-between items-center">
                        <Link to="/login" className="text-primary fw-700">
                            <button >Home</button>
                        </Link>
                        <Link to="/login" className="">
                            <button >About Us</button>
                        </Link>
                        <Link to="/login" className="">
                            <button >Our Services</button>
                        </Link>
                        <Link to="/login" className="">
                            <button >Blog</button>
                        </Link>
                        <Link to="/login" className="">
                            <button >Contact Us</button>
                        </Link>
                        <div className='flex items-center'>
                            <Link to="/login" className="text-primary fw-700 text-2xl pr-6">
                                <RiUserShared2Line />
                            </Link>
                            <Link to="/login" className="text-primary border-primary py-1 px-2 rounded-md fw-600">
                                <button  >Sign Up</button>
                            </Link>
                        </div>
                    </div>
                    <div className="text-black lg:hidden">
                        <HiMenuAlt3 className="text-4xl fw-700" onClick={() => {setMenuShow(true)}}/>
                    </div>
                    
                </div>
            </div>
            {menuShow && (
                    <div className="w-full bg-op absolute lg:hidden z-40 top-0 min-h-screen" onClick={CloseMenu}>
                        <div className="absolute menu lg:hidden w-10/12 bg-white px-6 z-40 top-0 min-h-screen">
                            <div className="flex justify-between pt-5">
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669194994/lazreb/IMG-20221122-WA0030_1_1_mceisb.png" alt="logo" className="w-36" />
                                <MdOutlineCancel onClick={() => {setMenuShow(false)}}/>
                            </div>
                            <div className="mt-10">
                                <ul className="list-none">
                                    <li className="py-4"><Link to="/">Home</Link></li>
                                    <li className="py-4"><Link to="/about">About</Link></li>
                                    <li className="py-4"><Link to="/shop">Products</Link></li>
                                    <li className="py-4"><Link to="/services">Service Partners</Link></li>
                                    <li className="py-4"><Link to="/blog">Our Blog</Link></li>
                                    <li className="py-4"><Link to="/jointeam">Join Our Team</Link></li>
                                    <li className="py-4"><Link to="/contact">Contact Us</Link></li>
                                    <li className="py-4"><Link to="/faqs">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
