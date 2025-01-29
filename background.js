chrome.webRequest.onBeforeSendHeaders.addListener(
  details => {
    const headers = details.requestHeaders;
    const authHeader = headers.find(header => header.name.toLowerCase() === 'authorization');

    if (authHeader && authHeader.value.startsWith('Bearer ')) {
      chrome.storage.local.set({ bearerToken: authHeader.value });
    }
  },
  { urls: ["<all_urls>"] }, // Listen to all URLs
  ["requestHeaders"]
);
