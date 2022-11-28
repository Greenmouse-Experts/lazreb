import React from 'react'
import { Link } from 'react-router-dom'

export const EmailAuth = () => {
  return (
    <div>
        <div className='flex bg-primary justify-center items-center min-h-screen '>
            <div className='lg:w-5/12 xl:w-4/12 py-6 px-10 bg-white text-center'>
                <p className='text-lg fw-600'>Account Activated</p>
                <img src="https://marketplace.creatio.com/sites/en/files/2021-10/email-validation-icon-upd_0.png" alt="email" className='w-20 mx-auto py-4'/>
                <p>Hello GreenMouse,</p>
                <p className='fs-500 py-4'>Thank you, your e-mail has been verified. Your account is now active. Please use the link below to login to your account.</p>
                <Link to="/login"><button className='w-6/12 mx-auto bg-primary py-2 text-white fw-600 rounded-lg'>Log Into Your Account</button></Link>
                <p className='mt-5 fs-500'> Back to <Link to="/" className='fw-600 '>HomePage</Link></p>
            </div>
        </div>
    </div>
  )
}
