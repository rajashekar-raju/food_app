import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { APP_LOGO_URL } from '../utils/constants';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const selectedItems = useSelector((state) => state.cart.selectedItems);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`shadow-lg h-auto flex flex-col sm:h-32 sm:flex-row justify-between items-center p-5 ${isSticky ? 'fixed top-0 left-0 right-0 bg-white z-10' : ''}`}>
            <div className="flex items-center justify-center sm:justify-start">
                <img src={APP_LOGO_URL} className='h-16 sm:h-32 w-16 sm:w-32' alt="" />
            </div>
            <div className="sm:flex-row items-center">
                <ul className='flex gap-5 font-bold text-xl sm:text-lg'>
                    <Link to="/"><li className='cursor-pointer ml-3'>Home</li></Link>
                    <Link to="/cart">
                        <li className='cursor-pointer ml-3 relative '>
                            Cart
                            {selectedItems.length > 0 && <span className="bg-red-500 text-white absolute left-8 -top-2 rounded-full p-1 text-xs ml-1">{selectedItems.length}</span>}
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;
