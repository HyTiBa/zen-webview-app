"use client";
import Main from "@/components/Main";
import { Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { Cart } from "@/functions/CartFunctions";
import Link from "next/link";
const CartPage = () => {
  const [cart, setCart] = useState(Cart.getCart());

  const updateQuantity = (itemIndex: number, delta: number) => {
    setCart((prevItems) =>
      prevItems.map((item, index) =>
        index === itemIndex ? { ...item, amount: item.amount + delta } : item
      )
    );
  };

  return (
    <Main>
      <div className="p-4 max-w-md mx-auto">
        {cart.map((item, index) => (
          <Card key={index} className="mb-4">
            <CardContent className="flex items-center justify-between">
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
                <Button
                  onClick={() => {
                    updateQuantity(index, -1);
                    Cart.updateQuantity(item, -1);
                  }}
                  disabled={item.amount === 0}
                >
                  -
                </Button>
                <span className="font-medium">{item.amount}</span>
                <Button
                  onClick={() => {
                    updateQuantity(index, 1);
                    Cart.updateQuantity(item, 1);
                  }}
                >
                  +
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        <Link href={"/checkout"}>
          <div className="flex justify-center">
            <button className="px-6 py-2 bg-[#5CAE97] text-white text-lg font-bold rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
              Go To Checkout
            </button>
          </div>
        </Link>
      </div>
    </Main>
  );
};

export default CartPage;
