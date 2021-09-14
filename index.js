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
	text: '🍃',
	type: 'WATCHING',
	time: 12
});
bot.variables({
	prefix: "_"
});

const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);