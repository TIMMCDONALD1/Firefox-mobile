// scripts/discord-notify.js
// Usage:
//  DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/.." node scripts/discord-notify.js "Hello from repo"
// or
//  node scripts/discord-notify.js <webhook_url> "Hello from repo"

const urlArg = process.argv[2];
const messageArg = process.argv[3];

const webhookUrl = process.env.DISCORD_WEBHOOK_URL || urlArg;
const message = messageArg || process.env.DISCORD_MESSAGE || 'Hello from the repository!';

if (!webhookUrl) {
  console.error('Error: no webhook URL provided. Set DISCORD_WEBHOOK_URL or pass it as first argument.');
  process.exit(1);
}

async function sendMessage(url, content) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`Request failed: ${res.status} ${res.statusText}\n${text}`);
      process.exit(2);
    }

    console.log('Message sent successfully');
  } catch (err) {
    console.error('Error while sending message:', err);
    process.exit(3);
  }
}

sendMessage(webhookUrl, message);
