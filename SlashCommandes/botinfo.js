/**
 * @file botinfo.js
 * @description Ce fichier sert à afficher les informations du bot.
 */

const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const createur = "mettez votre nom ici";
module.exports = {

    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Affiche les informations du bot'),

    async execute(interaction) {
        let embed = new MessageEmbed()
            .setTitle("Informations du bot")
            .setDescription("Voici les informations du bot")
            .setColor("RANDOM")
            .setThumbnail(interaction.client.user.displayAvatarURL())
            .addFields({
                name: "Nom du bot",
                value: `${interaction.client.user.username}`,
                inline: true
            }, {
                name: "Créateur",
                value: createur,
                inline: true
            }, {
                name: "Version",
                value: "1.0.0",
                inline: true
            })
            .setFooter({ text: "Bot créé par " + createur, icon_url: interaction.client.user.displayAvatarURL() })
        interaction.reply({ embeds: [embed] });

    }
}