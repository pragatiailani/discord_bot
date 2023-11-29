const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("secret")
        .setDescription("Replies in Secrect!"),
    async execute(interaction) {
        await interaction.reply({ content: "Secret Pong!", ephemeral: true });
        await wait(2000);
        await interaction.editReply("Pong again!");
        await interaction.followUp("re Pong again!");
        await interaction.deleteReply();
        await interaction.followUp("do you want me to stop?");
        const message = await interaction.fetchReply();
        console.log(message);
        // If you want to reply after some time of the command was run, then use deferReply:
        // await interaction.deferReply({ ephemeral: true });
        // await wait(4000);
        // await interaction.editReply('Pong!');
    },
};
