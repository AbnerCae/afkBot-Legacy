module.exports = [{
	name: 'pause',
	code: `
	$if[$queueStatus==playing]
	$pauseSong
	$addCmdReactions[⏸️]
	$else
	⏸️  A música já está pausa, use $getServerVar[prefix]resume para continuar.
	$endIf
	`
}, {
	name: 'resume',
	aliases: ['r'],
	code: `
	$if[$queueStatus==paused]
	$resumeSong
	$addCmdReactions[▶️]
	$else
	$endIf
	`
}];
