function init() {
	const filter = {
		url: [
			{
				urlContains: "twitch.tv/settings/",
				schemes: ["https"],
			},
		],
	};

	chrome.webNavigation.onCompleted.addListener(function ({ tabId }) {
		chrome.scripting.executeScript({
			target: { tabId },
			files: ['hide-details.js'],
		});
	}, filter);

	chrome.webNavigation.onHistoryStateUpdated.addListener(function ({ tabId }) {
		chrome.scripting.executeScript({
			target: { tabId },
			files: ['hide-details.js'],
		});
	}, filter);
}

try {
	init();
} catch (error) {
	console.error("PryingEyes error", error);
}
