function onClick() {
    chrome.tabs.query({
        "active": false
    }, (tabs) => {
        tabs.forEach(tab => {
            chrome.tabs.remove(tab.id);
        });
    });
}

chrome.browserAction.onClicked.addListener(onClick);