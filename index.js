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

//test

bot.command({
name:"hi",
code:`
$apiMessage[$channelId;hi;{author:hi::}{title:hello}{field:ok:lol:no}{color:#8700ff}{footer:hmmm:$authorAvatar};{actionRow:click me,2,1,click};$messageID:true;no]
`
});

bot.command({
name:"buttoncollector",
code:`
   $buttonCollector[$get[id];$authorID;1m;click;awaitclick;Only $userName can use this interaction,,64]
   $let[id;$apiMessage[$channelID;hi;;{actionRow:click me,2,1,click};;yes]]
     `
 });
bot.awaitedCommand({
name:"awaitclick",
code:`
   $interactionReply[Hello;;;64]
     `
 });
