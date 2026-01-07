import React from 'react'
interface MenuCardProps {
    e: MenuItem
}
interface MenuItem {
    name: string,
    id: React.Key,
    description: String,
    pic: string,
    base_price: Number,
    sizes: Object,
    modifiers: Object,
    meal_upgrade: Object | undefined,
    type: String
}
function DemoMenuCard({e}: MenuCardProps) {
  return (
    <div key={e.id} className='overflow-hidden border border-gray-300 rounded-lg mb-5'>
        <div className='flex gap-3 p-3'>
            <div className='relative w-20 h-20 rounded-lg overflow-hidden bg-gray-200'>
            <img src={e.pic} alt={e.name} className='w-full h-full object-cover'/>
            </div>
            <div className='flex-1 min-w-0'>
            <div className='flex justify-between items-start mb-1 mt-1.5'>
                <h4 className='font-medium text-sm'>{e.name}</h4>
                <span className='text-blue-600 font-medium text-sm ml-2'>
                ${e.base_price.toFixed(2)}
                </span>
            </div>
            <p className='text-xs text-gray-600 mb-2 line-clamp-2'>{e.description}</p>
            <div className='mt-2 border rounded-lg inline-block border-gray-300'>
                <span className='text-sm px-3 py-5'>{e.type.charAt(0).toUpperCase() + e.type.slice(1)}</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DemoMenuCard