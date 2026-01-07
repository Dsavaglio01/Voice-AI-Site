import React, {useState} from 'react'
import { Header } from './sections/Header'
import { useRouter } from 'next/router'
import { CiShoppingCart } from "react-icons/ci";
function Order() {
    const router = useRouter();
    const [orderedItems, setOrderedItems] = useState([]);
  return (
    <>
      <Header currentPage={"order"} router={router}/>
      <div className='py-12 bg-gray-50 min-h-screen'>
        <div className='mx-auto px-4'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl mb-4'>Your Order</h1>
            <p className='text-xl text-gray-600'>Review and Confirm Your Order</p>
          </div>
          <div className='flex items-center justify-center'>
            {orderedItems.length === 0 ? (
              <div className='text-center py-16 bg-white w-1/2 border border-gray-200 rounded-xl'>
                <div>
                  <CiShoppingCart className='h-16 w-16 text-gray-300 mx-auto mb-4'/>
                  <h3 className='text-2xl mb-2'>Your cart is empty</h3>
                  <p className='text-gray-600 mb-6'>Add items from the menu to get started</p>
                </div>
              </div>
            ) : (
              <div>

              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Order