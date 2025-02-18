"use client";
import React, { useState } from "react";
import { ShopItem } from "./ShopItemInfoCard";
import Link from "next/link";
import { Cart } from "@/functions/CartFunctions";

const AddToCartButton = ({ item }: { item: ShopItem }) => {
  const [isAdded, setAdd] = useState(false);
  return (
    <div className="flex flex-row gap-6">
      <button
        className="px-6 py-2 bg-[#5CAE97] text-white text-lg font-bold rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        onClick={() => {
          Cart.addItemToCart({
            image: item.image,
            title: item.title,
            featureList: item.featureList,
            price: item.price,
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
