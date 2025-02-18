import React from "react";
import Image from "next/image";
export type ShopItem = {
  image: string;
  title: string;
  featureList: string[];
  price: number;
};
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";

const ShopItemInfoCard = ({ image, title, featureList, price }: ShopItem) => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg text-start">
<Link href={
  {
    pathname:"/product",
    query:{
      item:JSON.stringify({title:title,image:image,featureList:featureList,price:price})
    }
  }
}>
      <div className="mb-4">
        <Image src={`${image}`} width={200} height={200} className="mx-auto rounded-lg" alt={""} />
      </div>

      <h2 className="text-2xl font-bold text-[#5B2C8B] mb-2">{title}</h2>

      <ul className="text-[#836B97] font-semibold text-base mb-4 space-y-1">
        {featureList.map((feature, index) => (
          <li key={index}>{`• ${feature}`}</li>
        ))}
      </ul>

      <p className="text-[#7A5C9C] text-2xl font-bold mb-4">
        {priceDisplay(price)}
      </p>
</Link>
      <AddToCartButton
        image={image}
        title={title}
        featureList={featureList}
        price={price}
      />
    </div>
  );
};

export default ShopItemInfoCard;

export function priceDisplay(number: number): string {
  const numStr: string = number.toString();

  const result: string = numStr
    .split("")
    .reverse()
    .reduce<string[]>((acc, char, index) => {
      if (index > 0 && index % 3 === 0) {
        acc.push(".");
      }
      acc.push(char);
      return acc;
    }, [])
    .reverse()
    .join("");

  return `${result} đ`;
}
