/**
 * @param {*} client
 * @param {*} message
 * 
 * @returns {void}
 * 
 * @description Cette fonction est appelée lorsque un message est envoyé.
 */

// On récupère le préfixe du bot
const prefix = process.env.PREFIX;

module.exports = async(client, message) => {
    if (!message.content.startsWith(prefix)) { return; }
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();
    const cmd = client.commands.get(commande);
    if (!cmd) { return; }
    cmd.run(client, message, args);
};