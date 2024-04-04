import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import RestaurantCategoryLists from './RestaurantCategoryLists';

const RestaurantCategories = ({ resCategory }) => {
    const [showItems, setShowItems] = useState(false);
    const [showDataIndex, setShowDataIndex] = useState(-1);
    const menuCategories = resCategory.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredCategories = menuCategories.filter(
        (category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const handleShowAndHideItems = (index) => {
        setShowDataIndex(index === showDataIndex ? -1 : index);
        setShowItems(!showItems);
    };

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 p-5 rounded-xl bg-[#f0f0f0]'>
            {filteredCategories.map((category, index) => (
                <div className='bg-white mb-3' key={category.card?.card?.title}>
                    <div
                        className='flex justify-between items-center cursor-pointer px-4 py-3'
                        onClick={() => handleShowAndHideItems(index)}
                    >
                        <p className='font-bold'>{category.card?.card?.title} ({category.card?.card?.itemCards.length})</p>
                        <span>{showItems ? <FaChevronUp /> : <FaChevronDown />}</span>
                    </div>
                    <div>{index === showDataIndex && <RestaurantCategoryLists itemDetails={filteredCategories[index]} />}</div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantCategories;
