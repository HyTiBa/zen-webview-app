"use client"
import { CartItem } from '@/contexts/cartContext'
import { Cart } from '@/functions/CartFunctions';
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';

const CartCardContent = ({getCart}:{getCart:CartItem[]}) => {
  const [cart, setCart] = useState(getCart);

    const updateQuantity = (itemIndex: number, delta: number) => {
        setCart((prevItems) =>
          prevItems.map((item, index) =>
            index === itemIndex ? { ...item, amount: item.amount + delta } : item
          )
        );
      };

  return (
    <div className="p-4 max-w-md mx-auto">
    {cart.map((item, index) => (
      <div key={index} className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image width={100} height={80} src={`${item.image}`} alt={""} />
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">
                ${item.price * item.amount}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              onClick={() => {
                updateQuantity(index, -1);
                Cart.updateQuantity(item, -1);
              }}
            >
              -
            </div>
            <span className="font-medium">{item.amount}</span>
            <div
              onClick={() => {
                updateQuantity(index, 1);
                Cart.updateQuantity(item, 1);
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
    ))}
    <Link href={"/checkout"}>
      <div className="flex justify-center">
        <button className="px-6 py-2 bg-[#5CAE97] text-white text-lg font-bold rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
          Go To Checkout
        </button>
      </div>
    </Link>
  </div>
  )
}

export default CartCardContent