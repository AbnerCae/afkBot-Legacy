module.exports = {
	name: 'loop',
	code: `
	$if[$message[1]==song]
	$loopSong
	$elseIf[$message[1]==queue]
	$loopQueue
	$endelseIf
	$else
	Escolha \`song\` ou \`queue\`
	$endif
	`
};
