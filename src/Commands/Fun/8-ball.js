
const { stripIndents } = require('common-tags');
const answers = require('../../Structures/JSONs/8-ball.json');
const Command = require("../../Structures/Command");


module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: "ask me a question, i will answer",
	  category: "ðFun",
      usage: "<Question>",
      options: [
          {
            type: "STRING",
            name: "question",
            description: "what is the question",
            required: true
          }
        ]
    });
  }
  async run(message , args ){
	  const question = args.slice().join(" ")
		return interaction.reply(stripIndents`
			_${question}_
			ð± ${answers[Math.floor(Math.random() * answers.length)]} ð±
		`);
	}
};
