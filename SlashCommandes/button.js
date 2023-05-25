/**
 * @file button.js
 * @description Ce fichier sert à tester les boutons.
 */

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('exemple de message avec bouton'),
    async execute(interaction) {
        const button = new MessageButton()
            .setCustomId('idbouton')
            .setLabel('bouton')
            .setStyle('PRIMARY');

        const row = new MessageActionRow()
            .addComponents(button);

        await interaction.reply({ content: 'message avec bouton', components: [row] });
    }
};