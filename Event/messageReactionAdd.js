/**
 * 
 * @param {*} client 
 * @param {*} reaction 
 * @param {*} user 
 * @returns 
 * 
 * @description Cette fonction est appelée lorsque un membre réagit à un message.
 */

module.exports = async(client, reaction, user) => {
    if (user.bot) return;
    if (reaction.emoji.name === '✅') {
        reaction.message.channel.send("Vous avez accepté")
    }
};