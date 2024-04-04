import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FOOD_ITEM_PIC } from '../utils/constants';
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { clearAllItemsFromCart, removeItemFromCart } from './redux/cartSlice';

const CartPage = () => {
    
    const [itemCounts, setItemCounts] = useState({}); // State to store counts for each item

    const cartItems = useSelector((store) => store.cart?.selectedItems);

    const dispatch = useDispatch();

    useEffect(() => {
        if (cartItems) {
            let counts = {};
            cartItems.forEach(item => {
                // console.log(item)
                counts[item.id] = item.count;
                // console.log(counts)
            });
            setItemCounts(counts);
            // console.log("useEffect is called")
        }
    }, [cartItems]);

    const handleIncreaseCount = (itemId) => {
        setItemCounts(prevCounts => ({
            ...prevCounts,
            [itemId]: (prevCounts[itemId] || 0) + 1
        }));
        console.log(itemCounts)
    };

    const handleDecreaseCount = (itemId) => {
        if (itemCounts[itemId] > 0) {
            setItemCounts(prevCounts => ({
                ...prevCounts,
                [itemId]: (prevCounts[itemId] || 0) - 1
            }));
        }
        if (itemCounts[itemId] === 1) {
            dispatch(removeItemFromCart(itemId));
        }
    };

    const calculateTotalAmount = (item) => {
        return (itemCounts[item.id] || 0) * (item.price / 100);
    };

    const calculateGrandTotal = () => {
        let grandTotal = 0;
        cartItems.forEach(item => {
            grandTotal += calculateTotalAmount(item);
        });
        return Math.floor(grandTotal);
    };

    const handleClearAllItemsFromCart = () => {
        dispatch(clearAllItemsFromCart())
    }
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20">
            {cartItems.length === 0 ? (
                <div className='text-center mt-32'>
                    <span className='text-3xl font-bold'>Cart is empty</span>
                </div>
            ) : (
                <div className='w-full max-w-3xl mx-auto mt-20'>
                    {cartItems.map((cartItem, index) => (
                        <div key={cartItem.id} className='flex flex-col sm:flex-row justify-between items-center border-b-4 border-gray-300 mb-5'>
                            <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto mb-4 sm:mb-0">
                                <img src={FOOD_ITEM_PIC + cartItem.imageId} alt="image_pic" className='w-20 sm:w-24 rounded-xl' />
                                <p className='ml-2 sm:ml-4 w-full sm:w-28 text-sm sm:text-base'>{cartItem.name}</p>
                            </div>
                            <div className='flex justify-between p-1 items-center w-full sm:w-1/3 border border-green-900 '>
                                <span className='cursor-pointer' onClick={() => handleDecreaseCount(cartItem.id)}><HiOutlineMinusSmall /></span>
                                <span className='text-lg sm:text-xl'>{itemCounts[cartItem.id] || 0}</span>
                                <span className='cursor-pointer' onClick={() => handleIncreaseCount(cartItem.id)}><GoPlus /></span>
                            </div>
                            <div className='mt-4 mb-3 sm:mt-0'>
                                <p className='text-base'>₹{Math.floor(calculateTotalAmount(cartItem))}</p>
                            </div>
                        </div>
                    ))}
                    <div className="text-right mt-5 flex justify-between">
                        <button className='bg-red-800 px-4 py-2 rounded-lg outline-none text-black font-bold' onClick={handleClearAllItemsFromCart}>Clear cart</button>
                        <p className="text-lg font-bold">Grand Total: ₹{calculateGrandTotal()}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
 