import React from 'react'
import { RESTAURANT_LOGO } from '../utils/constants'
import { MdStars } from "react-icons/md";

const RestaurantsHomePage = ({hotel_data,restaurantId}) => {

    const {cloudinaryImageId,name,avgRating,sla,cuisines} = hotel_data.info


  return (
    <>
        <div className='p-5'>
            <img className='h-36 w-60 rounded-lg cursor-pointer' src={RESTAURANT_LOGO+cloudinaryImageId} alt="hotel_logo" />
            <h1 className='text-xl max-w-60 font-bold'>{name}</h1>
            <div className='font-bold mr-1 flex items-center'> 
                <MdStars className='mr-1'/>{avgRating}
                <div className='ml-5'>{sla.slaString}</div>
            </div>
            <div><h4>{cuisines.slice(0,3).join(',')}</h4></div> 
            {/* // this try to understand */}
        </div>
    </>
  )
}

export default RestaurantsHomePage