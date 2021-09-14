module.exports = {
	type: 'musicStartCommand',
	channel: '$channelID',
	code: `
	$author[Tocando agora...;https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/282/musical-note_1f3b5.png]
	$title[$songInfo[title];$songInfo[url]
	$thumbnail[$songInfo[thumbnail]]
	$addField[Duração:;$songInfo[duration_left];yes]
	$addField[Descrição:;$songInfo[description]
	$footer[Adicionado por: $userTag[$songInfo[userID]];$userAvatar[$songInfo[userID]]]
	$color[#83639D]
	
	$if[$isPrune==false]
	$pruneMusic
	$else
	$endIf
	`
};
