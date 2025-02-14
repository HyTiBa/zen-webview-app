import Slack from "@slack/bolt";
import dotenv from "dotenv";

dotenv.config();

const app = new Slack.App({
  signingSecret: "406504e9130df14c175212452bd20d57",
  token: "xoxb-6064883101360-8410592948050-d1BOnrQp9PGcHtMctzgC2qAm",
});

export async function SlackQRPostMessage(text: string) {
  await app.client.chat.postMessage({
    token: "xoxb-6064883101360-8410592948050-d1BOnrQp9PGcHtMctzgC2qAm",
    channel: "qr-scans",
    text: text,
  });
}
