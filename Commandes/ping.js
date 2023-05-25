/**
 * @name ping
 * @description Renvoie pong
 * @usage ping
 * @aliases none
 */

module.exports = {

    run: async(client, message, args) => {
        return message.channel.send("pong")
    }
}

module.exports.help = {

    name: 'ping'

};