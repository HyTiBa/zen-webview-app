import Main from "@/components/Main";
import { Suspense } from "react";
import MomoFallback from "./momoFallback";
import crypto from "crypto";
import { redirect } from "next/navigation";

const Page =  async ({searchParams}:{searchParams?:Promise<{total?:number}>}) => {
const total = (await searchParams)?.total;

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
    
  const SECRET_KEY = "hzIrmAdroXfqmfAD2Sbe2RfyauvbIT1x";
    const ACCESS_KEY = "krygyXHa3zTxWD8X";
    const PARTNER_CODE = "MOMO2CZI20210526";
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
    const REQUEST_BODY = JSON.stringify({
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
    });
    const req = await fetch(
      "https://payment.momo.vn/v2/gateway/api/create",
      {
        body: REQUEST_BODY,
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
        method: "POST",
      }
    );
    const res = await req.json();
    console.log(res);
    redirect(res.payUrl);
    
    
  return (
    <Main>
      
      <Suspense fallback={<MomoFallback />}>
      <div></div>
      </Suspense>
    </Main>
  );

};

export default Page;
