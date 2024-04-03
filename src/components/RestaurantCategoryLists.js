// RestaurantCategoryLists.jsx

import React from 'react';
import { FOOD_ITEM_PIC } from '../utils/constants';
import { MdStars } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './redux/cartSlice';

const RestaurantCategoryLists = ({ itemDetails }) => {
    const { itemCards } = itemDetails?.card?.card;
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addItemToCart({ item }));
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-3'>
            {itemCards.map((item) => (
                <div className='bg-white rounded-lg shadow-lg overflow-hidden' key={item.card?.info?.id}>
                    <div className='p-4'>
                        <h2 className='text-lg font-bold'>{item.card?.info?.name}</h2>
                        <p className='font-bold'>₹{item.card?.info?.price / 100}</p>
                        <p className='font-bold flex items-center'>
                            <MdStars className='inline mr-1' />
                            {item.card?.info?.ratings?.aggregatedRating?.rating} ({item.card?.info?.ratings?.aggregatedRating?.ratingCount})
                        </p>
                        <p>{item.card?.info?.description}</p>
                    </div>
                    <div className='relative'>
                        <img className='w-full h-36 object-cover' src={FOOD_ITEM_PIC + item.card?.info?.imageId} alt='food_item_pic' />
                        <button
                            className='absolute bottom-4 left-4 bg-green-500 text-white px-4 py-1 rounded-lg'
                            onClick={() => handleAddToCart(item.card?.info)}
                        >
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantCategoryLists;
