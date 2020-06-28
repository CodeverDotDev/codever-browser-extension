[Bookmarks.dev Chrome Extension](https://chrome.google.com/webstore/detail/save-to-bookmarksdev/diofdblfhjbpgackifolmboaiccmebjb)
---
The official chrome extension for www.bookmarks.dev, the bookmark manager for Developers & Co. 

Save current's tab URL to [Bookmarks.dev](https://www.bookmarks.dev). You need to have an account to begin with.

A popup window is launched where you can add the metadata for the bookmark. **Title** and **description** are auto completed.
 (the **description** is filled with `meta="description"` value if present on the website, unless to select text on the page,
  before clicking the extension and this will be then)
 
> For youtube videos and stackoverflow questions the **tags** and **published on** are also auto-completed

 ![Chrome extension screenshot](docs/img/howto-save-bookmark-with-extension.gif)

## Testing locally
Check out the git repository - `git clone https://github.com/BookmarksDev/bookmarks.dev-chrome-extension.git`

Go to [chrome://extensions/](chrome://extensions/), click **Load unpacked** and select the `bookmarks.dev-chrome-extension`
where you have checked it out:

![Install locally](docs/img/install-locally-and-reload-extension.png)

### Test the extension against `localhost`
Change the following line in [contens.js](content.js):
```
open('https://www.bookmarks.dev/personal/new?url=' + encodeURIComponent(l) + '&desc=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true', 'Bookmarks.dev', features);
```
to
```
open('http://localhost:4200/personal/new?url=' + encodeURIComponent(l) + '&desc=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true', 'Bookmarks.dev', features);
```

and Reload the extension 

## Upload to Google Chrome Webstore

First of all package it as a zip file:
```shell
zip -r bookmarks.dev.chrome.extension.zip * -x *.idea* *.git* '*docs/*' "*README.md*"
```

Go to [Chrome Webstore Dashboard](https://chrome.google.com/webstore/developer/dashboard) where
you upload the .zip file. Wait for a couple of business days for an approval.


