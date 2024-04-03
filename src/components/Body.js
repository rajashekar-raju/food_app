import React, { useEffect, useState } from 'react'
import Header from './Header'
import RestaurantsHomePage from './RestaurantsHomePage'
import { Link } from 'react-router-dom'

const Body = () => {

    const [restaurantData,setRestaurantData] = useState([])

    useEffect(()=>{
        fetchData()
      },[])
    
        const fetchData = async () => {
        const response = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const data = await response.json();
        // console.log(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurantData(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }

  return (
    
    <div>
        <Header/>
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex flex-wrap'>
                {
                    restaurantData.map((hotel)=>(
                    <Link to={"/restaurants/"+hotel.info.id} key={hotel.info.id}>
                        <RestaurantsHomePage hotel_data = {hotel} />
                    </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Body