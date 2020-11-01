chrome.browserAction.onClicked.addListener(launchBookmarksDevDialog);

function launchBookmarksDevDialog() {
    chrome.tabs.executeScript({
        file: 'launch-bookmarksdev-dialog.js'
    });
};

chrome.contextMenus.onClicked.addListener(launchBookmarksDevDialog);

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "id": "save-link-to-bookmarksdev",
        "title": "Save link to Bookmarks.dev",
        "contexts": ["all"]
    });
});

