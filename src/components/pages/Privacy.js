import React from 'react'
import { Footer } from './home comp/Footer'
import { Header } from './home comp/Header'

export const Privacy = () => {
  return (
    <div>
        <Header/>
        <div className='section'>
            <div className='box'>
                <div>
                    Privacy Policy
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
