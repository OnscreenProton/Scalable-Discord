const { Plugin } = require('powercord/entities');

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
						const serverBar = document.querySelector('.guilds-1SWlCJ');
  			//		const serverBarBETTERFOLDERS = document.querySelector('.BF-folderSidebar > .guilds-1SWlCJ');
						const serverBarChild = document.querySelector('.tree-3tCaw8');
          //  const serverBarChildBETTERFOLDERS = document.querySelector('.BF-folderSidebar > * > .tree-3tCaw8');
						const settings_sidebar = document.querySelector('.sidebarRegion-VFTUkN');
						const settings_content = document.querySelector('.contentRegion-3nDuYy');
						const settings_wrapper = document.querySelector('.layer-3QrUeG[aria-label="USER_SETTINGS"]')
					if (b === "content-1x5b-n" || b === "channel-2QD9_O") {
						channelBar.classList.remove('channel-shown');
						serverBarChild.classList.remove('server-disabled');						
						//serverBarChildBETTERFOLDERS.classList.remove('server-disabled');
						serverBar.classList.remove('undarken');
						//serverBarBETTERFOLDERS.classList.remove('undarken');
						chatBar.classList.remove('chat-hidden');
						channelBar.classList.remove('channel-stretched');
					} else if (b === "item-PXvHYJ") {
						settings_wrapper.classList.add('settings-contentshowing');
						lock = true;
						//sidebar-CFHs9e
					} else if (b === "sidebar-CFHs9e") {
						if (lock === false) {
							settings_wrapper.classList.remove('settings-contentshowing');
						}
					} else if (b === "guilds-1SWlCJ") {
						channelBar.classList.add('channel-shown');
						serverBarChild.classList.add('server-disabled');
						serverBar.classList.add('undarken');
						//serverBarChildBETTERFOLDERS.classList.add('server-disabled');
						//serverBarBETTERFOLDERS.classList.add('undarken');
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
		lock = false;

	}

};
