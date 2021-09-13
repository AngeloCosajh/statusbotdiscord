var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
	client.request('SET_ACTIVITY', {
		pid: process.pid,
		activity : {
			details : "------------------------------------",
			assets : {
				large_image : "cm",
				large_text : "Crosshair&Mod"
			},
			buttons : [{label : "ENTRA QUI" , url : "https://discord.gg/crosshairmod"}]
		}
	})
})
client.login({ clientId : "886287223467687946" }).catch(console.error);
