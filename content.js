//var images = document.getElementsByTagName('img');
//for (var i = 0, l = images.length; i < l; i++) {
//  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
//}

var elem = document.createElement('div');
elem.textContent = '-';
elem.id = 'profile_labeller_overlay';
document.body.appendChild(elem);

chrome.storage.sync.get(['profileLabel'], function(result) {
  console.log('Value currently is ' + result.profileLabel);
  elem.textContent = result.profileLabel;
});
