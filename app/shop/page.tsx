import Main from '@/components/Main'
import React from 'react'
import ShopItemInfoCard, { ShopItem } from '@/components/ShopItemInfoCard'
import Image from 'next/image'
import Link from 'next/dist/client/link'
const ShopPage = () => {
    return (
        <Main>
            <div className='flex justify-end p-4'>
                <Link href={'./cart'}>
                <Image src={'/images/shop/cart.png'} width={30} height={30} alt={''}/>
                </Link>
            </div>
            <div className='gap-6 mr-4 ml-4 flex flex-col'>
            {ShopItems.map((item, index) => (
                <ShopItemInfoCard key={index} image={item.image} title={item.title} featureList={item.featureList} price={item.price} ></ShopItemInfoCard>
            ))}

            </div>
        </Main>
    )
}

export default ShopPage

const ShopItems: ShopItem[] = [
    {
        image: "./gift.png",
        title: "Wellness Gift Card",
        featureList: ["Ideal for any occasion!", "rsonalize your gift with a Zen Wellness experience.", "Give the gift of relaxation, available in various denominations."],
        price: 600000
    }, {
        image: "./couple.png",
        title: "Couple's Massage Voucher",
        featureList: ["A shared journey of bliss for you and your special someone!", "Enjoy a memorable wellness experience together.", "Strengthen your bond with the gift of relaxation."],
        price: 1200000
    }, {
        image: "./membership.png",
        title: "Membership Card",
        featureList: ["Elevate well-being with ongoing benefits.", "Access exclusive perks and discounts.", "Commit to your wellness journey with our membership options."],
        price: 8100000
    }, {
        image: "./package.png",
        title: "Wellness Massage Packages",
        featureList: ["Save with our bundled packages!", 'Perfect for frequent wellness enthusiasts.', 'Choose from 3 or 12-packs for ultimate flexibility.'],
        price: 1692000
    },
]

