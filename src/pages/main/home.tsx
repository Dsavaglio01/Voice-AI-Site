import React from 'react'
import Menu from '../sections/Menu'
import Order from '../sections/Order'
import Record from '../sections/Record'
function home() {0
  return (
    <div className='flex flex-row'>
        <Menu />
        <Record />
        <Order />

    </div>
  )
}

export default home