/**
 * @name test.js
 * @description test les commandes mongoDB
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 * @returns {void}
 * 
 * @usage test <add/remove/list/find/update> <mot> <nouveau mot>
 * @aliases none
 */

module.exports = {

    run: async(client, message, args) => {
        let test = require('../models/test')

        // pour ajouter un mot 
        if (args[0] == 'add') {
            if (!args[1]) return message.channel.send("Veuillez entrer un mot")

            // on crée un nouveau mot
            let newTest = new test({
                mot: args[1]
            })

            // on l'ajoute à la base de données
            newTest.save()
            message.channel.send("Mot ajouté")
        }

        // pour supprimer un mot
        if (args[0] == 'remove') {
            if (!args[1]) return message.channel.send("Veuillez entrer un mot")

            // on supprime le mot de la base de données en utilisant findOneAndDelete
            test.findOneAndDelete({ mot: args[1] }, (err, res) => {
                if (err) console.log(err)
                message.channel.send("Mot supprimé")
            })
        }

        // pour lister les mots
        if (args[0] == 'list') {
            // on utilise find pour lister tous les mots contenu dans la base de données
            test.find((err, res) => {
                if (err) console.log(err)
                message.channel.send(res)
            })
        }

        // pour trouver un mot
        if (args[0] == 'find') {
            if (!args[1]) return message.channel.send("Veuillez entrer un mot")

            // on utilise findOne pour trouver un mot dans la base de données
            test.findOne({ mot: args[1] }, (err, res) => {
                if (err) console.log(err)
                message.channel.send(res)
            })
        }

        // pour modifier un mot
        if (args[0] == 'update') {
            if (!args[1]) return message.channel.send("Veuillez entrer un mot")
            if (!args[2]) return message.channel.send("Veuillez entrer un le nouveau mot")

            // on utilise findOneAndUpdate pour modifier un mot dans la base de données
            test.findOneAndUpdate({ mot: args[1] }, { mot: args[2] }, (err, res) => {
                if (err) console.log(err)
                message.channel.send("Mot modifié")
            })
        }
    }
}

module.exports.help = {

    name: 'test'

};