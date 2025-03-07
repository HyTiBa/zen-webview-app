"use client";
import { Cart } from "@/functions/CartFunctions";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import { CartItem } from "@/contexts/cartContext";

const CheckoutPage = () => {
  let getCart: CartItem[] = [];
  const [total,setTotal] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getCart = Cart.getCart();
    let totalprice = 0;
    getCart.forEach((item) => {
      totalprice += item.price * item.amount;
    });
    setTotal(totalprice);
    setCart(getCart);
  }, []);
  const [cart, setCart] = useState(getCart);
 


  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="mb-4">
        <div>
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-orange-500">Summary</h2>
          </div>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-200"
            >
              <span className="text-gray-700">{item.title}</span>
              <span className="text-gray-900 font-medium">
                ${item.price * item.amount}
              </span>
            </div>
          ))}
          <div className="flex justify-between items-center py-2 mt-2">
            <span className="text-gray-700 font-bold">TOTAL:</span>
            <span className="text-gray-900 font-bold">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <CheckoutForm total={total} />
    </div>
  );
};

export default CheckoutPage;
