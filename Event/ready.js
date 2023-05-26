/**
 * @param {Client} client
 * @returns {void}
 * 
 * @description Cette fonction est appelée lorsque le bot est prêt.
 */

const {
    Collection
} = require('discord.js');

// Si vous souhaitez mettre seulement sur un serveur de test, mettez l'id du serveur dans la variable TEST_GUILD_ID
let TEST_GUILD_ID = ""

let TOKEN = process.env.TOKEN
const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');
const fs = require('fs');

module.exports = async(client) => {
    console.log("Bot est prêt !");
    
    // Registering the commands in the client
    const CLIENT_ID = client.user.id;

    // Slash commands
    const commandFiles = fs.readdirSync('./SlashCommandes').filter(file => file.endsWith('.js'));
    const commands = [];
    client.commands = new Collection();

    for (const file of commandFiles) {
        const command = require(`../SlashCommandes/${file}`);
        commands.push(command.data.toJSON());
        client.commands.set(command.data.name, command);
    }
    const rest = new REST({
        version: '9'
    }).setToken(TOKEN);
    (async() => {
        try {
            if (!TEST_GUILD_ID) {
                await rest.put(
                    Routes.applicationCommands(CLIENT_ID), {
                        body: commands
                    },
                );
                console.log('Successfully registered application commands globally');
            } else {
                await rest.put(
                    Routes.applicationGuildCommands(CLIENT_ID, TEST_GUILD_ID), {
                        body: commands
                    },
                );
                console.log('Successfully registered application commands for development guild');
            }
        } catch (error) {
            if (error) console.error(error);
        }
    })();
};