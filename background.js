chrome.runtime.onInstalled.addListener(function() {
    console.log('Google Forms AutoFiller extension installed');
});

chrome.action.onClicked.addListener(function(tab) {
});