module.exports = {
	name: 'loop',
	code: `
	$if[$message[1]==]
	$loopSong
	$addCmdReactions[🔂]
	$elseIf[$toLowercase[$message[1]]==queue]
	$loopQueue
	$addCmdReactions[🔁]
	$endelseIf
	$elseIf[$loopStatus==song]
	$loopSong
	$addCmdReactions[▶️]
	$endelseIf
	$elseIf[$loopStatus==queue]
	$addCmdReactions[▶️]
	$endelseIf
	$endif
	`
};
