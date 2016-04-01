chrome.browserAction.onClicked.addListener(function(tab){
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = tab.title + " " + tab.url;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
});

