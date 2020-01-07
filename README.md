Bookmarks.dev Chrome Extension
---
The official chrome extension for www.bookmarks.dev, the bookmark manager for Developers & Co. 

Save current's tab URL to [Bookmarks.dev](www.bookmarks.dev). You need to have an account to begin with.

A popup window is launched where you can add the metadata for the bookmark. **Title** and **description** are autocompleted
for you. (description is filled with `meta="description"` value if present on the website)

> You can choose to select text on the page, before clicking the extension and this will be then used for the **description**
field. 

**creationAt** (if youtube video or stackoverflow question)
 ![Chrome extension screenshot](docs/img/screenshot-chrome-extension.png)

## Upload to Google Chrome Webstore

First of all package it as a zip file:
```shell
zip -r bookmarks.dev.chrome.extension.zip * -x *.idea* *.git* *.docs* *README.md*
```

Go to [Chrome Webstore Dashboard](https://chrome.google.com/webstore/developer/dashboard) where
you upload the .zip file. Wait for a couple of business days for approval.


