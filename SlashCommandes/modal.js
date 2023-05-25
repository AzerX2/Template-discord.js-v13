/**
 * @file modal.js
 * @description Ce fichier sert à tester les modals.
 */

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, Modal, TextInputComponent } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('modal')
        .setDescription('modal test'),
    async execute(interaction) {

        const askpub = new TextInputComponent()
            .setCustomId('idmodalask')
            .setLabel("entrer le texte")
            .setStyle('PARAGRAPH');

        const row = new MessageActionRow()
            .addComponents(askpub);

        const modal = new Modal()
            .setTitle('enregistrement du texte')
            .setCustomId('idmodal')
            .addComponents(row);
        await interaction.showModal(modal);

    }
};