module.exports = {
	name: 'queue',
	code: `
	$reply[$messageID;> 🎶.  Tocando agora:\n> **$songInfo[title]**. Pedido pelo: <@$songInfo[userID]>.
$if[$queue[1;3;{number} - {title}]!=]\n🗒️. Próximas músicas:\n$queue[1;7;  {number} - {title}. Pedido pelo <@{userID}>.]]$else$endIf
	`
};
