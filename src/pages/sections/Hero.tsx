import React from 'react'
import { Header } from './Header'
import { useRouter } from 'next/router';
function Hero() {
    const router = useRouter();
  return (
    <>
    <Header currentPage={"/"} router={router}/>
    <section className='bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white'>
        <div className='mx-auto px-4 py-24 md:py-32 relative z-10'>
            <div className='max-w-4xl mx-auto text-center'>
                <h1 className='text-4xl md:text-6xl lg:text-7xl mb-6'>The Voice AI That Transforms Drive-Thru Experiences</h1>
                <p className='text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto'>Reduce wait times, increase accuracy, and delight customers with my conversational AI ordering system.</p>
                <button className='bg-white h-10 text-blue-700 hover:bg-blue-50 text-lg px-8 rounded-md'>
                    <span>Watch Video</span>
                </button>
                <div className='mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto'>
                    <div>
                        <div className='metrics'>98%</div>
                        <div className='metricsTitle'>Accuracy Rate</div>
                    </div>
                    <div>
                        <div className='metrics'>40%</div>
                        <div className='metricsTitle'>Faster Service</div>
                    </div>
                    <div>
                        <div className='metrics'>24/7</div>
                        <div className='metricsTitle'>Availability</div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </section>
    </>
  )
}

export default Hero