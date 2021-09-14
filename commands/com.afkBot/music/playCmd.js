module.exports = {
	name: 'play',
	aliases: ['p', 'tocar'],
	code: `
	$reply[$messageID;🎶.  $playSong[$message;1m;yes;yes;:x:.  Erro ao reproduzir essa música.]]
	$onlyIf[$message!=$reply[$messageID;:x:.  Diga o nome da música para ser tocada ou cole o link do vídeo.]]
	`
};
