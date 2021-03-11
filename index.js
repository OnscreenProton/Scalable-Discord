const { Plugin } = require('powercord/entities');

module.exports = class PrivacyTab extends Plugin {

	startPlugin() {
		this.loadStylesheet('style.scss');

		// init
		document.body.addEventListener("click", this.handleClick);

	}

	handleClick(element) {
		element.path.forEach((a) => {
			try {

				a.classList.forEach((b) => {
						const channelBar = document.querySelector('.sidebar-2K8pFh');
						const chatBar = document.querySelector('.chat-3bRxxu');
						const serverBar = document.querySelector('.guilds-1SWlCJ');
						const serverBarChild = document.querySelector('.tree-3tCaw8');

					if (b === "content-1x5b-n" || b === "channel-2QD9_O") {
						channelBar.classList.remove('channel-shown');
						serverBarChild.classList.remove('server-disabled');
						serverBar.classList.remove('undarken');
						chatBar.classList.remove('chat-hidden');
						channelBar.classList.remove('channel-stretched');
					}
					if (b === "guilds-1SWlCJ") {
						channelBar.classList.add('channel-shown');
						serverBarChild.classList.add('server-disabled');
						serverBar.classList.add('undarken');
						chatBar.classList.add('chat-hidden');
						channelBar.classList.add('channel-stretched');
					}

				}
			)
			}
			catch(err) {

			}
			}
		);

	}

};