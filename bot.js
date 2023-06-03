require("dotenv").config();

const { Client, Intents } = require('discord.js');

const intents = new Intents([
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  // Add other necessary intents here
]);

const client = new Client({ intents });

// Rest of your bot code

client.login('YOUR_BOT_TOKEN');
client.on("ready", () => {
  console.log("Our bot is ready to go!!");
});

client.on("message", (msg) => {
  if (msg.content === "Ping") msg.reply("Pong!");
});

