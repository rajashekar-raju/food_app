import React, { useEffect, useState } from 'react';
import Header from './Header';
import RestaurantsHomePage from './RestaurantsHomePage';
import { Link } from 'react-router-dom';

const Body = () => {

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const data = await response.json();
            setRestaurantData(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
   console.log(restaurantData)
    return (
        <div>
            <Header />
            <div className='max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                    {restaurantData.map((hotel) => (
                        <Link to={"/restaurants/" + hotel.info.id} key={hotel.info.id}>
                            <RestaurantsHomePage hotelData={hotel} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body