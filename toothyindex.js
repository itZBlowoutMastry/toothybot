const Discord = require("discord.js")
// Requires Discord.JS
const client = new Discord.Client();
// This is a new discord client
const prefix = "!"; 
// This is the prefix
client.on("ready", () => {
    // When you say "Node" and it is ready...
    console.log("Bot Is Ready!");
    // Termial will say Bot is Ready!
  });
  client.on("message", (message) => {
    // This is an event
    if (!message.content.startsWith(prefix)) return;
   // If the message starts with the prefix
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("pong!");
      // If the message starts with prefix and the trigger word, it will say what the trigger is supposed to say
    } else // Needed if you are having more than 1 text trigger
    if (message.content.startsWith(prefix + "beep")) {
      message.channel.send("boop!");
    }
  });
  client.login("Token Here");
  // DO NOT share your token with anyone or they
  // Will have full access to your bot. Usually, using 
  // A config.json works but I will not be using this for simplicity. 