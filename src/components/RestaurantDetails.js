import React from 'react'
import Header from './Header'
import { MdStars } from "react-icons/md";
import { useParams } from 'react-router-dom';
import useMenuInfo from './customHooks/useMenuInfo';
import RestaurantCategories from './RestaurantCategories';

const RestaurantDetails = () => {
    const { resId } = useParams();
    const menuInfo = useMenuInfo(resId);
    const data = menuInfo?.data?.cards[2]?.card?.card?.info;
    // console.log(data)
    // console.log(menuInfo) 
//    for the above line when component is rendered initially the value of hotelInfo will be a null thats why we have to write conditional rendering like if data && (code)
//    const menuCategories = menuInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
//    const filteredCategories = menuCategories.filter((category)=>category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(filteredCategories)
    return (
      <div>
        <Header />
        {data &&  (
            <>
                <div className='h-auto w-1/2 mx-auto mt-10 p-5 flex justify-between items-start shadow-lg'>
                    <h1 className='text-xl font-bold'>{data.name}</h1>
                    <div className='flex'>
                    <p className='mr-2'>
                        <MdStars className='inline mr-2' />
                        {data.avgRatingString}
                    </p>
                    <p>({data.totalRatingsString})</p>
                    </div>
                </div>
                    <div>
                        {/* {
                            filteredCategories.map((category)=><RestaurantCategories key={category?.card?.card?.title} restaurantObjects={category}/>)
                        } */}
                        <RestaurantCategories resCategory= {menuInfo}/>
                    </div>
            </>
        )}
      </div>
    );
  };

export default RestaurantDetails