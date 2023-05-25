/**
 * @param {*} client 
 * @param {*} guild 
 * 
 * @returns {void}
 * 
 * @description Cette fonction est appelée lorsque le bot rejoint un serveur.
 */


module.exports = async(client, guild) => {
    console.log("Joined a new guild : " + guild.name);
};