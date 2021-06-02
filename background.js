browser.browserAction.onClicked.addListener(launchBookmarksDevDialog);

function launchBookmarksDevDialog() {
    browser.tabs.executeScript({
        file: 'launch-codever-dialog.js'
    });
};

browser.contextMenus.onClicked.addListener(launchBookmarksDevDialog);

browser.runtime.onInstalled.addListener(function () {
    browser.contextMenus.create({
        "id": "save-to-codever",
        "title": "Save to Codever",
        "contexts": ["all"]
    });
});

