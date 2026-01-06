import React from 'react'
interface MenuItem {
    name: String,
    id: String,
    pic: String,
    base_price: Number,
    sizes: Object,
    modifiers: Object,
    meal_upgrade: Object | undefined,
    type: String
}
function MenuCard({item}: MenuItem) {
  return (
    <div className='overflow-hidden hover:shadow-2xl transition-shadow rounded-xl border border-gray-300'>
        <div className='relative h-48 overflow-hidden bg-gray-200'>
           <img src={item.pic} alt={item.name} className='w-full h-full object-cover'/>
        </div>
        <div className='m-5'>
            <div className='flex justify-between items-start'>
                <span className='text-lg'>{item.name}</span>
                <span className='text-blue-600'>${item.base_price.toFixed(2)}</span>
            </div>
            <div className='my-5'>
                <p className='text-sm text-gray-600'>{item.description}</p>
            </div>
            <div>
                <button className='w-full'>

                </button>
            </div>
        </div>
        
    </div>
  )
}

export default MenuCard