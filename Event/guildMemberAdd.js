/**
 * 
 * @param {*} client 
 * @param {*} guildMember 
 * 
 * @returns {void}
 * 
 * @description Cette fonction est appelée lorsque un membre rejoint un serveur.
 */
module.exports = async(client, guildMember) => {
    const channel = client.channels.cache.get("ID_CHANNEL");
    channel.send(`Bienvenue ${guildMember} sur le serveur ${guildMember.guild.name} !`);
};