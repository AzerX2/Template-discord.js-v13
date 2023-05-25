/**
 * @file ping.js
 * @description Ce fichier sert à tester les slash commands. (et aussi à répondre pong)
 */

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong'),
    async execute(interaction) {
        interaction.reply({ content: 'Pong' })
    }
};