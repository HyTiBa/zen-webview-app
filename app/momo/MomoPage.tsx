"use client";
import { redirect } from "next/navigation";
import crypto from "crypto";
import React from "react";

// eslint-disable-next-line @next/next/no-async-client-component
const MomoPage = async ({ total }: { total: number }) => {
  const SECRET_KEY = "dVFdjxj6ytlH7W3bogjNIE5tXThDi0zg";
  const ACCESS_KEY = "QdbeYCfoWF6sDVcS";
  const PARTNER_CODE = "MOMO2CZI20210526_TEST";
  const ORDER_INFO = "Pay with MOMO";
  const REDIRECT_URL = "zenapppro.com";
  const IPN_URL = "zenapppro.com";
  const REQUEST_TYPE = "captureWallet";
  const AMOUNT = `${total}`;
  const ORDER_ID = `zenshop_${Date.now().toString()}`;
  const REQUEST_ID = ORDER_ID;
  const EXTRA_DATA = "";

  const rawSignature =
    "accessKey=" +
    ACCESS_KEY +
    "&amount=" +
    AMOUNT +
    "&extraData=" +
    EXTRA_DATA +
    "&ipnUrl=" +
    IPN_URL +
    "&orderId=" +
    ORDER_ID +
    "&orderInfo=" +
    ORDER_INFO +
    "&partnerCode=" +
    PARTNER_CODE +
    "&redirectUrl=" +
    REDIRECT_URL +
    "&requestId=" +
    REQUEST_ID +
    "&requestType=" +
    REQUEST_TYPE;
  const signature = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(rawSignature)
    .digest("hex");
  // const REQUEST_BODY = JSON.stringify({
  //   partnerCode: PARTNER_CODE,
  //   requestType: "captureWallet",
  //   ipnUrl: IPN_URL,
  //   redirectUrl: REDIRECT_URL,
  //   orderId: ORDER_ID,
  //   amount: AMOUNT,
  //   orderInfo: ORDER_INFO,
  //   requestId: REQUEST_ID,
  //   extraData: EXTRA_DATA,
  //   signature: signature,
  //   lang: "en",
  // });
  // const options = {
  //   url: "https://test-payment.momo.vn/v2/gateway/api/create",
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Content-Length": Buffer.byteLength(REQUEST_BODY).toString(),
  //   },
  //   data: REQUEST_BODY,

  const req = await fetch(
    "https://test-payment.momo.vn/v2/gateway/api/create",
    {
      body: JSON.stringify({
        partnerCode: PARTNER_CODE,
        requestType: "captureWallet",
        ipnUrl: IPN_URL,
        redirectUrl: REDIRECT_URL,
        orderId: ORDER_ID,
        amount: AMOUNT,
        orderInfo: ORDER_INFO,
        requestId: REQUEST_ID,
        extraData: EXTRA_DATA,
        signature: signature,
        lang: "en",
      }),
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(
          JSON.stringify({
            partnerCode: PARTNER_CODE,
            requestType: "captureWallet",
            ipnUrl: IPN_URL,
            redirectUrl: REDIRECT_URL,
            orderId: ORDER_ID,
            amount: AMOUNT,
            orderInfo: ORDER_INFO,
            requestId: REQUEST_ID,
            extraData: EXTRA_DATA,
            signature: signature,
            lang: "en",
          })
        ).toString(),
      },
      mode: "no-cors",
      method: "POST",
    }
  );
  console.log(total);
  const res = await req.json();
  console.log(res.payUrl);
  console.log(Date.now());
  redirect(res.payUrl);

  return <div>MomoPage</div>;
};

export default MomoPage;

// async function startDetch(total: number) {
//   const SECRET_KEY = "dVFdjxj6ytlH7W3bogjNIE5tXThDi0zg";
//   const ACCESS_KEY = "QdbeYCfoWF6sDVcS";
//   const PARTNER_CODE = "MOMO2CZI20210526_TEST";
//   const ORDER_INFO = "Pay with MOMO";
//   const REDIRECT_URL = "zenapppro.com";
//   const IPN_URL = "zenapppro.com";
//   const REQUEST_TYPE = "captureWallet";
//   const AMOUNT = `${total}`;
//   const ORDER_ID = `zenshop_${Date.now().toString()}`;
//   const REQUEST_ID = ORDER_ID;
//   const EXTRA_DATA = "";

//   const rawSignature =
//     "accessKey=" +
//     ACCESS_KEY +
//     "&amount=" +
//     AMOUNT +
//     "&extraData=" +
//     EXTRA_DATA +
//     "&ipnUrl=" +
//     IPN_URL +
//     "&orderId=" +
//     ORDER_ID +
//     "&orderInfo=" +
//     ORDER_INFO +
//     "&partnerCode=" +
//     PARTNER_CODE +
//     "&redirectUrl=" +
//     REDIRECT_URL +
//     "&requestId=" +
//     REQUEST_ID +
//     "&requestType=" +
//     REQUEST_TYPE;
//   const signature = crypto
//     .createHmac("sha256", SECRET_KEY)
//     .update(rawSignature)
//     .digest("hex");
//   const REQUEST_BODY = JSON.stringify({
//     partnerCode: PARTNER_CODE,
//     requestType: "captureWallet",
//     ipnUrl: IPN_URL,
//     redirectUrl: REDIRECT_URL,
//     orderId: ORDER_ID,
//     amount: AMOUNT,
//     orderInfo: ORDER_INFO,
//     requestId: REQUEST_ID,
//     extraData: EXTRA_DATA,
//     signature: signature,
//     lang: "en",
//   });
//   // const options = {
//   //   url: "https://test-payment.momo.vn/v2/gateway/api/create",
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     "Content-Length": Buffer.byteLength(REQUEST_BODY).toString(),
//   //   },
//   //   data: REQUEST_BODY,

//   const req = await fetch(
//     "https://test-payment.momo.vn/v2/gateway/api/create",
//     {
//       body: REQUEST_BODY,
//       headers: {
//         "Content-Type": "application/json",
//         "Content-Length": Buffer.byteLength(
//           JSON.stringify({
//             partnerCode: PARTNER_CODE,
//             requestType: "captureWallet",
//             ipnUrl: IPN_URL,
//             redirectUrl: REDIRECT_URL,
//             orderId: ORDER_ID,
//             amount: AMOUNT,
//             orderInfo: ORDER_INFO,
//             requestId: REQUEST_ID,
//             extraData: EXTRA_DATA,
//             signature: signature,
//             lang: "en",
//           })
//         ).toString(),
//       },
//       mode: "no-cors",
//       method: "POST",
//     }
//   );
//   console.log(total);
//   const res = await req.json();
//   console.log(res.payUrl);
//   console.log(Date.now());
//   redirect(res.payUrl);
// }
