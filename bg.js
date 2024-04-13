chrome.action.onClicked.addListener(function(tab){
  chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => {
    const tab = tabs[0];
    if (tab.url.startsWith('chrome://')) return;
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => navigator.clipboard.writeText(`${document.title} ${location.href}`)
    });
  });
});

