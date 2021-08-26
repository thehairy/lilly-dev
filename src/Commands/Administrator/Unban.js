const Command = require("../../Structures/Command");
module.exports = class extends Command {
  constructor(...a) {
    super(...a, {
      aliases: ["test"],
      category: "\uD83D\uDD14Administrator",
      description: "Echo your message to this channel or to another channel",
      usage: "[userID]",
      userPerms: ["ADMINISTRATOR"],
      options: [
          {
            type: undefined,
            name: undefined,
            description: undefined,
            required: false,
            choices: undefined,
            options: undefined
          }
        ]
    });
  }
  async run(a, b) {
    let c = b[0];
    if (!b[0]) return a.channel.send("Please give me a userID!");
    if (isNaN(b[0])) return a.channel.send("That ID is not a number !");
    let d = b.slice(1).join(" ");
    d || (d = "No reason given"),
      a.guild.fetchBans().then(async (b) => {
        if (0 == b.size)
          return a.channel.send(
            "No one can be unban because there is no user ban in this guild!"
          );
        let e = b.find((a) => a.user.id == c);
        return e
          ? void (await a.guild.members
              .unban(e.user, d)
              .catch((a) => console.log(a)),
            a.channel.send(`**${e.user}** has been unban`))
          : a.channel.send("this user is not banned");
      });
  }
};