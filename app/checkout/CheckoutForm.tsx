"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cart } from "@/functions/CartFunctions";
import { CartItem } from "@/contexts/cartContext";
const CheckoutForm = ({cart,total}:{cart:CartItem[],total:number}) => {
  const [paymentType, setPayment] = useState("momo");
  const [delivery, setDelivery] = useState("zalo");
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  return (
    <>
      {showPopup == true ? (
        <div className="mb-4 absolute">
          <div>
            <p>{popupMessage}</p>
            <button
              onClick={() => {
                setShowPopup(false);
              }}
            >
              ok
            </button>
          </div>
        </div>
      ) : null}

      <div className="mb-4">
        <div>
          <div className="flex justify-center space-x-4 mb-4">
            <label htmlFor="" className="flex flex-row">
              <input
                type="radio"
                value={"momo"}
                onChange={() => {
                  setPayment("momo");
                  setPopupMessage("");
                }}
                checked={paymentType == "momo"}
              />
              <Image width={50} height={50} src={"/momo.png"} alt={""} />
            </label>
            {/* <input type="radio" value={"card"} onClick={() => { setPayment("card") }} checked={paymentType == "card"} /> */}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Email"
              className="w-full"
            />
          </div>
          <div className="flex flex-row gap-6 ">
            <label className="flex flex-row gap-3">
              <input
                type="radio"
                onChange={() => {
                  setDelivery("zalo");
                }}
                checked={delivery == "zalo"}
              />
              <Image width={30} height={30} src={"/zalo.png"} alt={""} />
            </label>
            <label className="flex flex-row gap-4">
              <input
                type="radio"
                onChange={() => {
                  setDelivery("mail");
                }}
                checked={delivery == "mail"}
              />
              <Image width={50} height={50} src={"/mail.png"} alt={""} />
            </label>
            <label className="flex flex-row gap-4">
              <input
                type="radio"
                onChange={() => {
                  setDelivery("deliver");
                }}
                checked={delivery == "deliver"}
              />
              <Image width={50} height={50} src={"/deliver.png"} alt={""} />
            </label>
          </div>
          {delivery === "zalo" ? (
            <div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  placeholder="Phone Number"
                  className="w-full"
                />
              </div>
            </div>
          ) : null}
          {delivery === "deliver" ? (
            <div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  placeholder="Address"
                  className="w-full"
                />
              </div>
            </div>
          ) : null}
          {delivery === "mail" ? (
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                className="w-full"
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <LinkToMomo
          cart={cart}
          total={total}
          name={name}
          email={email}
          address={address}
          phoneNumber={phoneNumber}
        />
      </div>
    </>
  );
};

export default CheckoutForm;

const LinkToMomo = ({
  total,
  name,
  cart,
  email,
  address,
  phoneNumber,
}: {
  name: string;
  total: number;
  cart: CartItem[];
  email: string;
  address: string;
  phoneNumber: string;
}) => {
  return (
    <Link
      href={{
        pathname: "/momo",
        query: {
          total: total,
          email: email,
          address: address,
          phoneNumber: phoneNumber,
          name: name,
          cart: JSON.stringify(cart),
        },
      }}
    >
      <button
        className="px-6 py-2 bg-[#5CAE97] text-white text-lg font-bold rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        onClick={async () => {
          Cart.setCart([]);
        }}
      >
        Pay Now
      </button>
    </Link>
  );
};
