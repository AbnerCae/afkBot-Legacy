module.exports = {
	name: 'volume',
	aliases: ['v'],
	code: `
	$volume[$message[1]]
	$reply[$messageID;🎶.  Volume setado para $message[1]]
	$deleteIn[20s]
	$onlyIf[$isNumber[$message[1]]!=false;:x:.  Use apenas numeros para defenir o Volume.]
	`
};
