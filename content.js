var l = location.href;
if ( document.getSelection ) {
  d = document.getSelection();
} else {
  d = '';
}
var t = document.title;
var w, h;
if (innerWidth > 1400) {
  w = 930;
} else {
  w = (innerWidth * 65 ) / 100;
}

if(innerHeight > 1400) {
  h = 1150;
} else {
  h = (innerHeight * 90 ) / 100;
}
var features = `toolbar=no,width=${w},height=${h},top=${innerHeight - h}, left=${innerWidth - w}`;
open('https://www.bookmarks.dev/personal/new?url=' + encodeURIComponent(l) + '&desc=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true', 'Bookmarks.dev', features);
