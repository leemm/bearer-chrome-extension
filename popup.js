const copyToClipboard = (text) => {
	const copy = event => {
		event.clipboardData.setData('Text', text);
		event.preventDefault();
	};

	document.addEventListener('copy', copy);
	document.execCommand("copy", false, null);
	document.removeEventListener('copy', copy);
};

chrome.storage.local.get('bearerToken', result => {
	if (!result.bearerToken) { document.getElementById('token').textContent = 'No active bearer token found'; return; }
	copyToClipboard(result.bearerToken);
	document.getElementById('token').textContent = 'Copied to clipboard!';

	setTimeout(() => {
		window.close();
	}, 2000);
});
