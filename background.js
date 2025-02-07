chrome.webRequest.onBeforeSendHeaders.addListener(
    details => {
        // Query valid domains, defined in options
        chrome.storage.sync.get('domains', (result) => {
            if (result.domains) {

                const validDomains = result.domains.split(',').map(i => i.toLowerCase());

                if (validDomains.includes(details.url.toLowerCase()))
                {
                    const headers = details.requestHeaders;
                    const authHeader = headers.find(header => header.name.toLowerCase() === 'authorization');

                    if (authHeader && authHeader.value.startsWith('Bearer ')) {
                        chrome.storage.local.set({ bearerToken: authHeader.value });
                    }
                }

            }
        });

    },
    { urls: ["<all_urls>"] }, // Listen to all URLs
    ["requestHeaders"]
);
