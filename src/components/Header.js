import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { APP_LOGO_URL } from '../utils/constants';

const Header = () => {
    // const count = useSelector((store)=>store.cart?.count)
    // console.log(count)
    return (
        <div className='shadow-lg h-auto sm:h-32 flex flex-col sm:flex-row justify-between items-center p-3'>
            <div className="flex items-center justify-center sm:justify-start">
                <img src={APP_LOGO_URL} className='h-16 sm:h-32 w-16 sm:w-32' alt="" />
            </div>
            <div className="flex flex-col sm:flex-row items-center">
                <ul className='flex gap-5 font-bold text-xl sm:text-lg'>
                    <Link to="/"><li className='cursor-pointer ml-3'>Home</li></Link>
                    <Link to="/cart"><li className='cursor-pointer ml-3'>Cart</li></Link>
                </ul>
                {/* Add any additional elements here */}
            </div>
        </div>
    );
};

export default Header;
