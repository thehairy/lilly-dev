const Command = require("../../Structures/Command"),
  { MessageEmbed } = require("discord.js");
module.exports = class extends Command {
  constructor(...a) {
    super(...a, {
      
      category: "\uD83C\uDFA7Music",
      description: "Tells you what is the queue/playlist currently stored.",
      usage: "",
      
    });
  }
  async run(a) {
    const b = a.client.queue.get(a.guild.id);
    if (!b) return interaction.reply("There is nothing playing.");
    const c = new MessageEmbed()
      .setTitle("\uD83C\uDFB6Song Queue\uD83C\uDFB6")
      .setDescription(
        `Song,
      ${b.songs.map((a) => `**-** ${a.title}`).join("\n")}`
      )
      .setColor("RANDOM");
    interaction.reply(c);
  }
};
