function manipulateDom() {
	const email = document.querySelector('p[data-a-target="security-email-text"]');
	const phone = document.querySelector('p[data-a-target="security-phone-text"]');

	if (email !== null) {
		email.textContent = "******";
	}

	if (phone !== null) {
		phone.textContent = "******";
	}
}

function trackAndApply() {
	const root = document.getElementsByClassName("settings-root__content");
	if (root === null) {
		return;
	}

	const observer = new MutationObserver(manipulateDom);
	const config = {
		attributes: true,
		subtree: true,
	};
	observer.observe(root[0], config);
}

trackAndApply();
