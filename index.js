require('dotenv').config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    console.log(message);
    message.reply({
        content: `${message.content} to you, ${message.author.globalName}`,
    });
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "bing") {
        await interaction.reply("shut up bih!");
    }

    if (interaction.commandName === "bing") {
        await interaction.reply("shut up bih!");
    }
});

client.login(
    process.env.TOKEN
);
