import React from 'react';
import Header from './Header';
import { MdStars } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import useMenuInfo from './customHooks/useMenuInfo';
import RestaurantCategories from './RestaurantCategories';

const RestaurantDetails = () => {
    const { resId } = useParams();
    const menuInfo = useMenuInfo(resId);
    const data = menuInfo?.data?.cards[2]?.card?.card?.info;

    return (
        <div>
            <Header />
            {data && (
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
                    <div className='bg-white rounded-lg shadow-lg p-5 flex justify-between'>
                        <h1 className='text-xl font-bold'>{data.name}</h1>
                        <div className='flex items-center'>
                            <p className='mr-2 flex items-center'>
                                <MdStars className='mr-1' />
                                {data.avgRatingString}
                            </p>
                            <p>({data.totalRatingsString})</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <RestaurantCategories resCategory={menuInfo} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default RestaurantDetails;
