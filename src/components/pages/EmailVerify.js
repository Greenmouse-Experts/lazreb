import React from 'react'
import { Link } from 'react-router-dom'

export const EmailVeryfy = () => {
  return (
    <div>
        <div className='flex bg-primary justify-center items-center min-h-screen '>
            <div className='lg:w-5/12 xl:w-4/12 py-6 px-10 bg-white text-center'>
                <p className='text-lg fw-600'>Email Verification</p>
                <img src="https://marketplace.creatio.com/sites/en/files/2021-10/email-validation-icon-upd_0.png" alt="email" className='w-20 mx-auto py-4'/>
                <p>Hello User,</p>
                <p className='fs-500 py-4'>Thank you for signing up with Lazreb. Please enter the four (4) digit pin sent to your email.</p>
                <div className='w-10/12 mx-auto flex justify-evenly'>
                    <input type="text" className='w-12'/>
                    <input type="text" className='w-12'/>
                    <input type="text" className='w-12'/>
                    <input type="text" className='w-12'/>
                </div>
                <Link to="/login"><button className='w-7/12 mt-6 mx-auto bg-primary py-2 text-white fw-600 rounded-lg'>Proceed</button></Link>
                <p className='mt-5 fs-500'> Back to <Link to="/" className='fw-600 '>HomePage</Link></p>
            </div>
        </div>
    </div>
  )
}