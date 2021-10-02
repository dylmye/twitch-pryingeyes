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
			files: ['hideDetails.js']
		});
	}, filter);

	chrome.webNavigation.onHistoryStateUpdated.addListener(function ({ tabId }) {
		chrome.scripting.executeScript({
			target: { tabId },
			files: ['hideDetails.js']
		});
	}, filter);
}

try {
	init();
} catch (e) {
	console.error("PryingEyes error", e);
}
