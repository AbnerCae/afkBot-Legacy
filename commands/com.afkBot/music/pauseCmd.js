module.exports = {
	name: 'pause',
	aliases: ['resume', 'r'],
	code: `
	$if[$queueStatus==playing]
	$pauseSong
	$addCmdReactions[⏸️]
	$elseIf[$queueStatus==paused]
	$resumeSong
	$addCmdReactions[▶️]
	$endelseIf
	$else
	$endIf
	`
};