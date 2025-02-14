import Slack from "@slack/bolt"
import dotenv from 'dotenv'

dotenv.config()

const app = new Slack.App({
signingSecret:process.env.SLACK_SIGNIN_SECRET,
token: process.env.SLACK_BOT_TOKEN

})


export async function SlackShopPostMessage(text:string){

    await app.client.chat.postMessage({
        token: process.env.SLACK_BOT_TOKEN,
        channel: process.env.SLACK_CHANNEL || '',
        text:text
    })
}