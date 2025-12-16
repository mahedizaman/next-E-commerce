import { Heart, ShoppingBasket, User } from 'lucide-react'
import React from 'react'

const CheckoutList = () => {
  return (
    <div className='flex items-center justify-end gap-2'>
      <div className="flex gap-6 ">
        <Heart className="cursor-pointer" />
        <User className="cursor-pointer" />
        <ShoppingBasket className="cursor-pointer" />
      </div>
      <button className="bg-gray-800 text-gray-300 px-4 py-3 rounded cursor-pointer">
        CHECKOUT
      </button>
    </div>
  );
}

export default CheckoutList