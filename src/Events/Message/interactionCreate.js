const Event = require("../../Structures/Event");

module.exports = class interactionCreate extends Event {
  async run(interaction, message) {
    if (interaction.user.bot || !interaction.isCommand() || !interaction.guild)
        return;
    
    //console.log(interaction);
    console.log(
      `${interaction.commandName} command was used by ${interaction.user.username} in ${interaction.guildId} , in channel : ${interaction.channelId} `
    );
    //if (!this.client.application?.owner) await this.client.application?.fetch();

    {
      const commands = [...this.client.commands.values()].map((command) => ({
        name: command.name,
        description: command.description?.trim(), //  (command.description.substr(0, 97) + command.description.length > 97 ? '...' : '') : 'No description!',
        options: command.options ?? [],
      }));

      // await this.client.application.commands.set(commands);
      const command = this.client.commands.find(
        (cmd) => cmd.name.toLowerCase() == interaction.commandName
      );
      if (!command) return interaction.reply("That is not a valid command!");

      command.run(interaction, message, this.client);
    }
  }
};
