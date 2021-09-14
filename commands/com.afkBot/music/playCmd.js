module.exports = {
	name: 'play',
	aliases: ['p', 'tocar'],
	code: `
	$reply[$messageID;🎶.  $playSong[$message]]
	$onlyIf[$message!=:x:.  Diga o nome da música para ser tocada ou cole o link do vídeo.]
	`
};