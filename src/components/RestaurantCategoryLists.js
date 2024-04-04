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
        <div className='px-4 py-3 mt-5'>
            {itemCards.map((item) => (
                <div className='bg-white rounded-lg shadow-lg overflow-hidden flex mb-4' key={item.card?.info?.id}>
                    <div className='flex flex-col justify-between p-4 w-[85%]'>
                        <div>
                            <h2 className='text-lg font-bold'>{item.card?.info?.name}</h2>
                            <p className='font-bold'>₹{item.card?.info?.price / 100}</p>
                            <p className='font-bold flex items-center'>
                                <MdStars className='mr-1' />
                                {item.card?.info?.ratings?.aggregatedRating?.rating} ({item.card?.info?.ratings?.aggregatedRating?.ratingCount})
                            </p>
                            <p>{item.card?.info?.description}</p>
                        </div>
                    </div>
                    <div className='relative flex-shrink-0'>
                        <img className='w-36 h-36 object-cover rounded-xl' src={FOOD_ITEM_PIC + item.card?.info?.imageId} alt='food_item_pic' />
                        <button
                            className='bg-green-500 hover:bg-green-900 text-white px-6 py-2 rounded-lg absolute top-[103px] left-9'
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

export default RestaurantCategoryLists
