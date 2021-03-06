const Event = require("../../Structures/Event"),
  { MessageEmbed } = require("discord.js"),
  Guild = require("../../Database/models/Guild");
module.exports = class extends Event {
  async run(a) {
    
    const b = await Guild.findOne({ guildID: a.guild.id });
    if (b.messageDeleteMode === !1){return}
    if (!(b.messageDeleteMode === !1) && a.guild && null !== a.author) {
      const c = new MessageEmbed()
        .setAuthor(
          `${a.author.tag} (${a.author.id})`,
          a.author.displayAvatarURL()
        )
        .addField("\u276F Channel", a.channel)
        .setTimestamp(new Date())
        .setFooter("Deleted");
      a.content &&
        c.addField("\u276F Content", `${a.content.substring(0, 1020)}`),
        a.attachments.size &&
          c.addField(
            "\u276F Attachment(s)",
            `• ${a.attachments.map((a) => a.proxyURL).join("\n\u2022 ")}`
          ),
        !a.content &&
          a.embeds.length &&
          c.addField("\u276F Embeds", `${a.embeds.length}`);
      const d = b.logchannelID;
      d && null !== d && a.client.channels.cache.get(d).send(c);
    }
  }
};
