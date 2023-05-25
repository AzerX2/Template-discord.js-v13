/**
 * 
 * @param {*} client 
 * @param {*} interaction 
 * @returns 
 * 
 * @description Cette fonction est appelée lorsque un utilisateur intéragit avec un bouton ou un menu déroulant.
 */
module.exports = async(client, interaction) => {

    //si c'est un modal 
    if (interaction.isModalSubmit()) {
        if (interaction.customId == "idmodal") {
            const txt = interaction.fields.getTextInputValue('idmodalask');
            interaction.reply({
                content: `Vous avez bien envoyé : ${txt}`
            })
        }
        // si c'est un bouton
        if (interaction.isButton()) {
            if (interaction.customId == "idbutton") {
                interaction.reply({
                    content: "Vous avez bien cliqué sur le bouton"
                })
            }
        }

        // si c'est un menu déroulant
        if (interaction.isSelectMenu()) {
            if (interaction.customId == "idselect") {
                const value = interaction.values[0];
                interaction.reply({
                    content: `Vous avez bien sélectionné : ${value}`
                })
            }
        }

        // si c'est une commande
        if (interaction.isCommand()) {
            const command = client.commands2.get(interaction.commandName);
            if (!command) return;
            try {
                await command.execute(interaction);
            } catch (error) {
                if (error) console.error(error);
                await interaction.reply({
                    content: 'There was an error while executing this command!',
                    ephemeral: true
                });
            }
        }
    }
};