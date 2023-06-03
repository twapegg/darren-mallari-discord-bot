const { Client, IntentsBitField, MessageAttachment } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Rest of your bot code

client.on("ready", () => {
  console.log("Our bot is ready to go!!");
});

client.on("messageCreate", (msg) => {
  if (msg.content === "ping") msg.reply("Pong!");
});

client.on("messageCreate", (msg) => {
  if (msg.content === "yo darren") msg.reply("ye?");
});

client.on("messageCreate", (msg) => {
  if (msg.mentions.has(client.user)) msg.reply("Wassup Nigga!");
});

client.on("messageCreate", (msg) => {
  if (msg.content === "get em darren")
    msg.reply("nigger nigger nigger nigger nigger");
});

client.on("messageCreate", (msg) => {
  // if message equals a certain value, reply with an image
  if (msg.content === "vroom vroom") {
    msg.reply({
      files: [
        {
          attachment: "./images/crash.jpg",
          name: "crash.jpg",
        },
      ],
    });
  }
});

client.on("messageCreate", (msg) => {
  // if message contains goated
  if (msg.content.includes("goat")) {
    msg.reply({
      files: [
        {
          attachment: "./images/goat.jpg",
          name: "goat.jpg",
        },
      ],
    });
  }
});

client.login(
  "ODEwODk0NTI4MDIxNTI4NjY2.Gp2McE.1eYRzaxuZ5BEmp-xL686sNjfbVQOx2RZKhMKBE"
);
