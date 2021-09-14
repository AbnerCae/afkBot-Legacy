module.exports = {
	name: 'status',
	code: `
	$reply[$messageID;__**Status:**__\nPing: $pingms                       **|**        Database: $dbPingms\nUptime: $uptime                       **|**        Cpu: $cpu\n__**Packages Version:**__\nNode.js: $replaceText[$nodeVersion;v;]        **|**        Aoi.js: $packageVersion]
	`
};
