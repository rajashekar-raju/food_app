import React from 'react';
import { RESTAURANT_LOGO } from '../utils/constants';
import { MdStars } from 'react-icons/md';

const RestaurantsHomePage = ({ hotelData }) => {
    const { cloudinaryImageId, name, avgRating, sla, cuisines } = hotelData.info;

    return (
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img className='h-56 w-full object-cover' src={RESTAURANT_LOGO + cloudinaryImageId} alt='hotel_logo' />
            <div className='p-4'>
                <h1 className='text-lg font-bold'>{name}</h1>
                <div className='flex items-center mt-2'>
                    <MdStars className='text-yellow-400 mr-1' />
                    <span className='font-semibold'>{avgRating}</span>
                    <div className='ml-5'>{sla.slaString}</div>
                </div>
                <div className='mt-2'>
                    <h4 className='font-semibold'>{cuisines.slice(0, 3).join(',')}</h4>
                </div>
            </div>
        </div>
    );
};

export default RestaurantsHomePage
