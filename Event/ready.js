/**
 * @param {Client} client
 * @returns {void}
 * 
 * @description Cette fonction est appelée lorsque le bot est prêt.
 */

module.exports = async(client) => {
    console.log("Bot est prêt !");
    client.user.setActivity("Ready", { type: "WATCHING" });
};