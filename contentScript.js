console.log("content.js")
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.start == "start") {

            sendResponse({
                selectedText: window.getSelection().toString()
            });

        }
    });