"use client";
import { CartContext } from "@/contexts/cartContext";
import React, { useContext, useState } from "react";
import { ShopItem } from "./ShopItemInfoCard";
import Link from "next/link";
import { Cart } from "@/functions/CartFunctions";

const AddToCartButton = ({ image, title, featureList, price }: ShopItem) => {
  const [isAdded, setAdd] = useState(false);
  return (
    <div className="flex flex-row gap-6">
      <button
        className="px-6 py-2 bg-[#5CAE97] text-white text-lg font-bold rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        onClick={() => {
          Cart.addItemToCart({
            image: image,
            title: title,
            featureList: featureList,
            price: price,
            amount: 1,
          });

          setAdd(true);
        }}
      >
        Add To Cart
      </button>
      {isAdded && (
        <div className="flex items-center text-[#CC5557] font-semibold text-lg">
          <Link href={"/cart"}>
            <p>See Cart</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
