import Main from "@/components/Main";
import { ShopItem } from "@/components/ShopItemInfoCard";
import React from "react";
import Image from "next/image";
import WellnessDescription from "./wellness-description";
import CoupleDescription from "./couple-description";
import MembershipDescription from "./membership-description";
import GiftDescription from "./gift-decription";
import AddToCartButton from "@/components/AddToCartButton";
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ item: string }>;
}) => {
  const item = JSON.parse((await searchParams).item) as ShopItem;
  console.log(item.title);

  return (
    <Main>
      <div className="flex bg-gray-100 min-h-[100vh] items-center content-center flex-col">
        <div className="w-80 bg-white p-2 rounded-lg">
          <Image src={item.image} width={300} height={300} alt={""}></Image>
          <div className="text-2xl font-bold text-[#7249A4]">{item.title}</div>
        <div className="my-4">

         <AddToCartButton
       item={item}
       />
       </div>
          <p className="text-xl font-bold">description</p>
          <DescriptionLogic title={item.title} />
        </div>
      </div>
    </Main>
  );
};

const DescriptionLogic = ({ title }: { title: string }) => {
  switch (title) {
    case "Wellness Gift Card":
      return <GiftDescription />;
    case "Couple's Massage Voucher":
      return <CoupleDescription />;
    case "Membership Card":
      return <MembershipDescription />;
    case "Wellness Massage Packages":
      return <WellnessDescription />;
  }
};

export default page;
