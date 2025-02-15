// import { redirect } from "next/navigation";
// import crypto from "crypto";

// import Slack from "@slack/bolt";
import dotenv from "dotenv";
// import { CartItem } from "@/contexts/cartContext";

dotenv.config();

const MomoPage = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { searchParams }: any
) => {
  console.log(searchParams.total);

  try {
    // const app = new Slack.App({
    //   signingSecret: process.env.SLACK_SIGNIN_SECRET,
    //   token: process.env.SLACK_BOT_TOKEN,
    // });
    // const now = new Date();
    // const cart = JSON.parse((await searchParams).cart) as CartItem[];
    // await app.client.chat.postMessage({
    //   token: process.env.SLACK_BOT_TOKEN,
    //   channel: process.env.SLACK_CHANNEL || "",
    //   text: `
    //   --------------
    //       ${now.getMonth()}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}
    //       Order from ${(await searchParams).name}
    //       Total: VND ${(await searchParams).total} đ
    //       Cart: ${cart.map(
    //         (item) => `${item.title}
    //      amount: ${item.amount}
    //       `
    //       )}
    //       `,
    // });
    // const SECRET_KEY = "dVFdjxj6ytlH7W3bogjNIE5tXThDi0zg";
    // const ACCESS_KEY = "QdbeYCfoWF6sDVcS";
    // const PARTNER_CODE = "MOMO2CZI20210526_TEST";
    // const ORDER_INFO = "Pay with MOMO";
    // const REDIRECT_URL = "zenapppro.com";
    // const IPN_URL = "zenapppro.com";
    // const REQUEST_TYPE = "captureWallet";
    // const AMOUNT = `${(await searchParams).total}`;
    // const ORDER_ID = `zenshop_${Date.now().toString()}`;
    // const REQUEST_ID = ORDER_ID;
    // const EXTRA_DATA = "";
    // const ORDER_GROUP_ID = "";
    // const AUTO_CAPTURE = true;
    // const LANG = "vi";
    // const rawSignature =
    //   "accessKey=" +
    //   ACCESS_KEY +
    //   "&amount=" +
    //   AMOUNT +
    //   "&extraData=" +
    //   EXTRA_DATA +
    //   "&ipnUrl=" +
    //   IPN_URL +
    //   "&orderId=" +
    //   ORDER_ID +
    //   "&orderInfo=" +
    //   ORDER_INFO +
    //   "&partnerCode=" +
    //   PARTNER_CODE +
    //   "&redirectUrl=" +
    //   REDIRECT_URL +
    //   "&requestId=" +
    //   REQUEST_ID +
    //   "&requestType=" +
    //   REQUEST_TYPE;
    // const signature = crypto
    //   .createHmac("sha256", SECRET_KEY)
    //   .update(rawSignature)
    //   .digest("hex");
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
    // };
    // const req = await fetch(
    //   "https://test-payment.momo.vn/v2/gateway/api/create",
    //   {
    //     body: REQUEST_BODY,
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Content-Length": Buffer.byteLength(
    //         JSON.stringify({
    //           partnerCode: PARTNER_CODE,
    //           requestType: "captureWallet",
    //           ipnUrl: IPN_URL,
    //           redirectUrl: REDIRECT_URL,
    //           orderId: ORDER_ID,
    //           amount: AMOUNT,
    //           orderInfo: ORDER_INFO,
    //           requestId: REQUEST_ID,
    //           extraData: EXTRA_DATA,
    //           signature: signature,
    //           lang: "en",
    //         })
    //       ).toString(),
    //     },
    //     method: "POST",
    //   }
    // );
    // const res = await req.json();
    // console.log(res.payUrl);
    // console.log(Date.now());
    // redirect(res.payUrl);
  } catch (error) {
    return error;
  }

  return <div></div>;
};

export default MomoPage;
