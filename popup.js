/*chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello"){
            document.getElementById('myIframe').src = "https://www.bookmarks.dev/bookmarklets";
            sendResponse({farewell: "goodbye"});
        }

    });*/

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
/*browser.tabs.executeScript({file: "/popup.js"})
    .then(changeIframe);

function changeIframe() {
    document.getElementById('myIframe').src = "https://www.bookmarks.dev/bookmarklets";
}*/
/*chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    let url = tabs[0].url;
    document.getElementById('myIframe').src = url;
    //alert(window.getSelection().toString());
});*/

var browser = browser || chrome

window.onload = function() {
    console.log("onload" + Date());
/*    browser.runtime.sendMessage({greeting: "hello"}, function(response) {
        alert(response.farewell);
    });*/
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {greeting: "helloo"}, function(response) {
            console.log(response);
            //alert(JSON.stringify(response));
            const iframe = document.createElement('iframe');
            //iframe.style.display = "none";
            iframe.src = response.url;
            iframe.width = '' + Math.min(800, parseInt(response.width));
            iframe.height = '' + Math.min(600, parseInt(response.height));
            //alert(iframe.width + ' ' + iframe.height);
            //iframe.src = 'https://www.bookmarks.dev/personal/new';
            const content = document.getElementById('content');
            //content.setAttribute("style","display:block;width:1200px");
            //content.style.width='1200px';*/
            //content.setAttribute("style", 'width:' + response.width + 'px')
            //content.setAttribute("style", 'height:' + response.height + 'px')

            content.appendChild(iframe);
        });
    });
}
