{
    const l = location.href;
    let d = '';
    if ( document.getSelection() && document.getSelection().toString().trim() !== '' ) {
        d = document.getSelection();
    } else {
        d = '';
    }
    const t = document.title;
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
    const url = `https://www.bookmarks.dev/personal/new?url=${encodeURIComponent(l)}&desc=${encodeURIComponent(d)}&title=${encodeURIComponent(t)}&popup=true`;
    open(url, 'Bookmarks.dev', features);
}
