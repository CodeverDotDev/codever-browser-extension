//browser.browserAction.onClicked.addListener(launchBookmarksDevDialog);

/*function showPopup(){
    browser.runtime.sendMessage({greeting: "hello"}, function(response) {
        console.log(response.farewell);
    });
}*/

function launchBookmarksDevDialog() {
    browser.tabs.executeScript({
        file: 'launch-bookmarksdev-dialog.js'
    });
};

//same action when text selection and right click and save
browser.contextMenus.create({
    id: 'save-link-to-bookmarksdev',
    title: 'Save link to Bookmarks.dev',
    contexts: ['all'],
})

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'save-link-to-bookmarksdev') {
        launchBookmarksDevDialog();
    }
})



