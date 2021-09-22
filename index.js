const aoijs = require('aoi.js');
const bot = new aoijs.Bot({
	autoUpdate: true,
	prefix: ['$getServerVar[prefix]'],
	token: process.env.TOKEN
});
bot.onMessage();
bot.onInteractionCreate();
bot.loadCommands('./commands/');
bot.status({
	text: '📦.  Rodando versão Minimalist-Dev.',
	type: 'WATCHING',
	time: 12
});
bot.variables({
	prefix: "_"
});
