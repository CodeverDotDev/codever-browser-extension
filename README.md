Bookmarks Browser Extension
---
Browser extension to easily save links from the web to [www.bookmarks.dev](https://www.bookmarks.dev),
 the Bookmarks and Code Snippets Manager for Developers & Co.
 
## Install
This browser extension is available for:

| [![Chrome](assets/img/chrome-logo-48.png)](https://chrome.google.com/webstore/detail/save-url-to-bookmarksdev/diofdblfhjbpgackifolmboaiccmebjb) | [![Firefox](assets/img/firefox-logo-48.png)](TODO-add-link-to-firefox-store) |
|:---:|:---:|
| [Chrome](https://chrome.google.com/webstore/detail/save-to-bookmarksdev/diofdblfhjbpgackifolmboaiccmebjb) | ![Firefox](TODO-add-link-to-firefox-store) |

> If you can't use Browser Extensions, or you have a tight security blocking pop-up windows from extensions 
> (**Firefox blocks new windows from pages by default**) you can use [our bookmarklets](https://www.bookmarks.dev/howto/bookmarklets)
> which offer the same functionality 

## How to use  
**Right click** OR **click the extension icon** to save the active tab's link to [Bookmarks.dev](https://www.bookmarks.dev).

> Optionally you can select text on the webpage beforehand, to be saved in the "description" field, otherwise the
> value from `meta="description"` is used if present on the website

![Chrome extension screenshot](assets/img/bookmarks-browser-extension-in-action-optimized-800x500.gif)

> For youtube videos and stackoverflow questions the **tags** and **published on** are also auto-completed

## Testing locally
Check out the git repository - `git clone https://github.com/BookmarksDev/bookmarks-browser-extension.git`

## Chrome/Brave
Go to [chrome://extensions/](chrome://extensions/), click **Load unpacked** and select the `bookmarks.dev-chrome-extension`
where you have checked it out:

![Install locally](assets/img/chrome-install-locally-and-reload-extension.png)

> Click "Reload" on the extension when you do modifications 

### Firefox

#### Use [web-ext](https://github.com/mozilla/web-ext)
The easiest way is to use [web-ext](https://github.com/mozilla/web-ext)
 You can install it globally for example via
```
npm install --global web-ext
```
and then run the following command in the root directory of the project

```
web-ext run
```

This installs "Save link to Bookmarks.dev" as a temporary add-on, and it watches for changes in the source code
and **redeploys automatically**.

#### Manual deployment
Go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox), click **Load Temporary Add-on...**
 and select the `manifest.json` file from the `save-code-to-bookmarks.dev-browser-extension` folder where you have checked it out:

![Install locally on Firefox](assets/img/chrome-install-locally-and-reload-extension.png)

### Test the extension against the [`localhost`](https://github.com/BookmarksDev/bookmarks.dev) version of Bookmarks.dev
Change the following line in [launch-bookmarksdev-dialog](launch-bookmarksdev-dialog.js):
```
open('https://www.bookmarks.dev/personal/new?url=' + encodeURIComponent(l) + '&desc=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true', 'Bookmarks.dev', features);
```
to
```
open('http://localhost:4200/personal/new?url=' + encodeURIComponent(l) + '&desc=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true', 'Bookmarks.dev', features);
```

and Reload the extension 

## Publish browser extension to official stores

First of all zip the file either with `web-ext`
```
web-ext build -i 'resources' 'assets' 'README.md' 'CHANGELOG.md'

## with overwrite 
web-ext build --overwrite-dest -i 'resources' 'assets' 'README.md' 'CHANGELOG.md' 
```

or with the _standard_ `zip` command:
```shell
zip -r bookmarks.browser.extension.zip * -x *.idea* *.git* '*resources/*' '*assets/*' "*README.md*" "*CHANGELOG.md*" '*web-ext-artifacts/*'
```

### Publish to Google Chrome Webstore
Go to [Chrome Webstore Dashboard](https://chrome.google.com/webstore/developer/dashboard) where
you upload the .zip file. Wait for a couple of business days for an approval.


### Publish to [Firefox Webstore](https://extensionworkshop.com/documentation/publish/)

Go to [Add-ons page](https://addons.mozilla.org/en-US/developers/addons) and submit the new addon