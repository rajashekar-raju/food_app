import React from 'react'
import { APP_LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const count = useSelector((store)=>store.cart?.count)
  console.log(count)
  return (
    <div className='shadow-lg h-32 flex justify-between items-center p-3'>
        <div>
            <img src={APP_LOGO_URL} className='h-32 w-32' alt="" />
        </div>
        <div>
            <ul className='flex gap-5 font-bold text-xl'>
                <Link to="/"><li className='cursor-pointer ml-3'>Home</li></Link>
                <Link to="/cart"><li className='cursor-pointer ml-3'>Cart({count})</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header