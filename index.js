const { Plugin } = require('powercord/entities');

// TODO: fix friends list animations
// TODO: fix nitro page animations

module.exports = class ScalableDiscord extends Plugin {

	startPlugin() {
		this.loadStylesheet('style.scss');

		// init
		document.body.addEventListener("click", this.handleClick);

	}

	pluginWillUnload() {
		document.body.removeEventListener("click", this.handleClick);
	}

	handleClick(element) {
		var lock = false;
		element.path.forEach((a) => {
			try {
				a.classList.forEach((b) => {
						const channelBar = document.querySelector('.sidebar-2K8pFh');
						const chatBar = document.querySelector('.chat-3bRxxu');
						const friendsBar = document.querySelector('.container-1D34oG');
						const serverBar = document.querySelector('.guilds-1SWlCJ');
						const serverBarChild = document.querySelector('.tree-2wKJdG');
						// const settings_sidebar = document.querySelector('.sidebarRegion-VFTUkN');
						// const settings_content = document.querySelector('.contentRegion-3nDuYy');
						const settings_wrapper = document.querySelector(':not(.baseLayer-35bLyl).layer-3QrUeG');

					// SHOW CHAT
					if (b === "content-1x5b-n" || b === "channel-2QD9_O") {
						channelBar.classList.remove('channel-shown');
						channelBar.classList.remove('channel-stretched');
						serverBarChild.classList.remove('server-disabled');						
						//serverBarChildBETTERFOLDERS.classList.remove('server-disabled');
						serverBar.classList.remove('undarken');
						//serverBarBETTERFOLDERS.classList.remove('undarken');

						// FUNCTION ENDS HERE IF CHATBAR DOESNT EXIST (FRIENDS LIST)
						// hopefully fixed by this?
						if (document.body.contains(chatBar)) {
							chatBar.classList.remove('chat-hidden');
						} else if (document.body.contains(friendsBar)) {
							friendsBar.classList.remove('chat-hidden');
						}

					// SHOW CHANNELS
					} else if (b === "guilds-1SWlCJ") {
						channelBar.classList.add('channel-shown');
						channelBar.classList.add('channel-stretched');
						serverBarChild.classList.add('server-disabled');
						serverBar.classList.add('undarken');

						// FUNCTION ENDS HERE IF CHATBAR DOESNT EXIST (FRIENDS LIST)
						if (document.body.contains(chatBar)) {
							chatBar.classList.add('chat-hidden');
						} else if (document.body.contains(friendsBar)) {
							friendsBar.classList.add('chat-hidden');
						}
					} else if (b === "item-PXvHYJ") {
						settings_wrapper.classList.add('settings-contentshowing');
						lock = true;
						//sidebar-CFHs9e
					} else if (b === "sidebar-CFHs9e") {
						if (lock === false) {
							settings_wrapper.classList.remove('settings-contentshowing');
						}

					}

				}
			)
			}
			catch(err) {

			}
			}
		);
		lock = false;

	}

};
