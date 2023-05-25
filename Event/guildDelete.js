/**
 * @param {*} client 
 * @param {*} guild 
 * 
 * @returns {void}
 * 
 * @description Cette fonction est appelée lorsque le bot quitte un serveur.
 */


module.exports = async(client, guild) => {
    console.log("Left a guild : " + guild.name);

};