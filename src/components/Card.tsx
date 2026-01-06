import React from 'react'
import { CiMicrophoneOn, CiShoppingCart, CiChat1} from 'react-icons/ci';
import { BsLightning} from 'react-icons/bs';
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
interface CardProps {
  icon: String,
  title: String,
  description: String
}
function Card({icon, title, description}: CardProps) {
  return (
    
      <div className='border-none shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-10'>
        <div className='pt-6'>
          <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
            {icon == 'mic' ? <CiMicrophoneOn className='featureIcon'/> : icon == 'fast' ?
            <BsLightning className='featureIcon'/> : icon =='up' ? <FaArrowTrendUp className='featureIcon'/> :
            icon == 'order' ? <CiShoppingCart className='featureIcon'/> : icon == 'lang' ?
            <MdLanguage className='featureIcon'/> : icon == 'chat' ? <CiChat1 className='featureIcon'/> : <></>}
          </div>
          <h3 className='text-xl mb-2'>{title}</h3>
          <p className='text-gray-600'>{description}</p>
        </div>
      </div>
  )
}

export default Card