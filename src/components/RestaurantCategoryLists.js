import React from 'react'
import { FOOD_ITEM_PIC } from '../utils/constants'
import { MdStars } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addCount } from './redux/cartSlice';

const RestaurantCategoryLists = ({itemDetails}) => {
    // console.log(itemDetails)
    const {itemCards} = itemDetails?.card?.card
    console.log(itemCards)
    // const itemCards = itemDetails.card?.card?.itemCards

    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(addCount())
    }

  return (
    <div>
       {
            itemCards.map((item)=>(
                <div className='flex mt-3 p-3 gap-2' key={item.card?.info?.id}>
                    <div className='w-[90%]'>
                        <p className='font-bold text-lg'>{item.card?.info?.name}</p>
                        <p className='font-bold'>₹{item.card?.info?.price/100}</p>
                        <p className='font-bold'><MdStars className='inline mr-1'/>{item.card?.info?.ratings?.aggregatedRating?.rating}({item.card?.info?.ratings?.aggregatedRating?.ratingCount})</p>
                        <p>{item.card?.info?.description}</p>
                    </div>
                    <div className='relative'>
                        <img className='w-40 rounded-lg h-24' src={FOOD_ITEM_PIC+item.card?.info?.imageId} alt="food_item_pic" />
                        <button 
                            className='border border-green-600 bg-white rounded-lg px-5 py-2 text-green-800 font-bold absolute left-8 top-16'
                            onClick={handleIncrease}
                        >
                            Add
                        </button>
                    </div>
                    
                </div>
            ))
       }
    </div>
  )
}

export default RestaurantCategoryLists 