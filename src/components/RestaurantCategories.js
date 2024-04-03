import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import RestaurantCategoryLists from './RestaurantCategoryLists';

const RestaurantCategories = ({resCategory}) => {
    const [showItems,setShowItems] = useState(false)
    const [showDataIndex,setShowDataIndex] = useState(-1)
    // console.log(resCategory)
    const menuCategories = resCategory.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const filteredCategories = menuCategories.filter((category)=>category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(filteredCategories)

    const handleShowAndHideItems = (index) => {
        setShowDataIndex(index === showDataIndex ? -1 : index)
        setShowItems(!showItems)
    }

  return (
    <div className='w-1/2 mx-auto mt-5 bg-[#f0f0f0]'>
        {
            filteredCategories.map((category,index)=>(
                <div className='bg-white mb-3 p-3 cursor-pointer' key={category.card?.card?.title} >
                    <div className='flex justify-between items-center' onClick={()=>handleShowAndHideItems(index)} >
                        <p className='font-bold'>{category.card?.card?.title}({category.card?.card?.itemCards.length})</p>
                        <span>{showItems ? <FaChevronUp/> : <FaChevronDown/>}</span>
                    </div>
                    <div>
                        {index == showDataIndex && <RestaurantCategoryLists itemDetails={filteredCategories[index]}/>}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default RestaurantCategories