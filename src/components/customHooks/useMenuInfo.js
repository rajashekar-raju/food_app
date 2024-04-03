import React, { useEffect, useState } from 'react'

const useMenuInfo = (resId) => {
    
    const [hotelInfo,setHotelInfo] = useState(null)

    useEffect(()=>{
        fetchRestaurantDetails()
    },[])

    const fetchRestaurantDetails = async () => {
        const response = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId='+resId+'&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER')
        const data = await response.json()
        // console.log(data)
        setHotelInfo(data)
    }
   
  return hotelInfo

}

export default useMenuInfo