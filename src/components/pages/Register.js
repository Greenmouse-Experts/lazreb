import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

export const Register = () => {
    const captchaRef = useRef(null)
    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

  return (
    <div>
         <div className='flex bg-register bg-fit justify-center items-center min-h-screen '>
            <div className='lg:w-7/12 xl:w-6/12 py-4 px-10 bg-white my-2'>
                <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669194994/lazreb/IMG-20221122-WA0030_1_1_mceisb.png" alt="logo" className='lg:w-20 w-16 mx-auto' /></Link>
                <div className='pb-6 pt-2'>
                    <p className='text-gray-600 fw-600 text-center'>Create your account</p>
                </div>
                <form>
                    <div className='lg:flex'>
                        <div className='lg:w-6/12 lg:pr-6'>
                            <label className='fw-500'>Full Name</label>
                            <input type="email" placeholder="Enter your full name" className="w-full p-2 py-1 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-4 lg:mt-0'>
                            <label className='fw-500'>Sex</label>
                            <select  className="w-full p-2 py-1 mt-2 rounded border border-gray-400">
                                <option>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:flex mt-4'>
                        <div className='lg:w-6/12 lg:pr-6'>
                            <label className='fw-500'>Email</label>
                            <input type="email" placeholder="Enter your email" className="w-full py-1 p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                            <label className='fw-500'>Phone Number</label>
                            <input type="number" placeholder="Enter your phone number" className="w-full py-1 p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                    </div>
                    <div className='lg:flex'>
                        <div className='lg:w-6/12 lg:pr-6 mt-4'>
                            <label className='fw-500'>Password</label>
                            <div className="flex items-center bg-input border border-gray-400 mt-1 rounded">
                                <input
                                    type={passwordType}
                                    placeholder="Enter your desired password"
                                    className="w-full border-0 py-1 px-2 rounded"
                                    
                                />
                                <div onClick={togglePassword} className="px-3">
                                    {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-4'>
                            <label className='fw-500'>Confirm Password</label>
                            <div className="flex items-center bg-input border border-gray-400 mt-1 rounded">
                                <input
                                    type={passwordType}
                                    placeholder="Enter your desired password"
                                    className="w-full border-0 py-1 px-2 rounded"
                                    
                                />
                                <div onClick={togglePassword} className="px-3">
                                    {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-6/12 lg:pr-6 mt-4'>
                        <label className='fw-500'>Referral Code</label>
                        <input type="text" placeholder="Enter referral code (if any)" className="w-full py-1 p-2 mt-2 rounded border border-gray-400"/>
                    </div>
                    <div className='flex items-start my-4'>
                        <input type="checkbox" className='mt-2 mr-3'/>
                        <p>By Signing Up, I Agree to the <Link to="/terms" className='text-primary fw-500'>Terms and Conditions</Link> and <Link to="/privacy" className='fw-500 text-primary'>Privacy Policy</Link></p>
                    </div>
                    <div className="mt-4 w-full overflow-hidden">
                        <ReCAPTCHA
                            sitekey="6Lc2fk4jAAAAALrd7ZbSKm0sFi9DH4XH1DMdFwzo"
                            ref={captchaRef}
                        />
                    </div>
                    <div className='mt-4'>
                        <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700'>
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className='mt-4 fs-500'>Already have an account ? <Link to="/login" className='fw-600 '>Login</Link></p>
            </div>
        </div>
    </div>
  )
}
