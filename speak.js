export var voices = window.speechSynthesis.getVoices();

export var sayit = function() {
    var msg = new SpeechSynthesisUtterance();
    msg.onstart = function(event) {
        console.log("started");
    };
    msg.onend = function(event) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };
    msg.onerror = function(event) {
        console.log('Errored ' + event);
    }
    msg.onpause = function(event) {
        console.log('paused ' + event);
    }
    msg.onboundary = function(event) {
        console.log('onboundary ' + event);
    }

    return msg;
}


export var speekResponse = function(text) {
    speechSynthesis.cancel(); // if it errors, this clears out the error.

    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var toSay = sayit();
        toSay.text = sentences[i];
        speechSynthesis.speak(toSay);
    }
}