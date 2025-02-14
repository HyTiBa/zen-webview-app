"use client";
import { ShopItem } from "@/components/ShopItemInfoCard";
import React, { createContext } from "react";

export const cart: CartItem[] = [];

export const CartContext = createContext(cart);

export interface CartItem extends ShopItem {
  amount: number;
}

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

