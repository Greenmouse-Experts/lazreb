import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";

export const Register = () => {
    const captchaRef = useRef(null)

  return (
    <div>
         <div className='flex bg-register bg-fit justify-center items-center min-h-screen '>
            <div className='lg:w-7/12 xl:w-6/12 py-6 px-10 bg-white'>
                <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669194994/lazreb/IMG-20221122-WA0030_1_1_mceisb.png" alt="logo" className='lg:w-20 w-16 mx-auto' /></Link>
                <div className='pb-6 pt-3'>
                    <p className='text-gray-600 fw-600 text-center'>Create your account</p>
                </div>
                <form>
                    <div className='lg:flex'>
                        <div className='lg:w-6/12 lg:pr-6'>
                            <label className='fw-500'>Full Nane</label>
                            <input type="email" placeholder="Enter your full name" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                            <label className='fw-500'>Sex</label>
                            <select  className="w-full p-2 mt-2 rounded border border-gray-400">
                                <option>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:flex mt-6'>
                        <div className='lg:w-6/12 lg:pr-6'>
                            <label className='fw-500'>Email</label>
                            <input type="email" placeholder="Enter your email" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                            <label className='fw-500'>Phone Number</label>
                            <input type="number" placeholder="Enter your phone number" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                    </div>
                    <div className='lg:flex'>
                        <div className='lg:w-6/12 lg:pr-6 mt-6'>
                            <label className='fw-500'>Password</label>
                            <input type="password" placeholder="Enter your password" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-6'>
                            <label className='fw-500'>Confirm Password</label>
                            <input type="password" placeholder="Enter your password" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                    </div>
                    <div className='flex items-start my-5'>
                        <input type="checkbox" className='mt-2 mr-3'/>
                        <p>By Signing Up, I Agree to the Terms and Conditions and Privacy Policy</p>
                    </div>
                    <div className="mt-6 w-full overflow-hidden">
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_SITE_KEY}
                            ref={captchaRef}
                        />
                    </div>
                    <div className='mt-6'>
                        <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700'>
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className='mt-6 fs-500'>Already have an account ? <Link to="/login" className='fw-600 '>Login</Link></p>
            </div>
        </div>
    </div>
  )
}
