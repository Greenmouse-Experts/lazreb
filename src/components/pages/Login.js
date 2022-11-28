import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
        <div className='flex bg-login lg:bg-fit bg-cover bg-bottom justify-center items-center min-h-screen '>
            <div className='lg:w-5/12 xl:w-4/12 py-6 px-10 bg-white'>
                <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669194994/lazreb/IMG-20221122-WA0030_1_1_mceisb.png" alt="logo" className='lg:w-20 w-16' /></Link>
                <div className='pb-8 pt-3'>
                    <p className='text-gray-600 fw-600'>Enter your details to access your account</p>
                </div>
                <form>
                    <div>
                        <label className='fw-500'>Email</label>
                        <input type="email" placeholder="Enter your email" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                    </div>
                    <div className='mt-6'>
                        <div className='flex justify-between'>
                            <label className='fw-500'>Password</label>
                            <Link to="/forget" className='fs-400 fw-500 text-primary'>Forget password ?</Link>
                        </div>
                        <input type="password" placeholder="Enter your email" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                    </div>
                    <div className='mt-8'>
                        <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700'>
                            Login
                        </button>
                    </div>
                </form>
                <p className='mt-8 fs-500'>Don't have an account ? <Link to="/register" className='fw-600 '>Sign Up</Link></p>
            </div>
        </div>
    </div>
  )
}
