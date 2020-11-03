browser.browserAction.onClicked.addListener(launchBookmarksDevDialog);

function launchBookmarksDevDialog() {
    browser.tabs.executeScript({
        file: 'launch-bookmarksdev-dialog.js'
    });
};

browser.contextMenus.onClicked.addListener(launchBookmarksDevDialog);

browser.runtime.onInstalled.addListener(function () {
    browser.contextMenus.create({
        "id": "save-link-to-bookmarksdev",
        "title": "Save link to Bookmarks.dev",
        "contexts": ["all"]
    });
});

