browser.browserAction.onClicked.addListener(launchCodeverDialog);

function launchCodeverDialog() {
    browser.tabs.executeScript({
        file: 'launch-codever-dialog.js'
    });
};

browser.contextMenus.onClicked.addListener(launchCodeverDialog);

browser.runtime.onInstalled.addListener(function () {
    browser.contextMenus.create({
        "id": "save-to-codever",
        "title": "Save to Codever",
        "contexts": ["all"]
    });
});

