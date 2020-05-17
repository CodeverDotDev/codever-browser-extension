console.log('been here, done that');
var l = location.href;
if ( document.getSelection ) {
  d = document.getSelection();
} else {
  d = '';
}
var t = document.title;
var w, h;
if (innerWidth > 1500) {
  w = 1050;
} else {
  w = (innerWidth * 70 ) / 100;
}

if(innerHeight > 1400) {
  h = 1050;
} else {
  h = (innerHeight * 85 ) / 100;
}
var features = `toolbar=no,width=${w},height=${h},top=${innerHeight - h}, left=${innerWidth - w}`;
open('https://www.bookmarks.dev/personal/new?url=' + encodeURIComponent(l) + '&desc=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true', 'Bookmarks.dev', features);
