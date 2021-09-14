module.exports = {
	name: 'status',
	code: `
	$reply[$messageID;__**Status:**__\nPing: $ping                       **|**        Database: $dbPing\nUptime: $uptime\nCpu: $cpu                    **|**        Ram: $ram\n__**Packages Version:**__\nNode.js: $nodeVersion        **|**        Aoi.js: $packageVersion]
	`
};
