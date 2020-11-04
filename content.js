var browser = browser || chrome
browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        const l = location.href;
        let d = '';
        if ( document.getSelection() && document.getSelection().toString().trim() !== '' ) {
            d = document.getSelection();
        } else {
            d = '';
        }
        const t = document.title;
        if (request.greeting == "helloo") {
            //alert('received helloooo');
            let w, h;
            if ( innerWidth > 1400 ) {
                w = 930;
            } else {
                w = (innerWidth * 65) / 100;
            }

            if ( innerHeight > 1400 ) {
                h = 1150;
            } else {
                h = (innerHeight * 90) / 100;
            }
            const features = `toolbar=no,width=${w},height=${h},top=${innerHeight - h}, left=${innerWidth - w}`;
            //sendResponse({farewell: "goodbye"});
            const url = 'https://www.bookmarks.dev/personal/new?url=' + encodeURIComponent(l) + '&desc=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popupExt=true';
            sendResponse({url: url, width: w, height: h});
            //open(url, 'Bookmarks.dev', features);
        }

        if (request.action=== 'new_tab'){
            const url = 'https://www.bookmarks.dev/personal/new?url=' + encodeURIComponent(l) + '&desc=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true';
            sendResponse({url: url, width: w, height: h});
        }

    });