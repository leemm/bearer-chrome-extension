document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('domains', (result) => {
        if (result.domains) {
            document.getElementById('domains').value = result.domains;
        }
    });

    document.getElementById('saveSetting').addEventListener('click', () => {
        const value = document.getElementById('domains').value;
        chrome.storage.sync.set({ domains: value }, () => {
            console.log('Domains saved!');
        });
    });
});