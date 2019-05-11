import {
    sayit,
    speekResponse,
    voices
} from "./speak.js";

let state = "OFF";
chrome.browserAction.onClicked.addListener(function(tab) {


    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();

    }
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            start: "start"
        }, function(response) {
            console.log(response.selectedText);

            var voices = window.speechSynthesis.getVoices();
            speekResponse(response.selectedText)
        });
    });

});